import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import mycartService from "../../services/mycartService";
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
  const getMyCart = (data) => {
    dispatch({
      type: ActionTypes.LOAD_MY_CARTS,
      allmycarts: data,
    });
  };
  useEffect(() => {
    mycartService.getList().then((res) => {
      getMyCart(res.data.data);
    });
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
