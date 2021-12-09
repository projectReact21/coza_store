import React from "react";
import "./home.css";
import Banner from "./Banner";
import CateloryProduct from "./CateloryProduct";
import Main from "./main/Main";
import { useEffect } from "react";
import productService from "./../../services/productService";
import { useDispatch } from "react-redux";
import ActionTypes from "../../stores/action";

function Home() {
  const dispatch = useDispatch();
  const getData = (data) => {
    dispatch({
      type: ActionTypes.LOAD_DATA,
      allproducts: data,
      productFill:data
    });
  };
  useEffect(() => {
    productService.getProduct().then((res) => {
      getData(res.data.data);
    });
    productService.getFillProduct(1).then(res=>{
    dispatch({
        type:ActionTypes.FIND_LIKE_DATA,
        productLike:res.data.data
      })
    })
  }, []);

  return (
    <>
      <Banner />
      <CateloryProduct />
      <Main />
    </>
  );
}

export default Home;
