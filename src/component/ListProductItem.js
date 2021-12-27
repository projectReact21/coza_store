import React from "react";
import "font-awesome/css/font-awesome.css";
import { Card, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../stores/action";
import mycartService from "../services/mycartService";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginService from "./../services/loginService";

function ListProductItem({ productItem, status, home, shop }) {
  const getUser = useSelector((state) => state.auth.dataUser);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const getMyCart = useSelector((state) => state.auth.allmycarts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCart = (data, n, id) => {
    const getitemmycart = getMyCart.find((x) => x.name === n);
    if (isLogin) {
      const newData = {
        id: data.id,
        quantity: 1,
        userId: id,
      };
      if (!getitemmycart) {
        mycartService.add(newData).then((res) => {
          if (res.data.errorCode === 0) {
            toast.success(`đã thêm ${n} vào giỏ hàng `);
            mycartService.getListId(getUser.userId).then((res) => {
              dispatch({
                type: ActionTypes.LOAD_MY_CARTS,
                allmycarts: res.data.data,
              });
            });
          } else toast.warning(res.data.errorMessage);
        });
        mycartService.getListId(getUser.userId).then((res) => {
          dispatch({
            type: ActionTypes.LOAD_MY_CARTS,
            allmycarts: res.data.data,
          });
        });
      } else {
        // quantity=1
        const data = { quantity: parseInt(getitemmycart.quantity) + 1 };
        console.log(data.quantity);
        mycartService.update(getitemmycart.id, data).then((res) => {
          console.log(res.data);
          if (res.data.errorCode === 0)
            toast.info(`đã tăng ${n} thêm 1 sản phẩm `);
          else toast.warning(res.data.errorMessage);
        });
      }
    } else {
      dispatch({
        type: ActionTypes.CURRENT_LOACION,
        currentLocation: window.location.pathname,
      });
      navigate("/login");
    }
  };
  const handleChangStatus = (p, id, n) => {
    const d = new Date();
    var date = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    console.log(p);
    const x = p.listProductLike.find((l) => l === id);
    if (x === "undefined") {
    } else {
    }
    if (x) {
      p.listProductLike.splice(p.listProductLike.indexOf(x), 1);
      toast.info(`đã xóa ${n} ra khỏi  danh sách yêu thích `);
    } else {
      p.listProductLike.push(id);
      toast.success(`đã thêm ${n} vào  danh sách yêu thích `);
    }
    p.update_at = date + " " + time;
    console.log("p.email", p.email);
    loginService.putdata(p, p.id).then((res) => {
      console.log(res.data);
      dispatch({
        type: ActionTypes.LOGIN,
        dataUser: res.data.data,
      });
    });
  };
  console.log(productItem?.status);
  return (
    <Card className="overflow-hidden card__product--item">
      <div className="overflow-hidden">
        <Card.Img
          variant="top"
          className="card__product--item-img"
          src={productItem?.srcImg}
          style={{ height: "300px" }}
        />
        {home ? (
          productItem?.status.find((s) => s === "seller") ? (
            <img
              className="position-absolute "
              style={{
                width: "4rem",
                height: "4rem",
                top: "-7px",
                right: "-12px",
              }}
              alt=""
              src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/seller.png?raw=true"
            />
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {home ? (
          productItem?.status.find((s) => s === "sale") ? (
            <img
              className="position-absolute "
              style={{
                width: "4rem",
                height: "4rem",
                top: "-8px",
                left: "-2px",
              }}
              alt=""
              src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/sale.png?raw=true"
            />
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {home ? (
          productItem?.status.find((s) => s === "toprate") ? (
            <img
              className="position-absolute top-0 "
              style={{ width: "4rem", height: "4rem", left: "-2px" }}
              alt=""
              src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/toprate.png?raw=true"
            />
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {home ? (
          productItem?.status.find((s) => s === "feature") ? (
            <img
              className="position-absolute "
              style={{
                width: "4rem",
                height: "4rem",
                top: "0px",
                right: "-5px",
              }}
              alt=""
              src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/feature.png?raw=true"
            />
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {shop ? (
          productItem?.status.find((s) => s === "new") ? (
            <img
              className="position-absolute "
              style={{
                width: "4rem",
                height: "4rem",
                top: "0px",
                right: "-5px",
              }}
              alt=""
              src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/new scale.png?raw=true"
            />
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
      <Card.Body>
        <Card.Text className="position-absolute top-1 right-0 me-2">
          {status ? (
            ""
          ) : (
            <i
              onClick={() =>
                handleChangStatus(getUser, productItem.id, productItem.name)
              }
              className="fa fa-heart fs-4 card__product--item-status  "
              style={
                isLogin
                  ? getUser.listProductLike.find((l) => l === productItem.id)
                    ? { color: "red" }
                    : { color: "#eee" }
                  : { color: "#eee" }
              }
            ></i>
          )}
        </Card.Text>
        <Card.Title className="text-overflow-1 pe-4">
          {productItem?.name}
        </Card.Title>
        <Card.Text
          style={{ fontSize: "1rem" }}
        >{`$ ${productItem?.price}`}</Card.Text>
        <Row className="justify-content-center">
          <Button
            variant="primary"
            className="position-absolute card__product--item-btn mx-2 col-sm-4 col-md-6 "
            onClick={() =>
              addToCart(
                productItem ? productItem : [],
                productItem.name,
                getUser.userId
              )
            }
            // disabled={productItem?.quanity === 0}
          >
            Buy
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ListProductItem;
