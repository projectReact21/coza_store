import React, { useEffect, useState } from "react";
import commentService from "../../services/commentService";
// import { useFormik } from "formik";
// import * as Yup from "yup";
import blogService from "../../services/blogService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const BlogComment = () => {
  const [comments, setComments] = useState([]);
  const user = useSelector((state) => state.auth.dataUser);
  console.log(user);
  const [comment, setComment] = useState({
    commentId: 123,
    contents: "",
    avataUser: "",
    create_at: "2021-12-16T05:56:53.000Z",
    update_at: "2021-12-16T05:56:53.000Z",
    userId: "",
  });

  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    commentService.list().then((res) => {
      console.log(res.data);
      if (res.data.errorCode === 0) {
        setComments(res.data.data);
      } else {
        console.log("error");
      }
    });
  };
  const handleChangeData = (e) => {
    const newData = { ...comment };
    newData[e.target.name] = e.target.value;
    setComment(newData);
    console.log(newData);
  };
  const handleSave = () => {
    comment.avataUser = user.avata;
    comment.userId = user.userId;
    commentService.add(comment).then((res) => {
      loadData(res.data);
      toast.success("Comment success");
      console.log(res.result);
      console.log("ok");
    });
  };
  const handleDelete = (e, id) => {
    commentService.delete(id).then((res) => {
      console.log(res);
      if (res.data.errorCode === 0) {
        loadData(res.data);
        toast.warning(res.data.data);
      }
    });
  };
  return (
    <>
      <div className="p-t-40">
        <h5 className="mtext-113 cl2 p-b-12">Leave a Comment</h5>

        <p className="stext-107 cl6 p-b-40">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="row d-flex justify-content-start">
          <div className="col-md-12">
            {comments.map((comment, index) => (
              <div className="card p-3 mb-2" key={index}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="user d-flex flex-row align-items-center">
                    {" "}
                    <img
                      src={comment.avataUser}
                      width="30"
                      className="user-img rounded-circle "
                      alt=""
                    />{" "}
                    <span>
                      <small className="font-weight-bold text-primary">
                        james_olesenn
                      </small>{" "}
                      <small className="font-weight-bold">
                        {comment.contents}
                      </small>
                    </span>{" "}
                  </div>{" "}
                  <small>2 days ago</small>
                </div>
                <div className="action d-flex justify-content-between mt-2 align-items-center">
                  <div
                    className="reply px-4"
                    onClick={(e, id) => handleDelete(e, comment.id)}
                  >
                    {" "}
                    {comment.userId === user.userId ? (
                      <small>Remove</small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="icons align-items-center">
                    {" "}
                    <i className="fa fa-star text-warning"></i>{" "}
                    <i className="fa fa-check-circle-o check-icon"></i>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form>
          <div className="bor19 m-b-20">
            <textarea
              className="stext-111 cl2 plh3 size-124 p-lr-18 p-tb-15"
              name="contents"
              placeholder="Comment..."
              onChange={handleChangeData}
            ></textarea>
          </div>

          <button
            type="button"
            className="flex-c-m stext-101 cl0 size-125 bg3 bor2 hov-btn3 p-lr-15 trans-04"
            // disabled={!formik.dirty || !formik.isValid}
            onClick={handleSave}
          >
            Post Comment
          </button>
        </form>
      </div>
    </>
  );
};

export default BlogComment;
