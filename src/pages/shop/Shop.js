import React from "react";
const Shop = () => {
  return (
    <div>
      {/* <!-- Product --> */}
      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
                data-filter="*"
              >
                All Products
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".women"
              >
                Women
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".men"
              >
                Men
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".bag"
              >
                Bag
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".shoes"
              >
                Shoes
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".watches"
              >
                Watches
              </button>
            </div>

            <div className="flex-w flex-c-m m-tb-10">
              <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Filter
              </div>

              <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Search
              </div>
            </div>

            {/* <!-- Search product --> */}
            <div className="dis-none panel-search w-full p-t-10 p-b-15">
              <div className="bor8 dis-flex p-l-15">
                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <i className="zmdi zmdi-search"></i>
                </button>

                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* <!-- Filter --> */}
            <div className="dis-none panel-filter w-full p-t-10">
              <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                <div className="filter-col1 p-r-15 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Sort By</div>

                  <ul>
                    <li className="p-b-6">
                      <a href="/#" className="filter-link stext-106 trans-04">
                        Default
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a href="/#" className="filter-link stext-106 trans-04">
                        Popularity
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a href="/#" className="filter-link stext-106 trans-04">
                        Average rating
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a
                        href="/#"
                        className="filter-link stext-106 trans-04 filter-link-active"
                      >
                        Newness
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a href="/#" className="filter-link stext-106 trans-04">
                        Price: Low to High
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a href="/#" className="filter-link stext-106 trans-04">
                        Price: High to Low
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="filter-col2 p-r-15 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Price</div>

                  <ul>
                    <li className="p-b-6">
                      <a
                        href="/#"
                        className="filter-link stext-106 trans-04 filter-link-active"
                      >
                        All
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a href="/#" className="filter-link stext-106 trans-04">
                        $0.00 - $50.00
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a href="/#" className="filter-link stext-106 trans-04">
                        $50.00 - $100.00
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a href="/#" className="filter-link stext-106 trans-04">
                        $100.00 - $150.00
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a href="/#" className="filter-link stext-106 trans-04">
                        $150.00 - $200.00
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a href="/#" className="filter-link stext-106 trans-04">
                        $200.00+
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="filter-col3 p-r-15 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Color</div>

                  <ul>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "/#222" }}
                      >
                        <i className="zmdi zmdi-circle"></i>
                      </span>

                      <a href="/#" className="filter-link stext-106 trans-04">
                        Black
                      </a>
                    </li>

                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "/#4272d7" }}
                      >
                        <i className="zmdi zmdi-circle"></i>
                      </span>

                      <a
                        href="/#"
                        className="filter-link stext-106 trans-04 filter-link-active"
                      >
                        Blue
                      </a>
                    </li>

                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "/#b3b3b3" }}
                      >
                        <i className="zmdi zmdi-circle"></i>
                      </span>

                      <a href="/#" className="filter-link stext-106 trans-04">
                        Grey
                      </a>
                    </li>

                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "/#00ad5f" }}
                      >
                        <i className="zmdi zmdi-circle"></i>
                      </span>

                      <a href="/#" className="filter-link stext-106 trans-04">
                        Green
                      </a>
                    </li>

                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "/#fa4251" }}
                      >
                        <i className="zmdi zmdi-circle"></i>
                      </span>

                      <a href="/#" className="filter-link stext-106 trans-04">
                        Red
                      </a>
                    </li>

                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "/#aaa" }}
                      >
                        <i className="zmdi zmdi-circle-o"></i>
                      </span>

                      <a href="/#" className="filter-link stext-106 trans-04">
                        White
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="filter-col4 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Tags</div>

                  <div className="flex-w p-t-4 m-r--5">
                    <a
                      href="/#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Fashion
                    </a>

                    <a
                      href="/#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Lifestyle
                    </a>

                    <a
                      href="/#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Denim
                    </a>

                    <a
                      href="/#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Streetstyle
                    </a>

                    <a
                      href="/#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Crafts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row isotope-grid">
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-01.jpg?raw=true "
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-02.jpg?raw=true "
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-03.jpg?raw=true "
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-04.jpg?raw=true "
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-05.jpg?raw=true "
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-06.jpg?raw=true "
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-07.jpg?raw=true "
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-08.jpg?raw=true "
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item shoes">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-09.jpg?raw=true "
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-10.jpg?raw=true"
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-11.jpg?raw=true "
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-12.jpg?raw=true "
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-13.jpg?raw=true "
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-14.jpg?raw=true "
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-15.jpg?raw=true "
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/*<!-- Block2 -->*/}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-16.jpg?raw=true "
                    alt="IMG-PRODUCT"
                  />

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
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-01.png?raw=true"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-heart-02.png?raw=true"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Load more --> */}
          <div className="flex-c-m flex-w w-full p-t-45">
            <a
              href="/#"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
