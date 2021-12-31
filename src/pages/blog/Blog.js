import React from "react";
import { useNavigate } from "react-router-dom";
import bgBlogs from "./images/bg-02.jpg";
import { useSelector } from "react-redux";
import BlogSideMenu from "./BlogSideMenu";

const Blog = () => {
  const navigate = useNavigate();
  const handleShowPage = (e, id) => {
    e.preventDefault();
    navigate(`/blog/${id}`);
  };
  const getblogs = useSelector((state) => state.blog.blogs);
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
                {getblogs.map((blog, index) => (
                  <>
                    <div className="p-b-63" key={blog.id}>
                      <a
                        href="blog-detail.html"
                        className="hov-img0 how-pos5-parent"
                        onClick={(e) => handleShowPage(e, blog.id)}
                      >
                        <img src={blog.srcImg} alt="IMG-BLOG" />

                        <div className="flex-col-c-m size-123 bg9 how-pos5">
                          <span className="ltext-107 cl2 txt-center">22</span>

                          <span className="stext-109 cl3 txt-center">
                            Jan 2018
                          </span>
                        </div>
                      </a>

                      <div className="p-t-32">
                        <h4 className="p-b-15">
                          <a
                            href="/#"
                            className="ltext-108 cl2 hov-cl1 trans-04 text-decoration-none fw-bold "
                            onClick={(e) => handleShowPage(e, blog.id)}
                          >
                            {blog.title}
                          </a>
                        </h4>

                        <p className="stext-117 cl6">{blog.introduces}</p>

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

                            {/* <span>8 Comments</span> */}
                          </span>

                          <a
                            href="/#"
                            className="stext-101 cl2 hov-cl1 trans-04 m-tb-10 text-decoration-none fw-bold "
                            onClick={(e) => handleShowPage(e, blog.id)}
                          >
                            Continue Reading
                            <i className="fa fa-long-arrow-right m-l-9"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
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

export default Blog;
