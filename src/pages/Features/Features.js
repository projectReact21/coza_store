import React, { useEffect, useState } from "react";
import "./Features.css";
import { Container, Dropdown, Row } from "react-bootstrap";
import mycartService from "../../services/mycartService";
import ConfirmDialog from "../../component/ConfirmDialog";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../../stores/action";

import productSolded from "../../services/productSolded";

import { DebounceInput } from "react-debounce-input";

const Features = () => {
  const [inputValue, setInputValue] = useState();
  const [carts, setCarts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [city, setCity] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const getUser = useSelector((state) => state.auth.dataUser);
  const getCarts = useSelector((state) => state.auth.allmycarts);
  const [checkouts, setCheckouts] = useState([]);
  const [tp, setTp] = useState({
    dress: "",
    city: "",
    district: "",
    ward: "",
  });
  const [checkout, setCheckout] = useState({
    userId: 0,
    userName: "",
    productName: "",
    dress: "",
    phone: "",
    status: 0,
    create_at: "",
    update_at: "",
    ward: "",
    district: "",
    city: "",
    price: "",
    quantitys: "",
    total: "",
    srcImg: "",
  });
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
  const dispatch = useDispatch();
  const [confirmOptions, setConfirmOptions] = useState({
    show: false,
    content: "",
    dataId: 0,
  });
  useEffect(() => {
    loadData();
    // Total();
  }, [cartTotal, wards]);
  const Total = () => {
    let totalVal = 0;
    for (let i = 0; i < carts.length; i++) {
      totalVal += carts[i].total;
    }
    setCartTotal(parseFloat(totalVal).toFixed(2));
  };
  const getMyCart = (data) => {
    dispatch({
      type: ActionTypes.LOAD_MY_CARTS,
      allmycarts: data,
    });
  };
  const loadData = () => {
    mycartService.getListId(getUser.userId).then((res) => {
      setCarts(res.data.data);
      getMyCart(res.data.data);
      Total();
    });
    fetch("https://provinces.open-api.vn/api/?depth=2")
      .then((res) => res.json())
      .then((result) => {
        setCity(result);
      });
  };
  const totalCartSum = (price, quantity) => {
    return price * quantity;
  };

  const handleChangeData = (e, id, quantity) => {
    console.log("e.target.value", e.target.value);
    console.log("id", id);
    if (parseInt(e.target.value) === 0) {
      console.log("do delete");
      mycartService.delete(id).then((res) => {
        console.log(res.data);
        if (res.data.errorCode === 0) {
          toast.success(`đã xóa thành công ${cart.name} ra khỏi giỏ hàng`);
          loadData();
        } else {
          toast.warning("update fail");
        }
      });
    } else {
      let data = { quantity: parseInt(e.target.value) };
      console.log(cart.id);
      mycartService.update(id, data).then((res) => {
        console.log(res.data);
        toast.info(`đã cập nhật lại số lượng  ${cart.name} thành công `);
        loadData(res.data);
      });
      loadData();
    }
  };
  const ChangeTp = (e) => {
    const newData = { ...tp };
    newData[e.target.name] = e.target.value;
    setTp(newData);
    console.log(newData);
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
  const handleChangeCity = (e) => {
    e.preventDefault();
    const dis = city.find((x) => x.codename === e.target.value);
    console.log(dis.districts);
    setDistricts(dis.districts);
    const newData = { ...tp };
    newData[e.target.name] = e.target.value;
    setTp(newData);
  };
  const handleChangeDistrict = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const newData = { ...tp };
    newData[e.target.name] = e.target.value;
    setTp(newData);
    fetch("https://provinces.open-api.vn/api/w")
      .then((res) => res.json())
      .then((result) => {
        wards.length = 0;
        for (var i = 0; i <= result.length - 1; i++) {
          if (parseInt(result[i].district_code) === parseInt(e.target.value))
            wards.push(result[i]);
        }
        loadData();
      });
  };
  const handleCheckout = (e) => {
    e.preventDefault();
    const newData = getCarts;
    // console.log(newData);
    checkouts.length = 0;
    for (var i = 0; i < newData.length; i++) {
      const fullproduct = Object.assign({}, newData[i], {
        productName: newData[i].name,
        dress: tp.dress,
        phone: getUser.phone,
        ward: tp.ward,
        district: tp.district,
        city: tp.city,
        quantitys: newData[i].quantity,
      });
      delete fullproduct.id;
      delete fullproduct.type;
      delete fullproduct.color;
      delete fullproduct.theme;
      delete fullproduct.sorfby;
      delete fullproduct.tag;
      delete fullproduct.name;
      delete fullproduct.quantity;
      delete fullproduct.description;

      console.log(fullproduct);
      checkouts.push(fullproduct);
    }
    productSolded.add(checkouts).then((res) => {
      console.log(res);
      if (res.data.errorCode === 0)
        toast.success(
          `Checkout Success with codeOrder "${res.data.codeOrder}"`
        );
    });
  };
  const handleTest = (e) => {
    e.preventDefault();
    console.log(checkouts);
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
            {getCarts.length === 0 ? (
              <span className="d-flex justify-content-center fw-bold span-nothing">
                NOT THINGS MY CARTS
              </span>
            ) : (
              <>
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
                          {getCarts.map((item, index) => (
                            <tr className="table_row" key={index}>
                              <td className="column-1">
                                <div className="how-itemcart1">
                                  <img
                                    src={item.srcImg}
                                    name="srcImg"
                                    alt="IMG"
                                  />
                                  <i
                                    className="fa fa-times itemcart-icon"
                                    aria-hidden="true"
                                    onClick={(e, id) =>
                                      handleDelete(e, item.id)
                                    }
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
                                  <DebounceInput
                                    minLength={1}
                                    debounceTimeout={500}
                                    maxLength={3}
                                    id="txtquantity"
                                    className="form-control mtext-104 cl3 txt-center"
                                    type="number"
                                    name="quantity"
                                    value={item.quantity}
                                    onChange={(e) =>
                                      handleChangeData(
                                        e,
                                        item.id,
                                        item.quantity
                                      )
                                    }
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

                      {/* <div className="flex-c-m p-lr-15 trans-04 pointer m-tb-10 btn-Apply ">
                        <button
                          type="button"
                          className=" btn-Apply"
                          // onClick={handleSubmit}
                        >
                          Update Cart
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                  <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                    <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>

                    {/* <div className="flex-w flex-t bor12 p-b-13">
                      <div className="size-208">
                        <span className="stext-110 cl2">Subtotal:</span>
                      </div>

                      <div className="size-209">
                        <span className="mtext-110 cl2">$ {cartTotal}</span>
                      </div>
                    </div> */}

                    <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                      <div className="size-208 w-full-ssm">
                        <span className="stext-110 cl2">Shipping:</span>
                      </div>

                      <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">
                        <p className="stext-111 cl6 p-t-2">
                          There are no shipping methods available. Please double
                          check your address, or contact us if you need any
                          help.
                        </p>

                        <div className="p-t-15">
                          <span className="stext-112 cl8">
                            Calculate Shipping
                          </span>
                          <div className="bor8 bg0 m-b-12">
                            <input
                              className="stext-111 cl8 plh3 size-111 p-lr-15"
                              type="text"
                              name="dress"
                              placeholder="Adress"
                              onChange={ChangeTp}
                            />
                          </div>

                          <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                            <select
                              name="city"
                              className="form-select"
                              onChange={(e) => handleChangeCity(e)}
                              aria-label="Default select example"
                              defaultValue={checkout.city}
                            >
                              {city.map((c, index) => (
                                <option key={index} value={c.codename}>
                                  {c.name}
                                </option>
                              ))}
                            </select>
                            <div className="dropDownSelect2"></div>
                          </div>
                          <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                            <select
                              name="district"
                              className="form-select"
                              onChange={(e) => handleChangeDistrict(e)}
                              aria-label="Default select example"
                              defaultValue={checkout.district}
                            >
                              {districts.map((c, index) => (
                                <option key={index} value={c.code}>
                                  {c.name}
                                </option>
                              ))}
                            </select>
                            <div className="dropDownSelect2"></div>
                          </div>
                          <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                            <select
                              name="ward"
                              className="form-select"
                              aria-label="Default select example"
                              onChange={ChangeTp}
                              defaultValue={checkout.ward}
                            >
                              {wards.map((c, index) => (
                                <option key={index} value={c.codename}>
                                  {c.name}
                                </option>
                              ))}
                            </select>
                            <div className="dropDownSelect2"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-w flex-t p-t-27 p-b-33">
                      <div className="size-208">
                        <span className="mtext-101 cl2">Total:</span>
                      </div>

                      <div className="size-209 p-t-1">
                        <span className="mtext-110 cl2">$ {cartTotal}</span>
                      </div>
                    </div>

                    <button
                      className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </button>
                    {/* <button
                      className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
                      onClick={handleTest}
                    >
                      Test
                    </button> */}
                  </div>
                </div>
              </>
            )}
          </Row>
        </Container>
      </form>
      <ConfirmDialog options={confirmOptions} onConfirm={handleConfirm} />
    </>
  );
};

export default Features;
