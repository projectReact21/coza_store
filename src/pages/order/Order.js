import React, { useEffect, useState } from "react";
import "./Order.css";
import { Container, Table, Button, Form, Row, Col } from "react-bootstrap";
import productSolded from "../../services/productSolded";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ActionTypes from "../../stores/action";
import { toast } from "react-toastify";

const Order = () => {
  const [listcheckout, setListcheckout] = useState([]);
  const [result, setResult] = useState("");
  const getUser = useSelector((state) => state.auth.dataUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    productSolded.getCheckout(getUser.userId).then((res) => {
      console.log("load lai", res.data);
      setListcheckout(res.data.data);
    });
  };
  const hanhdleCode = (e, list, id) => {
    console.log("list", list);
    dispatch({
      type: ActionTypes.DATA_USER_CHECK_OUT,
      dataUserCheckOut: list,
    });
    e.preventDefault();
    console.log(list.codeOrder);
    productSolded.getCodeOrder(list.codeOrder).then((res) => {
      console.log(res.data.errorCode);
      if (res.data.errorCode === 0) {
        dispatch({
          type: ActionTypes.DATA_CHECKOUT,
          dataCheckOut: res.data.data,
        });
        navigate(`/order/${id}`);
      }
    });
  };
  const handleDelete = (id, e) => {
    e.preventDefault();
    toast.warning("Đơn Hàng Của Bạn đang được Xử");
    productSolded.remove(id).then((res) => {
      console.log(res.data);
      if (res.data.errorCode === 0) {
        setTimeout(() => {
          loadData();
          toast.success("Đơn Hàng Của Bạn Đã được Hủy Thành Công");
        }, 6000);
      }
    });
  };
  return (
    <Container>
      <span
        className="hover-layout"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/feature")}
      >
        Thanh Toán
      </span>{" "}
      <i className="fa fa-angle-right mx-1 " aria-hidden="true"></i>
      <span className="hover-layout">Đơn Hàng</span>
      {/* <i className="fa fa-angle-right mx-1" aria-hidden="true"></i>
      <span>Chi Tiết</span> */}
      <section
        className="ftco-section ftco-cart"
        style={{ paddingTop: "0 !important" }}
      >
        <div className="row">
          {listcheckout.length === 0 ? (
            <Row>
              {listcheckout.length === 0 ? (
                <h3 className="text-center mt-3 mb-3 text-capitalize">
                  bạn không có đơn hàng nào ,vui lòng quay lại{" "}
                  <span
                    className="text-primary text-uppercase fs-4 hover-layout"
                    style={{ cursor: "pointer" }}
                    onC
                    lick={() => navigate("/shop")}
                  >
                    cửa hàng
                  </span>
                </h3>
              ) : (
                ""
              )}
            </Row>
          ) : (
            <div
              className="col-md-12 ftco-animate"
              style={{ paddingTop: "0 !important" }}
            >
              <h4 className="text-center m-b-20">Đơn hàng của tôi</h4>
              <div className="cart-list">
                <table className="table table-light">
                  <thead className="thead-primary">
                    <tr className="text-center">
                      <th>Mã đơn hàng</th>
                      <th>Tên khách hàng</th>
                      {/* <th>Thành tiền</th> */}
                      <th>Trạng thái</th>
                      <th>Ngày đặt</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>

                  <tbody>
                    {listcheckout.map((list, index) => (
                      <tr className="text-center" key={index}>
                        <td className="product-name" width="10%">
                          <a
                            href="/#"
                            style={{ color: "blue" }}
                            onClick={(e) => hanhdleCode(e, list, index)}
                          >
                            {list.codeOrder}
                          </a>
                        </td>
                        <td className="price" width="20%">
                          {list.userName}
                        </td>
                        {/* <td className="total" width="20%">
                        {""}
                      </td> */}

                        <td
                          className="product-name"
                          style={{ color: "red", fontWeight: "bold" }}
                          id="status"
                          width="20%"
                        >
                          {list.status === 0 ? "New" : "Cancel"}
                        </td>

                        <td
                          className="product-name"
                          style={{ color: "#82ae46", " fontWeight": "bold" }}
                          id="status"
                          width="20%"
                        >
                          {list.create_at.slice(0, 10)}
                        </td>

                        {/* <td className="product-name" width="30%">

                    </td> */}

                        <td className="product-name">
                          <a
                            href="/order/deleteshop/{{ sc.id}}"
                            style={{ color: "blue" }}
                            // onclick="return confirm('Bạn có chắc muốn hủy đơn hàng này !!!')"
                          >
                            <span
                              id="huy"
                              onClick={(e) => handleDelete(list.id, e)}
                            >
                              Hủy
                            </span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </Container>
  );
};

export default Order;
