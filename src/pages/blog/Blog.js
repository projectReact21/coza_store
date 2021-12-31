import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgBlogs from "./images/bg-02.jpg";
import { useDispatch } from "react-redux";
import BlogSideMenu from "./BlogSideMenu";
import { Button, Row } from "react-bootstrap";
import blogService from "../../services/blogService";
import ActionTypes from "./../../stores/action";
import commentService from "../../services/commentService";

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const dispatch = useDispatch();

  const handleShowPage = (e, blog) => {
    e.preventDefault();
    blogService.get(blog.id).then((res) => {
      console.log(res.data.data);
      dispatch({
        type: ActionTypes.BLOG,
        blog: res.data.data,
      });
      commentService.getListCmt(res.data.data.commentId).then((res) => {
        console.log(res.data.data);
        dispatch({
          type: ActionTypes.COMMENTS,
          comments: res.data.data,
        });
      });
    });

    navigate(`/blog/${blog.id}`);
  };
  useEffect(() => {
    blogService.getpaging(page, 3).then((res) => {
      console.log(res.data.data.pagingInfo);
      setBlogs(res.data.data.data);
      setPage(res.data.data.pagingInfo.page);
      setTotalPage(res.data.data.pagingInfo.totalPage);
    });
  }, [page]);
  const handlechangeNextPage = (e) => {
    e.preventDefault();
    setPage((page) => {
      if (page === totalPage) {
        page();
      } else setPage((page) => page + 1);
    });
  };
  const handlechangeCurrentPage = (e) => {
    e.preventDefault();
    setPage((page) => {
      if (page === 0) {
        page();
      } else setPage((page) => page - 1);
    });
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
                {blogs.map((blog, index) => (
                  <div className="p-b-63" key={blog.id}>
                    <a
                      href="blog-detail.html"
                      className="hov-img0 how-pos5-parent"
                      onClick={(e) => handleShowPage(e, blog)}
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
                          onClick={(e) => handleShowPage(e, blog)}
                        >
                          {blog.title}
                        </a>
                      </h4>

                      {blog.contents?.map((c, index) => (
                        <>
                          <p key={index}>{c}</p>
                          <br />
                        </>
                      ))}

                      <div className="flex-w flex-sb-m p-t-18">
                        <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                          <span>
                            <span className="cl4 ">Tác Giả</span>
                            <span className="fw-bolder fs-3 mx-2 text-danger">
                              {blog.author}
                            </span>
                            <span className="cl12 m-l-4 m-r-6">|</span>
                          </span>
                          <span className="flex-w col-auto ">
                            {blog.taps?.map((t, index) => (
                              <a
                                key={index}
                                href="/#"
                                className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5 text-decoration-none mb-0"
                              >
                                {t}
                              </a>
                            ))}
                          </span>
                        </span>

                        <a
                          href="/#"
                          className="stext-101 cl2 hov-cl1 trans-04 m-tb-10 text-decoration-none fw-bold "
                          onClick={(e) => handleShowPage(e, blog)}
                        >
                          Đọc Tiếp
                          <i className="fa fa-long-arrow-right m-l-9"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-4 col-lg-3 p-b-80">
              <BlogSideMenu />
            </div>
          </div>
        </div>
        <Row className=" justify-content-around ">
          {page > 0 ? (
            <Button
              onClick={handlechangeCurrentPage}
              className=" border-0 col-3  "
            >
              trang trước
            </Button>
          ) : (
            ""
          )}
          {page < totalPage - 1 ? (
            <Button
              onClick={handlechangeNextPage}
              className=" border-0 col-3  "
            >
              Trang Sau
            </Button>
          ) : (
            ""
          )}
        </Row>
      </section>
    </>
  );
};

export default Blog;
