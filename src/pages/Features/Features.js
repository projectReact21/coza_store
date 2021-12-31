import React, { useEffect, useState } from "react";
import "./Features.css";
import { Container, Row } from "react-bootstrap";
import mycartService from "../../services/mycartService";
import ConfirmDialog from "../../component/ConfirmDialog";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../../stores/action";

import productSolded from "../../services/productSolded";

import { DebounceInput } from "react-debounce-input";
import loginService from "../../services/loginService";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const [data, setData] = useState({
    userId: "",
    userName: "",
    details: [],
    phone: "",
    dress: "",
    ward: "",
    city: "",
    district: "",
  });
  const [carts, setCarts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [user, setUser] = useState({});
  const getUser = useSelector((state) => state.auth.dataUser);
  const getCarts = useSelector((state) => state.auth.allmycarts);
  const [checkouts, setCheckouts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tp, setTp] = useState({
    dress: "",
    city: "",
    district: "",
    ward: "",
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
  const [confirmOptions, setConfirmOptions] = useState({
    show: false,
    content: "",
    dataId: 0,
  });
  useEffect(() => {
    loadData();
    setData({
      userId: getUser?.userId,
      userName: getUser?.userName,
      details: [],
      phone: user?.phone,
      dress: user?.dress,
      ward: user?.ward,
      city: user?.city,
      district: user?.district,
    });
    // Total();
  }, [cartTotal, wards]);
  const Total = () => {
    let totalVal = 0;
    for (let i = 0; i < carts.length; i++) {
      totalVal += carts[i].total;
    }
    setCartTotal(parseFloat(totalVal).toFixed(0));
  };
  const handleDetails = (e, id) => {
    e.preventDefault();
    navigate(`/shopdetail/${id}`);
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
    loginService.getUser(getUser.id).then((res) => {
      setUser(res.data.data[0]);
      console.log(res.data.data[0]);
    });
    fetch("https://provinces.open-api.vn/api/?depth=2")
      .then((res) => res.json())
      .then((result) => {
        setCities(result);
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
          Total();
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
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
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
        toast.warning("Xóa Sản Phẩm Thành Công");
      });
    }
  };
  const handleChangeCity = (e) => {
    // e.preventDefault();
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    // console.log(newData);
    const dis = cities.find((x) => x.codename === e.target.value);
    console.log(dis.districts);
    setDistricts(dis.districts);
    console.log(e.target.value);
  };
  const handleChangeDistrict = (e) => {
    // e.preventDefault();
    const dis = districts.find((x) => x.code === parseInt(e.target.value));
    console.log(dis);
    console.log(e.target.value);
    const newData = { ...data };
    newData[e.target.name] = dis.codename;
    setData(newData);
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
    // console.log(data);
    const newData = { ...data };
    getCarts.forEach((x) => newData.details.push(x.id));

    setData(newData);
    console.log(newData);
    productSolded.add(newData).then((res) => {
      console.log(res.data);
      if (res.data.errorCode === 0) {
        dispatch({
          type: ActionTypes.DATA_USER_CHECK_OUT,
          dataUserCheckOut: res.data.data,
        });
        toast.success(
          `Bạn đã đặt hàng thành công với mã đơn hàng "${res.data.data.codeOrder}"`
        );
        loadData();
        navigate("/order");
      }
    });
  };
  const handleTest = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Container>
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <a href="index.html" className="text-link trans-04">
            Trang Chủ
            <i
              className="fa fa-angle-right m-l-9 m-r-10"
              aria-hidden="true"
            ></i>
          </a>

          <span className="text-link text-color">Thanh Toán</span>
        </div>
      </Container>

      <form className="bg0 p-t-75 p-b-85">
        <Container>
          <Row>
            {getCarts.length === 0 ? (
              <span className="d-flex justify-content-center fw-bold span-nothing text-warning">
                KHÔNG CÓ SẢN PHẨM TRONG GIỞ HÀNG VUI LÒNG CHỌN SẢN PHẨM
              </span>
            ) : (
              <>
                <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                  <div className="m-l-25 m-r--38 m-lr-0-xl">
                    <div className="wrap-table-shopping-cart">
                      <table className="table-shopping-cart">
                        <thead>
                          <tr className="table_head">
                            <th className="column-1">Sản Phẩm</th>
                            <th className="column-2"></th>
                            <th className="column-3">Giá</th>
                            <th className="column-4">Số Lượng</th>
                            <th className="column-5">Thành Tiền</th>
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
                                <a
                                  href="/#"
                                  className="link-detail"
                                  onClick={(e) =>
                                    handleDetails(e, item.productId)
                                  }
                                >
                                  {item.name}
                                </a>
                              </td>
                              <td className="column-3" name="price">
                                {item.price}.000đ
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
                              <td className="column-5">{item.total}.000đ</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                      {/* <div className="flex-w flex-m m-r-20 m-tb-5">
                        <input
                          className=" input-coupon  p-lr-20 m-r-10 m-tb-5"
                          type="text"
                          name="coupon"
                          placeholder="Coupon Code"
                        />

                        <div className="flex-c-m  hov-btn3 p-lr-15 trans-04 pointer m-tb-5 btn-Apply">
                          Apply coupon
                        </div>
                      </div> */}

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
                    <h4 className="mtext-109 cl2 p-b-30">Tổng Giỏ Hàng</h4>

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
                        <span className="stext-110 cl2">Vận Chuyển:</span>
                        <div className="infomation">
                          <div className="stext-110 cl2 phone-numer">
                            Số Điện Thoại:
                          </div>
                          <div className="stext-110 cl2 info">Địa Chỉ:</div>
                          <div className="stext-110 cl2 info">
                            Tỉnh/Thành Phố:
                          </div>
                          <div className="stext-110 cl2 info">Quận/Huyện:</div>
                          <div className="stext-110 cl2 info">Phường/Xã:</div>
                        </div>
                      </div>

                      <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">
                        <p className="stext-111 cl6 p-t-2">
                          Phương thức vận chuyển sẽ được chúng tôi lựa chọn phù
                          hợp với địa chỉ giao hàng của bạn
                        </p>

                        <div className="p-t-15">
                          <span className="stext-112 cl8">
                            Tính Toán Vận Chuyển
                          </span>
                          <div className="bor8 bg0 m-b-12">
                            <input
                              className="stext-111 cl8 plh3 size-111 p-lr-15"
                              type="text"
                              name="phone"
                              placeholder="phone"
                              onChange={ChangeTp}
                              defaultValue={user?.phone}
                            />
                          </div>
                          <div className="bor8 bg0 m-b-12">
                            <input
                              className="stext-111 cl8 plh3 size-111 p-lr-15"
                              type="text"
                              name="dress"
                              placeholder="Adress"
                              onChange={ChangeTp}
                              defaultValue={user?.dress}
                            />
                          </div>

                          <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                            <select
                              name="city"
                              className="form-select"
                              onChange={handleChangeCity}
                              aria-label="Default select example"
                            >
                              {cities.map((c, index) => (
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
                              onChange={handleChangeDistrict}
                              aria-label="Default select example"
                            >
                              {districts.map((c, index) => (
                                <option key={index} value={c?.code}>
                                  {c?.name}
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
                              defaultValue={user?.ward}
                            >
                              {wards.map((c, index) => (
                                <option key={index} value={c?.codename}>
                                  {c?.name}
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
                        <span className="mtext-101 cl2">Tổng Cộng:</span>
                      </div>

                      <div className="size-209 p-t-1">
                        <span className="mtext-110 cl2">{cartTotal}.000đ</span>
                      </div>
                    </div>

                    <button
                      className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
                      onClick={handleCheckout}
                    >
                      Đặt Hàng
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
