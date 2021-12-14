import React, { useState } from "react";
import "font-awesome/css/font-awesome.css";
import { Card, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../stores/action";
import mycartService from "../services/mycartService";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ListProductItem({ productItem, status }) {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const getMyCart = useSelector((state) => state.auth.allmycarts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCart = (data) => {
    console.log(isLogin);
    const getitemmycart = getMyCart.find((x) => x.name === data.name);
    console.log(getitemmycart);
    if (isLogin) {
      const product = data;
      delete product.id;
      delete product.productId;
      delete product.seller;
      delete product.feature;
      delete product.topRate;
      delete product.old;
      delete product.new;
      const fullproduct = Object.assign(
        {},
        product,
        { quantity: 1 },
        { total: 0 },
        { userId: 12345 }
      );
      fullproduct.total = product.price;
      console.log(fullproduct);
      if (!getitemmycart) {
        mycartService.add(fullproduct).then((res) => {
          toast.success("add success");
        });
        // mycartService.getList().then((res) => {
        //   dispatch({
        //     type: ActionTypes.LOAD_MY_CARTS,
        //     allmycarts: res.data,
        //   });
        // });
      } else {
        dispatch({
          type: ActionTypes.ADD_TO_CART,
          payload: fullproduct,
        });
        fullproduct.quantity = getitemmycart.quantity += 1;
        mycartService.update(getitemmycart.id, fullproduct).then((res) => {
          toast.success("Update mycart success");
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
  return (
    <Card className="overflow-hidden card__product--item">
      <div className="overflow-hidden">
        <Card.Img
          variant="top"
          className="card__product--item-img"
          src={productItem?.srcImg}
        />
      </div>
      <Card.Body>
        <Card.Text className="position-absolute top-1 right-0 me-2">
          {status ? (
            ""
          ) : (
            <i
              className="fa fa-heart fs-4 card__product--item-status  "
              style={
                isLogin
                  ? parseInt(productItem?.status) === 0
                    ? { color: "#eee" }
                    : { color: "red" }
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
            onClick={() => addToCart(productItem ? productItem : [])}
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
