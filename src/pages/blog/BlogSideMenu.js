import React, { useEffect, useState } from "react";
import CateloryListText from "../../component/CateloryListText";
import productService from "./../../services/productService";
import { useSelector, useDispatch } from "react-redux";
import mycartService from "./../../services/mycartService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ActionTypes from "./../../stores/action";

const BlogSideMenu = () => {
  const [dataSideBar, setDataSideBar] = useState();
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState();
  const getUser = useSelector((state) => state.auth.dataUser);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  setInterval(() => {
    // setPage(x);
  }, 300000);
  const listCategoies = [
    "Thời Trang",
    "làm Đẹp",
    "Phong Cách Đường Phố",
    "Phong Cách Cuộc Sống",
    "Cửa Hàng Và Đồ Thủ Công",
  ];
  const listTags = ["Fashion", "Lifestyle", "Demin", "Streetstyle", "Carfs"];
  useEffect(() => {
    productService.getPaging(page, 3).then((res) => {
      setDataSideBar(res.data.data.data);
      setTotalPage(res.data.data.pagingInfo.totalPage);
    });
  }, [page]);
  useEffect(() => {
    const x = setInterval(() => {
      const y = Math.floor(Math.random() * 20);
      if (y < totalPage) setPage(y);
    }, 15000);
    return () => clearTimeout(x);
  }, []);
  const addToCart = (e, item, name, id) => {
    e.preventDefault();
    if (isLogin) {
      const newData = {
        id: item.id,
        quantity: 1,
        userId: id,
      };
      mycartService.add(newData).then((res) => {
        if (res.data.errorCode === 0) {
          toast.success(`đã thêm ${name} vào giỏ hàng `);
          mycartService.getListId(getUser.userId).then((res) => {
            dispatch({
              type: ActionTypes.LOAD_MY_CARTS,
              allmycarts: res.data.data,
            });
          });
        } else toast.warning(res.data.errorMessage);
      });
      mycartService.getListId(getUser.userId).then((res) => {
        dispatch({
          type: ActionTypes.LOAD_MY_CARTS,
          allmycarts: res.data.data,
        });
      });
    } else {
      dispatch({
        type: ActionTypes.CURRENT_LOACION,
        currentLocation: window.location.pathname,
      });
      navigate("/login");
    }
  };

  console.log(dataSideBar);
  return (
    <>
      <div className="side-menu">
        <div className="bor17 of-hidden pos-relative">
          <input
            className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
            type="text"
            name="search"
            placeholder="Tìm Kiếm"
          />

          <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>

        <div className="p-t-55">
          <h4 className="mtext-112 cl2 p-b-33 fw-bold">Danh Sách</h4>

          <ul>
            {listCategoies.map((listItem, index) => (
              <li className="bor18" key={index}>
                <a
                  href="/#"
                  className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 text-decoration-none"
                >
                  {listItem}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-t-65">
          <h4 className="mtext-112 cl2 p-b-33 fw-bold">Sản phẩm Nổi Bật</h4>
          <ul>
            {dataSideBar?.map((item, index) => (
              <li className="flex-w flex-t p-b-30" key={index}>
                <a
                  onClick={(e) => addToCart(e, item, item.name, getUser.userId)}
                  href="/#"
                  className="wrao-pic-w size-214 hov-ovelay1 m-r-20 text-decoration-none"
                >
                  <img
                    style={{ width: "6rem" }}
                    src={item.srcImg}
                    alt="PRODUCT"
                  />
                </a>

                <div className="size-215 flex-col-t p-t-8">
                  <a
                    href="/#"
                    onClick={(e) =>
                      addToCart(e, item, item.name, getUser.userId)
                    }
                    className="stext-116 cl8 hov-cl1 trans-04 text-decoration-none"
                  >
                    {item.name}
                  </a>

                  <span className="stext-116 cl6 p-t-20">{item.price}.000</span>
                </div>
              </li>
            ))}
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
          <CateloryListText
            names={listTags}
            listText={listTags}
            names={[]}
            col2="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5 text-decoration-none"
            defaultActive="lifestyle"
          />

          {/* <div className="flex-w m-r--5">
            <a
              href="/#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5 text-decoration-none"
            >
              Fashion
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BlogSideMenu;
