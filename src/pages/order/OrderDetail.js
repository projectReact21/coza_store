import React, { useState, useEffect } from "react";
import "./Order.css";
import { Container } from "react-bootstrap";
import img from "../shop/images/product-02.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";

const OrderDetail = () => {
  const data = useSelector((state) => state.auth.dataCheckOut);
  const user = useSelector((state) => state.auth.dataUserCheckOut);
  console.log("user", user);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  console.log(data);
  useEffect(() => {
    data.map((d) => setTotal((total) => (total += d.total)));
  }, []);
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
      <span onClick={() => navigate("/order")} className="hover-layout">
        Đơn Hàng
      </span>
      <i className="fa fa-angle-right mx-1" aria-hidden="true"></i>
      <span>Chi Tiết</span>
      <Form>
        <Row className="text-center ">
          <h4 className="text-danger mt-3 text-uppercase fw-bolder">
            Chi tiết đơn hàng
          </h4>
        </Row>
        <Row className="justify-content-center">
          <div className="kHWfJY col-8">
            <div className="ipnhKS">
              <div className="name-content title">Tên khách Hàng :</div>
              <span className="mx-2 fs-4 text-primary">{user?.userName} </span>
              <div className="title">Địa chỉ người nhận :</div>
              <span className="mx-2 fs-4 text-primary">
                {"Khư Vực / Đường : " +
                  user?.dress +
                  " , " +
                  "Phường / Xã :" +
                  user?.ward +
                  " , " +
                  "Quận / Huyện :" +
                  user?.district +
                  " , " +
                  "Thành Phố :" +
                  user?.city}
              </span>
              <div className="content">
                <p className="phone-content">
                  <span>Điện thoại :</span>
                  <span className="mx-2 fs-4 text-primary">0{user?.phone}</span>
                </p>
              </div>
            </div>
          </div>
        </Row>
        <div className="row">
          <div className="col-md-12 ftco-animate">
            <div className="cart-list">
              <table className="table align-items-center ">
                <thead className="thead-primary">
                  <tr className="text-center">
                    <th>Mã đơn hàng</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {/* map san pham */}
                  {data.map((data) => (
                    <tr
                      className="text-center"
                      style={{ verticalAlign: "middle" }}
                      key={data.id}
                    >
                      <td
                        className="align-items-center"
                        style={{ verticalAlign: "middle" }}
                      >
                        {data.codeOrder}
                      </td>
                      <td className="image-prod">
                        <img
                          className="img-thumbnail"
                          src={data.srcImg}
                          alt=""
                        />
                      </td>
                      <td className="product-name">
                        <a
                          href="/#"
                          style={{ color: "blue", "text-decoration": "none" }}
                        >
                          <h3 style={{ verticalAlign: "middle" }}>
                            {data.name}
                          </h3>
                        </a>
                      </td>
                      <td className="price" style={{ verticalAlign: "middle" }}>
                        {" "}
                        {data.price} đ
                      </td>
                      <td
                        className="quantity text-center"
                        style={{ verticalAlign: "middle" }}
                      >
                        {data.quantity}
                      </td>
                      <td className="total" style={{ verticalAlign: "middle" }}>
                        {data.total}{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4">
                      <span>Tạm tính:</span>
                    </td>
                    <td>{total} đ</td>
                  </tr>
                  <tr>
                    <td colSpan="4">
                      <span>Coupon</span>
                    </td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td colSpan="4">
                      <span style={{ color: "red" }}>Tổng cộng:</span>
                    </td>
                    <td>{total} đ</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default OrderDetail;
