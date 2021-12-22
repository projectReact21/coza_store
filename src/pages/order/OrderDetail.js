import React from "react";
import "./Order.css";
import { Container } from "react-bootstrap";
import img from "../shop/images/product-02.jpg";

const OrderDetail = () => {
  return (
    <Container>
      <h4>Chi tiết đơn hàng</h4>
      <div className="kHWfJY">
        <div className="ipnhKS">
          <div className="title">Địa chỉ người nhận</div>
          <div className="content">
            <p className="name-content">Tên khách hang</p>
            <p className="adress-content">
              <span>Địa chỉ:</span> tphcm
            </p>
            <p className="phone-content">
              <span>Điện thoại</span>090990909
            </p>
          </div>
        </div>
      </div>
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
                <tr className="text-center">
                  <td className="align-items-center">code</td>
                  <td className="image-prod">
                    <img className="img-thumbnail" src={img} alt="" />
                  </td>
                  <td className="product-name">
                    <a
                      href="/#"
                      style={{ color: "blue", "text-decoration": "none" }}
                    >
                      <h3>Tên sản phẩm</h3>
                    </a>
                  </td>
                  <td className="price">Giá đ</td>
                  <td className="quantity text-center">4</td>
                  <td className="total">Thành tiềnđ</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4">
                    <span>Tạm tính:</span>
                  </td>
                  <td>100000đ</td>
                </tr>
                <tr>
                  <td colspan="4">
                    <span>Coupon</span>
                  </td>
                  <td>0</td>
                </tr>
                <tr>
                  <td colspan="4">
                    <span style={{ color: "red" }}>Tổng cộng:</span>
                  </td>
                  <td>Tong congđ</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OrderDetail;
