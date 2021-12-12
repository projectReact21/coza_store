import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import CateloryListText from "../../../component/CateloryListText";
import ListProductItem from "../../../component/ListProductItem";
// import productService from "../../../services/productService";
import { useDispatch, useSelector } from "react-redux";
// import ActionTypes from "../../../stores/action";

function ProductOverview() {
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [dataFromStore, setDataFromStore] = useState([]);
  const isFill = useSelector((state) => state.auth.isFill);
  const productFill = useSelector((state) => state.auth.productFill);
  useEffect(() => {
    setProducts(dataFromStore);
  }, [dataFromStore]);
  const handleFilter = () => {
    setShowFilter(!showFilter);
    setShowSearch(false);
  };
  const handleSearch = () => {
    setShowSearch(!showSearch);
    setShowFilter(false);
  };
  const listNav = ["allproducts", "women", "men", "bag", "shoes", "watches"];
  const listPrice = [
    "all",
    "$0.00 - $50.00",
    "$50.00 - $100.00",
    "$100.00 - $150.00",
    "$150.00 - $200.00",
    " $200.00+",
  ];
  const listColor = ["black", "blue", "grey", "green", "red", "white"];
  const listTags = ["fashion", "lifestyle", "denim", "streetstyle", "crafts"];
  const listFilter = [
    "default",
    "popularity",
    "average raing",
    "newness",
    " price:Low To Hight",
    "price:Hight To Low",
  ];
  return (
    <>
      <Row className="mb-2">
        <CateloryListText
          listText={listNav}
          typeFill="theme"
          defaultActive="allproducts"
        />
        <Col sm={12} md={4}>
          <Row className="justify-content-around g-3 px-2 pe-2 ">
            <Button
              onClick={handleFilter}
              className="col-xs-6 col-md-5 bg-light text-dark border-1"
            >
              {showFilter ? (
                <i className="fa fa-times fs-4 me-1" aria-hidden="true"></i>
              ) : (
                <i
                  className="fa fa-filter text-dark me-1 fs-4 "
                  aria-hidden="true"
                ></i>
              )}
              <strong>Filter</strong>
            </Button>
            <Button
              onClick={handleSearch}
              className="col-xs-6 col-md-5 bg-light text-dark border-1"
            >
              {showSearch ? (
                <i className="fa fa-times fs-4 me-1" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-search fs-4 me-1" aria-hidden="true"></i>
              )}
              <strong>search</strong>
            </Button>
          </Row>
        </Col>
      </Row>
      {showFilter && (
        <Row className=" mt-4 mb-4 pt-4 pt-1 pb-5 bg-light g-4">
          <Col sm={12} md={6} lg={3}>
            <strong className="fs-3">Sort By</strong>
            <CateloryListText
              col="col-12"
              listText={listFilter}
              typeFill="sorfby"
              // defaultActive="average raing"
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <strong className="fs-3">Price</strong>
            <CateloryListText
              col="col-12"
              listText={listPrice}
              typeFill="price"
              // defaultActive="all"
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <strong className="fs-3">Color</strong>
            <CateloryListText
              col="col-12"
              listText={listColor}
              typeFill="color"
              // defaultActive="green"
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <strong className="fs-3">Tags</strong>
            <CateloryListText
              listText={listTags}
              typeFill="tag"
              // defaultActive="lifestyle"
              radius="2rem"
            />
          </Col>
        </Row>
      )}
      <Row>
        {showSearch && (
          <Form>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 form-control mt-1 mb-5"
              aria-label="Search"
            />
          </Form>
        )}
      </Row>
      <Row className="gy-4">
        {productFill.map((pro) => (
          <Col sm={12} md={6} lg={3} key={pro.id}>
            <ListProductItem
              srcImg={pro.srcImg}
              status={pro.status}
              name={pro.name}
              price={"$ " + pro.price}
            />
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center mb-5 mt-5">
        <Button className="text-uppercase col-sm-3 col-md-2 text-dark h-100 btn-loadmore">
          load more
        </Button>
      </Row>
    </>
  );
}

export default ProductOverview;
