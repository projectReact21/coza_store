import React from "react";
import CateloryListText from "../../component/CateloryListText";
import productmine from "../../resoures/img/product-min-01.jpg";
import productmine2 from "../../resoures/img/product-min-02.jpg";
import productmine3 from "../../resoures/img/product-min-03.jpg";

const BlogSideMenu = () => {
  const listCategoies = [
    "Fashion",
    "Beauty",
    "Street style",
    "Life style",
    "DIY & Crafts",
  ];
  const listTags = ["Fashion", "Lifestyle", "Demin", "Streetstyle", "Carfs"];
  const listFeatures = [
    {
      img: productmine,
      name: "White Shirt With Pleat Detail Back",
      price: "19.00",
    },
    {
      img: productmine2,
      name: "Converse All Star Hi Black Canvas",
      price: "39.00",
    },
    {
      img: productmine3,
      name: "Nixon Porter Leather Watch In Tan",
      price: "17.00",
    },
  ];
  return (
    <>
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
          <h4 className="mtext-112 cl2 p-b-33 fw-bold">Featured Products</h4>

          <ul>
            {listFeatures.map((item, index) => (
              <li className="flex-w flex-t p-b-30" key={index}>
                <a
                  href="/#"
                  className="wrao-pic-w size-214 hov-ovelay1 m-r-20 text-decoration-none"
                >
                  <img src={item.img} alt="PRODUCT" />
                </a>

                <div className="size-215 flex-col-t p-t-8">
                  <a
                    href="/#"
                    className="stext-116 cl8 hov-cl1 trans-04 text-decoration-none"
                  >
                    {item.name}
                  </a>

                  <span className="stext-116 cl6 p-t-20">${item.price}</span>
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
