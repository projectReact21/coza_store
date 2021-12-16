import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import CateloryListText from "../../component/CateloryListText";
import ListProductItem from "../../component/ListProductItem";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../../stores/action";
import productService from "../../services/productService";
import { toast } from "react-toastify";

function ProductOverview() {
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [data, setDtata] = useState([]);
  const [pageLength, setPageLength] = useState(0);
  const fill = useSelector((state) => state.auth.selectedShop);
  const perPage = useSelector((state) => state.auth.perpage);
  console.log("fill", fill);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fill === "allproducts") {
      console.log("allproduct");
      productService.getPaging(0, perPage).then((res) => {
        setDtata(res.data.data.data);
        setPageLength(res.data.data.pagingInfo.pageLength);
      });
    } else {
      console.log("else");
      productService.getPagingSearch(fill, 0, perPage).then((res) => {
        setDtata(res.data.data.data);
        setPageLength(res.data.data.pagingInfo.pageLength);
      });
    }
  }, [fill, perPage]);

  const handleFilter = () => {
    setShowFilter(!showFilter);
    setShowSearch(false);
  };
  const handleSearch = () => {
    setShowSearch(!showSearch);
    setShowFilter(false);
  };
  const handleChangePerPage = (e) => {
    e.preventDefault();
    dispatch({
      type: ActionTypes.SET_PERPAGE,
      perpage: perPage + 10,
    });
    if (perPage + 10 >= pageLength) {
      toast.warning("end product");
    }
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
        {data?.map((pro) => (
          <Col sm={12} md={6} lg={3} key={pro.id}>
            <ListProductItem productItem={pro} shop="shop" />
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center mb-5 mt-5">
        {perPage >= pageLength ? (
          ""
        ) : (
          <Button
            onClick={(e) => handleChangePerPage(e)}
            className="text-uppercase col-sm-3 col-md-2 text-dark h-100 btn-loadmore"
          >
            load more
          </Button>
        )}
      </Row>
    </>
  );
}

export default ProductOverview;
