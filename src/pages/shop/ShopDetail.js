import React from "react";
import pduct1 from "./images/product-01.jpg";

const ShopDetail = () => {
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
            href="/blog"
            className="stext-109 cl3 hov-cl1 trans-04 text-decoration-none text-size"
          >
            Blog
            <i
              className="fa fa-angle-right m-l-9 m-r-10"
              aria-hidden="true"
            ></i>
          </a>

          <span className="stext-109 cl4 text-size"></span>
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
                    <div
                      className="item-slick3"
                      data-thumb="images/product-detail-01.jpg"
                    >
                      <div className="wrap-pic-w pos-relative">
                        <img src={pduct1} alt="IMG-PRODUCT" />

                        <a
                          className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                          href="/#"
                        >
                          <i className="fa fa-expand"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  Lightweight Jacket
                </h4>

                <span className="mtext-106 cl2">$58.79</span>

                <p className="stext-102 cl3 p-t-23">
                  Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                  ligula. Mauris consequat ornare feugiat.
                </p>
                <div className="Description ">
                  <span>Description</span>
                  <p className="stext-102 cl6">
                    Aenean sit amet gravida nisi. Nam fermentum est felis, quis
                    feugiat nunc fringilla sit amet. Ut in blandit ipsum.
                    Quisque luctus dui at ante aliquet, in hendrerit lectus
                    interdum. Morbi elementum sapien rhoncus pretium maximus.
                    Nulla lectus enim, cursus et elementum sed, sodales vitae
                    eros. Ut ex quam, porta consequat interdum in, faucibus eu
                    velit. Quisque rhoncus ex ac libero varius molestie. Aenean
                    tempor sit amet orci nec iaculis. Cras sit amet nulla
                    libero. Curabitur dignissim, nunc nec laoreet consequat,
                    purus nunc porta lacus, vel efficitur tellus augue in ipsum.
                    Cras in arcu sed metus rutrum iaculis. Nulla non tempor
                    erat. Duis in egestas nunc.
                  </p>
                </div>

                <div className="p-t-33">
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-204 flex-w flex-m respon6-next">
                      <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
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
