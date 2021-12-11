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
            <div className="row">
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
            </div>
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
