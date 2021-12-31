import React, { useEffect, useState } from "react";
import "./Order.css";
import { Container } from "react-bootstrap";
import productSolded from "../../services/productSolded";
import { useSelector } from "react-redux";

const Order = () => {
  const [listcheckout, setListcheckout] = useState([]);
  const getUser = useSelector((state) => state.auth.dataUser);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    productSolded.getCheckout(getUser.userId).then((res) => {
      console.log(res);
      if (res.data.errorCode === 0) {
        setListcheckout(res.data.data);
      }
    });
  };
  const hanhdleCode = (e, id) => {
    e.preventDefault();
  };
  return (
    <Container fuild="true" className="oder">
      <section
        className="ftco-section ftco-cart"
        style={{ paddingTop: "0 !important" }}
      >
        <div className="row">
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
                    <th>Thành tiền</th>
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
                          onClick={(e) => hanhdleCode(e, list.codeOrder)}
                        >
                          {list.codeOrder}
                        </a>
                      </td>
                      <td className="price" width="20%">
                        {list.userName}
                      </td>
                      <td className="total" width="20%">
                        {""}
                      </td>

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
                          <span id="huy">Hủy</span>
                        </a>
                      </td>
                    </tr>
                  ))}
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
