import React from "react";
import "./Order.css";
import { Container } from "react-bootstrap";

const Order = () => {
  return (
    <Container fuild className="oder">
      <section
        className="ftco-section ftco-cart"
        style={{ "padding-top": "0 !important" }}
      >
        <div className="row">
          <div
            className="col-md-12 ftco-animate"
            style={{ "padding-top": "0 !important" }}
          >
            <h4 className="text-center m-b-20">Đơn hàng của tôi</h4>
            <div className="cart-list">
              <table className="table table-light">
                <thead className="thead-primary">
                  <tr className="text-center">
                    <th>Mã đơn hàng</th>
                    <th>Tên khách hàng</th>
                    <th>Thành tiền</th>
                    <th>Trạng thái</th>
                    <th>Ngày đặt</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="text-center">
                    <td className="product-name" width="10%">
                      <a href="/#" style={{ color: "blue" }}>
                        code
                      </a>
                    </td>
                    <td className="price" width="20%">
                      Thanh Hieu
                    </td>
                    <td className="total" width="20%">
                      900000
                    </td>

                    <td
                      className="product-name"
                      style={{ color: "red", "font-weight": "bold" }}
                      id="status"
                      width="20%"
                    >
                      Mới
                    </td>

                    <td
                      className="product-name"
                      style={{ color: "#82ae46", " font-weight": "bold" }}
                      id="status"
                      width="20%"
                    >
                      Ngày
                    </td>

                    {/* <td className="product-name" width="30%">

                    </td> */}

                    <td className="product-name">
                      <a
                        href="/order/deleteshop/{{ sc.id}}"
                        style={{ color: "blue" }}
                        // onclick="return confirm('Bạn có chắc muốn hủy đơn hàng này !!!')"
                      >
                        <span id="huy">Hủy</span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Order;
