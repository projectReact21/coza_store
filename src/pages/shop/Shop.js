import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import productService from "../../services/productService";
import ActionTypes from "../../stores/action";
import Main from "./main/Main";

const Shop = () => {
  const dispatch = useDispatch();
  const getData = (data) => {
    dispatch({
      type: ActionTypes.LOAD_DATA,
      allproducts: data,
      productFill: data,
    });
  };
  useEffect(() => {
    productService.getProduct().then((res) => {
      getData(res.data.data);
    });
    productService.getFillProduct(1).then((res) => {
      dispatch({
        type: ActionTypes.FIND_LIKE_DATA,
        productLike: res.data.data,
      });
    });
  }, []);
  return (
    <>
      <Main />
    </>
  );
};

export default Shop;
