import React, { useEffect, useState } from "react";
import "./Blog.css";
import { useParams } from "react-router-dom";
import BlogSideMenu from "./BlogSideMenu";
import blogService from "./../../services/blogService";
import BlogComment from "./BlogComment";
import { useDispatch } from "react-redux";
import ActionTypes from "../../stores/action";

const BlogDetail = () => {
  const param = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    loadData();
  }, []);
  const dispatch = useDispatch();
  const getBlog = (data) => {
    dispatch({
      type: ActionTypes.BLOG,
      blog: data,
    });
  };
  console.log(blog);
  const loadData = () => {
    console.log(param.id);
    if (param.id) {
      blogService.get(param.id).then((res) => {
        setBlog(res.data[0]);
        getBlog(res.data[0]);
      });
    } else {
      console.log("error id");
    }
  };
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

          <span className="stext-109 cl4 text-size">{blog.title}</span>
        </div>
      </div>

      <section className="bg0 p-t-40 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                {/* item blog */}
                <div className="p-b-50">
                  <div className="hov-img0 how-pos5-parent">
                    <img src={blog.srcImg} alt="IMG-BLOG" />

                    <div className="flex-col-c-m size-123 bg9 how-pos5">
                      <span className="ltext-107 cl2 txt-center">22</span>

                      <span className="stext-109 cl3 txt-center">Jan 2018</span>
                    </div>
                  </div>
                </div>
                <div className="p-t-10">
                  <span className="flex-w flex-m stext-111 cl2 p-b-19">
                    <span>
                      <span className="cl4">By</span> Admin
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>

                    <span>
                      {blog.create_at}
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>

                    <span>
                      {blog.taps}
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>

                    <span>8 Comments</span>
                  </span>

                  <h4 className="ltext-109 cl2 p-b-28 fw-bold ">
                    {blog.title}
                  </h4>

                  <p className="stext-117 cl6 p-b-26">{blog.contents}</p>
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
                <BlogComment blogId={blog.commentId} />
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
