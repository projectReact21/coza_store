import React from "react";
import "./Blog.css";
import BlogSideMenu from "./BlogSideMenu";
import blog1 from "./images/blog-04.jpg";

const BlogDetail = () => {
  return (
    <>
      <div className="container">
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <a
            href="/"
            className="stext-109 cl8 hov-cl1 trans-04 text-decoration-none text-size"
          >
            Home
            <i
              className="fa fa-angle-right m-l-9 m-r-10 text-size"
              aria-hidden="true"
            ></i>
          </a>

          <a
            href="/blog"
            className="stext-109 cl8 hov-cl1 trans-04 text-decoration-none text-size"
          >
            Blog
            <i
              className="fa fa-angle-right m-l-9 m-r-10"
              aria-hidden="true"
            ></i>
          </a>

          <span className="stext-109 cl4 text-size">
            8 Inspiring Ways to Wear Dresses in the Winter
          </span>
        </div>
      </div>

      <section className="bg0 p-t-40 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                {/* item blog */}
                <div className="p-b-50">
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
                </div>
                <div className="p-t-10">
                  <span className="flex-w flex-m stext-111 cl2 p-b-19">
                    <span>
                      <span className="cl4">By</span> Admin
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>

                    <span>
                      22 Jan, 2018
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>

                    <span>
                      StreetStyle, Fashion, Couple
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>

                    <span>8 Comments</span>
                  </span>

                  <h4 className="ltext-109 cl2 p-b-28 fw-bold ">
                    8 Inspiring Ways to Wear Dresses in the Winter
                  </h4>

                  <p className="stext-117 cl6 p-b-26">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sit amet est vel orci luctus sollicitudin. Duis
                    eleifend vestibulum justo, varius semper lacus condimentum
                    dictum. Donec pulvinar a magna ut malesuada. In posuere
                    felis diam, vel sodales metus accumsan in. Duis viverra dui
                    eu pharetra pellentesque. Donec a eros leo. Quisque sed
                    ligula vitae lorem efficitur faucibus. Praesent sit amet
                    imperdiet ante. Nulla id tellus auctor, dictum libero a,
                    malesuada nisi. Nulla in porta nibh, id vestibulum ipsum.
                    Praesent dapibus tempus erat quis aliquet. Donec ac purus id
                    sapien condimentum feugiat.
                  </p>

                  <p className="stext-117 cl6 p-b-26">
                    Praesent vel mi bibendum, finibus leo ac, condimentum arcu.
                    Pellentesque sem ex, tristique sit amet suscipit in, mattis
                    imperdiet enim. Integer tempus justo nec velit fringilla,
                    eget eleifend neque blandit. Sed tempor magna sed congue
                    auctor. Mauris eu turpis eget tortor ultricies elementum.
                    Phasellus vel placerat orci, a venenatis justo. Phasellus
                    faucibus venenatis nisl vitae vestibulum. Praesent id nibh
                    arcu. Vivamus sagittis accumsan felis, quis vulputate
                  </p>
                </div>

                <div className="flex-w flex-t p-t-16">
                  <span className="size-216 stext-116 cl8 p-t-4">Tags</span>

                  <div className="flex-w size-217">
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
                <div className="p-t-40">
                  <h5 className="mtext-113 cl2 p-b-12">Leave a Comment</h5>

                  <p className="stext-107 cl6 p-b-40">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>

                  <form>
                    <div className="bor19 m-b-20">
                      <textarea
                        className="stext-111 cl2 plh3 size-124 p-lr-18 p-tb-15"
                        name="cmt"
                        placeholder="Comment..."
                      ></textarea>
                    </div>

                    <div className="bor19 size-218 m-b-20">
                      <input
                        className="stext-111 cl2 plh3 size-116 p-lr-18"
                        type="text"
                        name="name"
                        placeholder="Name *"
                      />
                    </div>

                    <div className="bor19 size-218 m-b-20">
                      <input
                        className="stext-111 cl2 plh3 size-116 p-lr-18"
                        type="text"
                        name="email"
                        placeholder="Email *"
                      />
                    </div>

                    <div className="bor19 size-218 m-b-30">
                      <input
                        className="stext-111 cl2 plh3 size-116 p-lr-18"
                        type="text"
                        name="web"
                        placeholder="Website"
                      />
                    </div>

                    <button className="flex-c-m stext-101 cl0 size-125 bg3 bor2 hov-btn3 p-lr-15 trans-04">
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 p-b-80">
              <BlogSideMenu />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
