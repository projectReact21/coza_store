import React, { useEffect, useState } from "react";
import pduct1 from "./images/product-01.jpg";
import pduct2 from "./images/product-02.jpg";
import pduct3 from "./images/product-11.jpg";
// import "../../../node_modules/slick-carousel/";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./cssDetail/slick.css";
import productSolded from "../../services/productSolded";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productService from "../../services/productService";
import { parseHTML } from "jquery";
import mycartService from "../../services/mycartService";
import { toast } from "react-toastify";
import ActionTypes from "../../stores/action";
// import "./cssDetail/slick-theme.css";

const ShopDetail = () => {
  const param = useParams();
  const [number, setNumber] = useState(1);
  const getUser = useSelector((state) => state.auth.dataUser);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const getMyCart = useSelector((state) => state.auth.allmycarts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imgs, setImgs] = useState([]);
  const [product, setProduct] = useState([]);
  const [getproducts, setGetproducts] = useState([]);
  useEffect(() => {
    loadData();
    loadData();
  }, []);
  const loadData = () => {
    if (param.id > 0) {
      productSolded.getDescriptors(param.id).then((res) => {
        // console.log(res.data.data);
        if (res.data.errorCode === 0) {
          // setProduct(res.data.data);
          imgs.length = 0;
          res.data.data.forEach((x) => imgs.push(x.srcImg));
          console.log(imgs);
        }
      });
    }
    productService.getProduct().then((res) => {
      console.log(res.data.data);
      if (res.data.errorCode === 0) {
        setGetproducts(res.data.data);
        const data = res.data.data.find(
          (product) => product.productId === parseInt(param.id)
        );
        setProduct(data);
        console.log(data);
      }
    });
  };
  const handleChaneNumber = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setNumber(e.target.value);
  };

  const addToCart = (data, n, id) => {
    const getitemmycart = getMyCart.find((x) => x.name === n);
    if (isLogin) {
      const newData = {
        id: data.id,
        quantity: number,
        userId: id,
      };
      if (!getitemmycart) {
        mycartService.add(newData).then((res) => {
          if (res.data.errorCode === 0) {
            toast.success(`đã thêm ${n} vào giỏ hàng với ${number} sản phẩm `);
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
        const data = {
          quantity: parseInt(getitemmycart.quantity) + parseInt(number),
        };
        console.log(data.quantity);
        mycartService.update(getitemmycart.id, data).then((res) => {
          console.log(res.data);
          if (res.data.errorCode === 0)
            toast.info(`đã tăng ${n} thêm ${number} sản phẩm `);
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

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={imgs[i]} alt="" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
  };
  return (
    <>
      <div className="container ">
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <a
            href="/"
            className="stext-109 cl3 hov-cl1 trans-04 text-decoration-none text-size"
          >
            Home
            <i
              className="fa fa-angle-right m-l-9 m-r-10 text-size"
              aria-hidden="true"
            ></i>
          </a>

          <a
            href="/shop"
            className="stext-109 cl3 hov-cl1 trans-04 text-decoration-none text-size"
          >
            Shop
            <i
              className="fa fa-angle-right m-l-9 m-r-10"
              aria-hidden="true"
            ></i>
          </a>

          <span className="stext-109 cl4 text-size">{product.name}</span>
        </div>
      </div>

      <section className="sec-product-detail bg0 p-t-65 p-b-60 cl3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7 p-b-30">
              <div className="p-l-25 p-r-30 p-lr-0-lg">
                <div className="wrap-slick3 flex-sb flex-w">
                  <div className="wrap-slick3-dots"></div>
                  <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

                  <div className="slick3 gallery-lb">
                    <Slider {...settings}>
                      {imgs.map((img, index) => (
                        <div key={index} data-thumb={img}>
                          <img src={img} alt="" />
                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href={img}
                          >
                            <i className="fa fa-expand"></i>
                          </a>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  {product.name}
                </h4>

                <span className="mtext-106 cl2">$ {product.price}</span>

                <p className="stext-102 cl3 p-t-23">{product.name}</p>
                <div className="Description ">
                  <span>Description</span>
                  <p className="stext-102 cl6">{product.description}</p>
                </div>

                <div className="pt-3">
                  <div className="flex-w  p-b-10">
                    <div className="size-204 flex-w flex-m respon6-next">
                      <div className=" flex-w m-r-20 m-tb-10">
                        <input
                          style={{ width: "100px" }}
                          className="form-control mtext-104 cl3 txt-center"
                          type="number"
                          onChange={handleChaneNumber}
                          name="num-product"
                          defaultValue="1"
                        />
                      </div>
                      <button
                        className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                        onClick={() =>
                          addToCart(product, product.name, getUser.userId)
                        }
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                  <div className="flex-m bor9 p-r-10 m-r-11">
                    <a
                      href="/#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                      data-tooltip="Add to Wishlist"
                    >
                      <i className="zmdi zmdi-favorite"></i>
                    </a>
                  </div>

                  <a
                    href="/#"
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>

                  <a
                    href="/#"
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>

                  <a
                    href="/#"
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Google Plus"
                  >
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopDetail;
