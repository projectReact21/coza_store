import React, { useState } from "react";
import "./home.css";
import Banner from "./Banner";
import CateloryProduct from "./CateloryProduct";
import { useEffect } from "react";
import productService from "./../../services/productService";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../../stores/action";
import { Col, Row } from "react-bootstrap";
import ListProductItem from "../../component/ListProductItem";

function Home() {
  const product = useSelector((state) => state.auth.productFill);
  const dispatch = useDispatch();
  const getData = (data) => {
    dispatch({
      type: ActionTypes.LOAD_DATA,
      allproducts: data,
      productFill: data,
    });
  };
  useEffect(() => {
    productService.getProduct().then((res) => {
      getData(res.data.data);
    });
    productService.getFillProduct(1).then((res) => {
      dispatch({
        type: ActionTypes.FIND_LIKE_DATA,
        productLike: res.data.data,
      });
    });
  }, []);

  return (
    <>
      <Banner />
      <CateloryProduct />
      {/* <!-- Product --> */}
      <section className="sec-product bg0 p-t-100 p-b-50">
        <div className="container">
          <div className="p-b-32">
            <h3 className="ltext-105 cl5 txt-center respon1">Store Overview</h3>
          </div>

          {/* <!-- Tab01 --> */}
          <div className="tab01">
            {/* <!-- Nav tabs --> */}
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item p-b-10">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#best-seller"
                  role="tab"
                >
                  Best Seller
                </a>
              </li>

              <li className="nav-item p-b-10">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#featured"
                  role="tab"
                >
                  Featured
                </a>
              </li>

              <li className="nav-item p-b-10">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#sale"
                  role="tab"
                >
                  Sale
                </a>
              </li>

              <li className="nav-item p-b-10">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#top-rate"
                  role="tab"
                >
                  Top Rate
                </a>
              </li>
            </ul>

            {/* <!-- Tab panes --> */}
            <div className="tab-content p-t-50">
              {/* <!-- - --> */}
              <div
                className="tab-pane fade show active"
                id="best-seller"
                role="tabpanel"
              >
                {/* <!-- Slide2 --> */}
                <div className="wrap-slick2">
                  <div className="slick2">
                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-01.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Esprit Ruffle Shirt
                            </a>

                            <span className="stext-105 cl3">$16.64</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-02.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Herschel supply
                            </a>

                            <span className="stext-105 cl3">$35.31</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-03.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Only Check Trouser
                            </a>

                            <span className="stext-105 cl3">$25.50</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-04.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Classic Trench Coat
                            </a>

                            <span className="stext-105 cl3">$75.00</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-05.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Front Pocket Jumper
                            </a>

                            <span className="stext-105 cl3">$34.75</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-06.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Vintage Inspired Classic
                            </a>

                            <span className="stext-105 cl3">$93.20</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-07.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Shirt in Stretch Cotton
                            </a>

                            <span className="stext-105 cl3">$52.66</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-08.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Pieces Metallic Printed
                            </a>

                            <span className="stext-105 cl3">$18.96</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- - --> */}
              <div className="tab-pane fade" id="featured" role="tabpanel">
                {/* <!-- Slide2 --> */}
                <div className="wrap-slick2">
                  <div className="slick2">
                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-09.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Converse All Star Hi Plimsolls
                            </a>

                            <span className="stext-105 cl3">$75.00</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-10.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Femme T-Shirt In Stripe
                            </a>

                            <span className="stext-105 cl3">$25.85</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-11.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Herschel supply
                            </a>

                            <span className="stext-105 cl3">$63.16</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-12.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Herschel supply
                            </a>

                            <span className="stext-105 cl3">$63.15</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-13.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              T-Shirt with Sleeve
                            </a>

                            <span className="stext-105 cl3">$18.49</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-14.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Pretty Little Thing
                            </a>

                            <span className="stext-105 cl3">$54.79</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-15.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Mini Silver Mesh Watch
                            </a>

                            <span className="stext-105 cl3">$86.85</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-16.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Square Neck Back
                            </a>

                            <span className="stext-105 cl3">$29.64</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- - --> */}
              <div className="tab-pane fade" id="sale" role="tabpanel">
                {/* <!-- Slide2 --> */}
                <div className="wrap-slick2">
                  <div className="slick2">
                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-02.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Herschel supply
                            </a>

                            <span className="stext-105 cl3">$35.31</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-04.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Classic Trench Coat
                            </a>

                            <span className="stext-105 cl3">$75.00</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-06.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Vintage Inspired Classic
                            </a>

                            <span className="stext-105 cl3">$93.20</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-09.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Converse All Star Hi Plimsolls
                            </a>

                            <span className="stext-105 cl3">$75.00</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-11.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Herschel supply
                            </a>

                            <span className="stext-105 cl3">$63.16</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-13.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              T-Shirt with Sleeve
                            </a>

                            <span className="stext-105 cl3">$18.49</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-15.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Mini Silver Mesh Watch
                            </a>

                            <span className="stext-105 cl3">$86.85</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- - --> */}
              <div className="tab-pane fade" id="top-rate" role="tabpanel">
                {/* <!-- Slide2 --> */}
                <div className="wrap-slick2">
                  <div className="slick2">
                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-03.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Only Check Trouser
                            </a>

                            <span className="stext-105 cl3">$25.50</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-06.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Vintage Inspired Classic
                            </a>

                            <span className="stext-105 cl3">$93.20</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-07.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Shirt in Stretch Cotton
                            </a>

                            <span className="stext-105 cl3">$52.66</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-08.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Pieces Metallic Printed
                            </a>

                            <span className="stext-105 cl3">$18.96</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-09.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Converse All Star Hi Plimsolls
                            </a>

                            <span className="stext-105 cl3">$75.00</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-10.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Femme T-Shirt In Stripe
                            </a>

                            <span className="stext-105 cl3">$25.85</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-11.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Herschel supply
                            </a>

                            <span className="stext-105 cl3">$63.16</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-12.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Herschel supply
                            </a>

                            <span className="stext-105 cl3">$63.15</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-13.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              T-Shirt with Sleeve
                            </a>

                            <span className="stext-105 cl3">$18.49</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                      {/* <!-- Block2 --> */}
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src="images/product-16.jpg" alt="IMG-PRODUCT" />

                          <a
                            href="/#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                          >
                            Quick View
                          </a>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <a
                              href="product-detail.html"
                              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                              Square Neck Back
                            </a>

                            <span className="stext-105 cl3">$29.64</span>
                          </div>

                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="/#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <Row className="gy-4">
                {product.map((pro) => (
                  <Col sm={12} md={6} lg={3} key={pro.id}>
                    <ListProductItem
                      srcImg={pro.srcImg}
                      status={pro.status}
                      name={pro.name}
                      price={"$ " + pro.price}
                    />
                  </Col>
                ))}
              </Row>

            </div> */}
          </div>
        </div>
      </section>

      {/* <!-- Blog --> */}
      <section className="sec-blog bg0 p-t-60 p-b-90">
        <div className="container">
          <div className="p-b-66">
            <h3 className="ltext-105 cl5 txt-center respon1">Our Blogs</h3>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-4 p-b-40">
              <div className="blog-item">
                <div className="hov-img0">
                  <a href="blog-detail.html">
                    <img
                      src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/blog-01.jpg?raw=true"
                      alt="IMG-BLOG"
                    />
                  </a>
                </div>

                <div className="p-t-15">
                  <div className="stext-107 flex-w p-b-14">
                    <span className="m-r-3">
                      <span className="cl4">By</span>

                      <span className="cl5">Nancy Ward</span>
                    </span>

                    <span>
                      <span className="cl4">on</span>

                      <span className="cl5">July 22, 2017</span>
                    </span>
                  </div>

                  <h4 className="p-b-12">
                    <a
                      href="blog-detail.html"
                      className="mtext-101 cl2 hov-cl1 trans-04"
                    >
                      8 Inspiring Ways to Wear Dresses in the Winter
                    </a>
                  </h4>

                  <p className="stext-108 cl6">
                    Duis ut velit gravida nibh bibendum commodo. Suspendisse
                    pellentesque mattis augue id euismod. Interdum et male-suada
                    fames
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 p-b-40">
              <div className="blog-item">
                <div className="hov-img0">
                  <a href="blog-detail.html">
                    <img
                      src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/blog-02.jpg?raw=true"
                      alt="IMG-BLOG"
                    />
                  </a>
                </div>

                <div className="p-t-15">
                  <div className="stext-107 flex-w p-b-14">
                    <span className="m-r-3">
                      <span className="cl4">By</span>

                      <span className="cl5">Nancy Ward</span>
                    </span>

                    <span>
                      <span className="cl4">on</span>

                      <span className="cl5">July 18, 2017</span>
                    </span>
                  </div>

                  <h4 className="p-b-12">
                    <a
                      href="blog-detail.html"
                      className="mtext-101 cl2 hov-cl1 trans-04"
                    >
                      The Great Big List of Men’s Gifts for the Holidays
                    </a>
                  </h4>

                  <p className="stext-108 cl6">
                    Nullam scelerisque, lacus sed consequat laoreet, dui enim
                    iaculis leo, eu viverra ex nulla in tellus. Nullam nec
                    ornare tellus, ac fringilla lacus. Ut sit ame
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 p-b-40">
              <div className="blog-item">
                <div className="hov-img0">
                  <a href="blog-detail.html">
                    <img
                      src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/blog-03.jpg?raw=true"
                      alt="IMG-BLOG"
                    />
                  </a>
                </div>

                <div className="p-t-15">
                  <div className="stext-107 flex-w p-b-14">
                    <span className="m-r-3">
                      <span className="cl4">By</span>

                      <span className="cl5">Nancy Ward</span>
                    </span>

                    <span>
                      <span className="cl4">on</span>

                      <span className="cl5">July 2, 2017</span>
                    </span>
                  </div>

                  <h4 className="p-b-12">
                    <a
                      href="blog-detail.html"
                      className="mtext-101 cl2 hov-cl1 trans-04"
                    >
                      5 Winter-to-Spring Fashion Trends to Try Now
                    </a>
                  </h4>

                  <p className="stext-108 cl6">
                    Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla
                    vel erat tincidunt, sed hendrerit ligula porttitor. Fusce
                    sit amet maximus nunc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
