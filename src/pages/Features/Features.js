import React, { useEffect, useState } from "react";
import "./Features.css";
import { Container, Dropdown, Row } from "react-bootstrap";
import mycartService from "../../services/mycartService";
import ConfirmDialog from "../../component/ConfirmDialog";
import { toast } from "react-toastify";

const Features = () => {
  const [carts, setCarts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState({
    id: "",
    name: "",
    price: "",
    status: 0,
    srcImg: "",
    sale: 0,
    create_at: "",
    update_at: "",
    description: "",
    type: "",
    color: "",
    theme: "",
    sorfby: "",
    tag: "",
    quantity: 0,
    total: 0,
  });
  const [confirmOptions, setConfirmOptions] = useState({
    show: false,
    content: "",
    dataId: 0,
  });
  useEffect(() => {
    loadData();
    Total();
  }, [cartTotal]);
  const loadData = () => {
    mycartService.getList().then((res) => {
      setCarts(res.data.data);
    });
  };
  const totalCartSum = (price, quantity) => {
    return price * quantity;
  };
  const handleChangeData = (e, id) => {
    let getcartitem = carts.find((x) => x.id === id);
    const newData = { ...getcartitem };
    newData[e.target.name] = e.target.value;
    newData.total = totalCartSum(newData.price, newData.quantity);
    setCart(newData);
    console.log(newData);
  };
  const handleproductUp = (e, id) => {
    let getcartitem = carts.find((x) => x.id === id);
    const newData = { ...getcartitem };
    newData[e.target.quantity] = e.target.value + 1;
    newData.total = totalCartSum(newData.price, newData.quantity);
    setCart(newData);
    console.log(newData);
  };
  const handleSubmit = (e) => {
    // console.log(getid);
    console.log(cart);
    mycartService.update(cart.id, cart).then((res) => {
      loadData();
      toast.info(`Update success ${cart.name}`);
    });
    loadData();
  };
  const handleproductDown = (e) => {
    e.preventDefault();
  };
  const Total = () => {
    let totalVal = 0;
    for (let i = 0; i < carts.length; i++) {
      totalVal += carts[i].total;
    }
    console.log(totalVal);
    setCartTotal(totalVal);
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    const selecteCartItem = carts.find((x) => x.id === id);
    if (selecteCartItem) {
      setConfirmOptions({
        show: true,
        content: `Are you sure you want to delete "${selecteCartItem.name}" ? `,
        dataId: id,
      });
    }
  };
  const handleConfirm = (id) => {
    setConfirmOptions({ show: false });
    if (id) {
      mycartService.delete(id).then((res) => {
        loadData();
        toast.warning("Delete Success");
      });
    }
  };
  return (
    <>
      <Container>
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <a href="index.html" className="text-link trans-04">
            Home
            <i
              className="fa fa-angle-right m-l-9 m-r-10"
              aria-hidden="true"
            ></i>
          </a>

          <span className="text-link text-color">Shoping Cart</span>
        </div>
      </Container>

      <form className="bg0 p-t-75 p-b-85">
        <Container>
          <Row>
            <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
              <div className="m-l-25 m-r--38 m-lr-0-xl">
                <div className="wrap-table-shopping-cart">
                  <table className="table-shopping-cart">
                    <thead>
                      <tr className="table_head">
                        <th className="column-1">Product</th>
                        <th className="column-2"></th>
                        <th className="column-3">Price</th>
                        <th className="column-4">Quantity</th>
                        <th className="column-5">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {carts.map((item, index) => (
                        <tr className="table_row" key={index}>
                          <td className="column-1">
                            <div className="how-itemcart1">
                              <img src={item.srcImg} name="srcImg" alt="IMG" />
                              <i
                                className="fa fa-times itemcart-icon"
                                aria-hidden="true"
                                onClick={(e, id) => handleDelete(e, item.id)}
                              ></i>
                            </div>
                          </td>
                          <td className="column-2" name="name">
                            {item.name}
                          </td>
                          <td className="column-3" name="price">
                            $ {item.price}
                          </td>
                          <td className="column-4">
                            <div className="wrap-input">
                           
                              <input
                                id="txtquantity"
                                className="form-control mtext-104 cl3 txt-center"
                                type="number"
                                name="quantity"
                                defaultValue={item.quantity}
                                onChange={(e, id) => {
                                  handleChangeData(e, item.id);
                                }}
                              />
                            </div>
                          </td>
                          <td className="column-5">$ {item.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                  <div className="flex-w flex-m m-r-20 m-tb-5">
                    <input
                      className=" input-coupon  p-lr-20 m-r-10 m-tb-5"
                      type="text"
                      name="coupon"
                      placeholder="Coupon Code"
                    />

                    <div className="flex-c-m  hov-btn3 p-lr-15 trans-04 pointer m-tb-5 btn-Apply">
                      Apply coupon
                    </div>
                  </div>

                  <div className="flex-c-m   hov-btn3 p-lr-15 trans-04 pointer m-tb-10 btn-Apply ">
                    <button
                      type="button"
                      className=" btn-Apply"
                      onClick={handleSubmit}
                    >
                      Update Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
              <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>

                <div className="flex-w flex-t bor12 p-b-13">
                  <div className="size-208">
                    <span className="stext-110 cl2">Subtotal:</span>
                  </div>

                  <div className="size-209">
                    <span className="mtext-110 cl2">$ {cartTotal}</span>
                  </div>
                </div>

                <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                  <div className="size-208 w-full-ssm">
                    <span className="stext-110 cl2">Shipping:</span>
                  </div>

                  <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">
                    <p className="stext-111 cl6 p-t-2">
                      There are no shipping methods available. Please double
                      check your address, or contact us if you need any help.
                    </p>

                    <div className="p-t-15">
                      <span className="stext-112 cl8">Calculate Shipping</span>

                      <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                        <Dropdown>
                          <Dropdown.Toggle variant="info" id="dropdown-basic">
                            Select a country...
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item>USA</Dropdown.Item>
                            <Dropdown.Item>UK</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* <select className="js-select2" name="time">
                          <option>Select a country...</option>
                          <option>USA</option>
                          <option>UK</option>
                        </select> */}
                        <div className="dropDownSelect2"></div>
                      </div>

                      <div className="bor8 bg0 m-b-12">
                        <input
                          className="stext-111 cl8 plh3 size-111 p-lr-15"
                          type="text"
                          name="state"
                          placeholder="State /  country"
                        />
                      </div>

                      <div className="bor8 bg0 m-b-22">
                        <input
                          className="stext-111 cl8 plh3 size-111 p-lr-15"
                          type="text"
                          name="postcode"
                          placeholder="Postcode / Zip"
                        />
                      </div>

                      <div className="flex-w">
                        <div className="flex-c-m btn-Apply p-lr-15 trans-04 pointer">
                          Update Totals
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-w flex-t p-t-27 p-b-33">
                  <div className="size-208">
                    <span className="mtext-101 cl2">Total:</span>
                  </div>

                  <div className="size-209 p-t-1">
                    <span className="mtext-110 cl2">$79.65</span>
                  </div>
                </div>

                <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </Row>
        </Container>
      </form>
      <ConfirmDialog options={confirmOptions} onConfirm={handleConfirm} />
    </>
  );
};

export default Features;
