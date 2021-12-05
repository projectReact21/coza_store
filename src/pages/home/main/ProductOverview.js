import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import CateloryListText from "../../../component/CateloryListText";
import ListProductItem from "../../../component/ListProductItem";

function ProductOverview() {
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleFilter = () => {
    setShowFilter(!showFilter);
    setShowSearch(false);
  };
  const handleSearch = () => {
    setShowSearch(!showSearch);
    setShowFilter(false);
  };
  const listNav = ["allproducts", "women", "men", "bag", "shoes", "satches"];
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
        <CateloryListText listText={listNav} defaultActive="allproducts" />
        <Col sm={12} md={4}>
          <Row className="justify-content-around g-3 px-2 pe-2 ">
            <Button
              onClick={handleFilter}
              className="col-xs-6 col-md-5 bg-light text-dark border-1"
            >
              {showFilter ? (
                <i class="fa fa-times fs-4 me-1" aria-hidden="true"></i>
              ) : (
                <i
                  class="fa fa-filter text-dark me-1 fs-4 "
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
                <i class="fa fa-times fs-4 me-1" aria-hidden="true"></i>
              ) : (
                <i class="fa fa-search fs-4 me-1" aria-hidden="true"></i>
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
              defaultActive="average raing"
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <strong className="fs-3">Price</strong>
            <CateloryListText
              col="col-12"
              listText={listPrice}
              defaultActive="all"
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <strong className="fs-3">Color</strong>
            <CateloryListText
              col="col-12"
              listText={listColor}
              defaultActive="green"
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <strong className="fs-3">Tags</strong>
            <CateloryListText
              listText={listTags}
              defaultActive="lifestyle"
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
        <Col sm={12} md={6} lg={3}>
          <ListProductItem
            srcImg="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-01.jpg?raw=true"
            status="1"
            name="Esprit Ruffle Shirt"
            price="$16.64"
          />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <ListProductItem
            srcImg="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-01.jpg?raw=true"
            status="0"
            name="Esprit Ruffle Shirt"
            price="$16.64"
          />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <ListProductItem
            srcImg="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-01.jpg?raw=true"
            status="0"
            name="Esprit Ruffle Shirt"
            price="$16.64"
          />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <ListProductItem
            srcImg="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-01.jpg?raw=true"
            status="0"
            name="Esprit Ruffle Shirt"
            price="$16.64"
          />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <ListProductItem
            srcImg="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-01.jpg?raw=true"
            status="0"
            name="Esprit Ruffle Shirt"
            price="$16.64"
          />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <ListProductItem
            srcImg="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-01.jpg?raw=true"
            status="0"
            name="Esprit Ruffle Shirt"
            price="$16.64"
          />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <ListProductItem
            srcImg="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-01.jpg?raw=true"
            status="0"
            name="Esprit Ruffle Shirt"
            price="$16.64"
          />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <ListProductItem
            srcImg="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-01.jpg?raw=true"
            status="0"
            name="Esprit Ruffle Shirt"
            price="$16.64"
          />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <ListProductItem
            srcImg="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-01.jpg?raw=true"
            status="0"
            name="Esprit Ruffle Shirt"
            price="$16.64"
          />
        </Col>
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
