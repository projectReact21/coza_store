import React from "react";
import { useNavigate } from "react-router-dom";
import bgBlogs from "./images/bg-02.jpg";
import blog1 from "./images/blog-04.jpg";
import productmine from "./images/product-min-01.jpg";

const Blog = () => {
  const navigate = useNavigate();
  const handleShowPage = (e, id) => {
    e.preventDefault();
    navigate(`/blog/${id}`);
  };
  return (
    <>
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{ backgroundImage: `url('${bgBlogs}')` }}
      >
        <h2 className="ltext-105 cl0 txt-center">Blog</h2>
      </section>

      <section className="bg0 p-t-62 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                {/* item blog */}
                <div className="p-b-63">
                  <a
                    href="blog-detail.html"
                    className="hov-img0 how-pos5-parent"
                  >
                    <img src={blog1} alt="IMG-BLOG" />

                    <div className="flex-col-c-m size-123 bg9 how-pos5">
                      <span className="ltext-107 cl2 txt-center">22</span>

                      <span className="stext-109 cl3 txt-center">Jan 2018</span>
                    </div>
                  </a>

                  <div className="p-t-32">
                    <h4 className="p-b-15">
                      <a
                        href="/#"
                        className="ltext-108 cl2 hov-cl1 trans-04 text-decoration-none fw-bold "
                        onClick={(e) => handleShowPage(e, 1)}
                      >
                        8 Inspiring Ways to Wear Dresses in the Winter
                      </a>
                    </h4>

                    <p className="stext-117 cl6">
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Fusce eget dictum
                      tortor. Donec dictum vitae sapien eu varius
                    </p>

                    <div className="flex-w flex-sb-m p-t-18">
                      <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                        <span>
                          <span className="cl4">By</span> Admin
                          <span className="cl12 m-l-4 m-r-6">|</span>
                        </span>

                        <span>
                          StreetStyle, Fashion, Couple
                          <span className="cl12 m-l-4 m-r-6">|</span>
                        </span>

                        <span>8 Comments</span>
                      </span>

                      <a
                        href="/#"
                        className="stext-101 cl2 hov-cl1 trans-04 m-tb-10 text-decoration-none fw-bold "
                        onClick={(e) => handleShowPage(e, 1)}
                      >
                        Continue Reading
                        <i className="fa fa-long-arrow-right m-l-9"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-b-63">
                  <a
                    href="blog-detail.html"
                    className="hov-img0 how-pos5-parent"
                  >
                    <img src={blog1} alt="IMG-BLOG" />

                    <div className="flex-col-c-m size-123 bg9 how-pos5">
                      <span className="ltext-107 cl2 txt-center">22</span>

                      <span className="stext-109 cl3 txt-center">Jan 2018</span>
                    </div>
                  </a>

                  <div className="p-t-32">
                    <h4 className="p-b-15">
                      <a
                        href="blog-detail.html"
                        className="ltext-108 cl2 hov-cl1 trans-04 text-decoration-none fw-bold"
                      >
                        8 Inspiring Ways to Wear Dresses in the Winter
                      </a>
                    </h4>

                    <p className="stext-117 cl6">
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Fusce eget dictum
                      tortor. Donec dictum vitae sapien eu varius
                    </p>

                    <div className="flex-w flex-sb-m p-t-18">
                      <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                        <span>
                          <span className="cl4">By</span> Admin
                          <span className="cl12 m-l-4 m-r-6">|</span>
                        </span>

                        <span>
                          StreetStyle, Fashion, Couple
                          <span className="cl12 m-l-4 m-r-6">|</span>
                        </span>

                        <span>8 Comments</span>
                      </span>

                      <a
                        href="blog-detail.html"
                        className="stext-101 cl2 hov-cl1 trans-04 m-tb-10 text-decoration-none fw-bold "
                      >
                        Continue Reading
                        <i className="fa fa-long-arrow-right m-l-9"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-b-63">
                  <a
                    href="blog-detail.html"
                    className="hov-img0 how-pos5-parent"
                  >
                    <img src={blog1} alt="IMG-BLOG" />

                    <div className="flex-col-c-m size-123 bg9 how-pos5">
                      <span className="ltext-107 cl2 txt-center">22</span>

                      <span className="stext-109 cl3 txt-center">Jan 2018</span>
                    </div>
                  </a>

                  <div className="p-t-32">
                    <h4 className="p-b-15">
                      <a
                        href="blog-detail.html"
                        className="ltext-108 cl2 hov-cl1 trans-04 text-decoration-none fw-bold"
                      >
                        8 Inspiring Ways to Wear Dresses in the Winter
                      </a>
                    </h4>

                    <p className="stext-117 cl6">
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Fusce eget dictum
                      tortor. Donec dictum vitae sapien eu varius
                    </p>

                    <div className="flex-w flex-sb-m p-t-18">
                      <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                        <span>
                          <span className="cl4">By</span> Admin
                          <span className="cl12 m-l-4 m-r-6">|</span>
                        </span>

                        <span>
                          StreetStyle, Fashion, Couple
                          <span className="cl12 m-l-4 m-r-6">|</span>
                        </span>

                        <span>8 Comments</span>
                      </span>

                      <a
                        href="blog-detail.html"
                        className="stext-101 cl2 hov-cl1 trans-04 m-tb-10 text-decoration-none fw-bold "
                      >
                        Continue Reading
                        <i className="fa fa-long-arrow-right m-l-9"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 p-b-80">
              <div className="side-menu">
                <div className="bor17 of-hidden pos-relative">
                  <input
                    className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
                    type="text"
                    name="search"
                    placeholder="Search"
                  />

                  <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>

                <div className="p-t-55">
                  <h4 className="mtext-112 cl2 p-b-33 fw-bold">Categories</h4>

                  <ul>
                    <li className="bor18">
                      <a
                        href="/#"
                        className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 text-decoration-none"
                      >
                        Fashion
                      </a>
                    </li>

                    <li className="bor18">
                      <a
                        href="/#"
                        className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 text-decoration-none"
                      >
                        Beauty
                      </a>
                    </li>

                    <li className="bor18">
                      <a
                        href="/#"
                        className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 text-decoration-none"
                      >
                        Street Style
                      </a>
                    </li>

                    <li className="bor18">
                      <a
                        href="/#"
                        className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 text-decoration-none"
                      >
                        Life Style
                      </a>
                    </li>

                    <li className="bor18">
                      <a
                        href="/#"
                        className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 text-decoration-none"
                      >
                        DIY & Crafts
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="p-t-65">
                  <h4 className="mtext-112 cl2 p-b-33 fw-bold">
                    Featured Products
                  </h4>

                  <ul>
                    <li className="flex-w flex-t p-b-30">
                      <a
                        href="/#"
                        className="wrao-pic-w size-214 hov-ovelay1 m-r-20 text-decoration-none"
                      >
                        <img src={productmine} alt="PRODUCT" />
                      </a>

                      <div className="size-215 flex-col-t p-t-8">
                        <a
                          href="/#"
                          className="stext-116 cl8 hov-cl1 trans-04 text-decoration-none"
                        >
                          White Shirt With Pleat Detail Back
                        </a>

                        <span className="stext-116 cl6 p-t-20">$19.00</span>
                      </div>
                    </li>
                    <li className="flex-w flex-t p-b-30">
                      <a
                        href="/#"
                        className="wrao-pic-w size-214 hov-ovelay1 m-r-20 text-decoration-none"
                      >
                        <img src={productmine} alt="PRODUCT" />
                      </a>

                      <div className="size-215 flex-col-t p-t-8">
                        <a
                          href="/#"
                          className="stext-116 cl8 hov-cl1 trans-04 text-decoration-none"
                        >
                          White Shirt With Pleat Detail Back
                        </a>

                        <span className="stext-116 cl6 p-t-20">$19.00</span>
                      </div>
                    </li>
                    <li className="flex-w flex-t p-b-30">
                      <a
                        href="/#"
                        className="wrao-pic-w size-214 hov-ovelay1 m-r-20 text-decoration-none"
                      >
                        <img src={productmine} alt="PRODUCT" />
                      </a>

                      <div className="size-215 flex-col-t p-t-8">
                        <a
                          href="/#"
                          className="stext-116 cl8 hov-cl1 trans-04 text-decoration-none"
                        >
                          White Shirt With Pleat Detail Back
                        </a>

                        <span className="stext-116 cl6 p-t-20">$19.00</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="p-t-55">
                  <h4 className="mtext-112 cl2 p-b-20">Archive</h4>

                  <ul>
                    <li className="p-b-7">
                      <a
                        href="/#"
                        className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2 text-decoration-none"
                      >
                        <span>July 2018</span>

                        <span>(9)</span>
                      </a>
                    </li>

                    <li className="p-b-7">
                      <a
                        href="/#"
                        className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2 text-decoration-none"
                      >
                        <span>June 2018</span>

                        <span>(39)</span>
                      </a>
                    </li>

                    <li className="p-b-7">
                      <a
                        href="/#"
                        className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2 text-decoration-none"
                      >
                        <span>May 2018</span>

                        <span>(29)</span>
                      </a>
                    </li>

                    <li className="p-b-7">
                      <a
                        href="/#"
                        className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2 text-decoration-none"
                      >
                        <span>April 2018</span>

                        <span>(35)</span>
                      </a>
                    </li>

                    <li className="p-b-7">
                      <a
                        href="/#"
                        className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2 text-decoration-none"
                      >
                        <span>March 2018</span>

                        <span>(22)</span>
                      </a>
                    </li>

                    <li className="p-b-7">
                      <a
                        href="/#"
                        className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2 text-decoration-none"
                      >
                        <span>February 2018</span>

                        <span>(32)</span>
                      </a>
                    </li>

                    <li className="p-b-7">
                      <a
                        href="/#"
                        className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2 text-decoration-none"
                      >
                        <span>January 2018</span>

                        <span>(21)</span>
                      </a>
                    </li>

                    <li className="p-b-7">
                      <a
                        href="/#"
                        className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2 text-decoration-none"
                      >
                        <span>December 2017</span>

                        <span>(26)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="p-t-50">
                  <h4 className="mtext-112 cl2 p-b-27">Tags</h4>

                  <div className="flex-w m-r--5">
                    <a
                      href="/#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5 text-decoration-none"
                    >
                      Fashion
                    </a>

                    <a
                      href="/#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5 text-decoration-none"
                    >
                      Lifestyle
                    </a>

                    <a
                      href="/#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5 text-decoration-none"
                    >
                      Denim
                    </a>

                    <a
                      href="/#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5 text-decoration-none"
                    >
                      Streetstyle
                    </a>

                    <a
                      href="/#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5 text-decoration-none"
                    >
                      Crafts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
