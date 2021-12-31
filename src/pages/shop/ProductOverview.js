import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import CateloryListText from "../../component/CateloryListText";
import ListProductItem from "../../component/ListProductItem";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../../stores/action";
import productService from "../../services/productService";
import { toast } from "react-toastify";
import { DebounceInput } from "react-debounce-input";

function ProductOverview() {
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [result, setResult] = useState("");
  const [search, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [pageLength, setPageLength] = useState(0);
  const fill = useSelector((state) => state.auth.selectedShop);
  const perPage = useSelector((state) => state.auth.perpage);
  const typeFill = useSelector((state) => state.auth.typeFill);
  const selectedFillShop = useSelector((state) => state.auth.selectedFillShop);
  const changeStatus = useSelector((state) => state.auth.changeStatus);

  const dispatch = useDispatch();
  const datafill = (x) => {
    setData(x.data);
    setSearch(true);
  };
  //
  useEffect(() => {
    switch (parseInt(typeFill)) {
      case 1:
        if (fill === "allproducts") {
          switch (selectedFillShop) {
            case "asc":
              productService
                .getSortProduct("price", selectedFillShop)
                .then((res) => datafill(res.data));
              break;
            case "desc":
              productService
                .getSortProduct("price", selectedFillShop)
                .then((res) => datafill(res.data));
              break;
            case "price0":
              productService.getPaging(0, perPage).then((res) => {
                console.log(res.data.data.data);
                setData(res.data.data.data);
                setPageLength(res.data.data.pagingInfo.pageLength);
              });
              break;
            case "price1":
              productService.getSlice(0, 50).then((res) => {
                console.log(res);
                datafill(res.data);
              });
              break;
            case "price2":
              productService
                .getSlice(50, 100)
                .then((res) => datafill(res.data));
              break;
            case "price3":
              productService
                .getSlice(100, 150)
                .then((res) => datafill(res.data));
              break;
            case "price4":
              productService
                .getSlice(150, 200)
                .then((res) => datafill(res.data));
              break;
            case "price5":
              productService.getSlice(200).then((res) => datafill(res.data));
              break;
            default:
              productService
                .getFillProduct(selectedFillShop)
                .then((res) => datafill(res.data));
              break;
          }
        } else {
          switch (selectedFillShop) {
            case "desc":
              productService
                .getSortProductQuery(fill, "price", selectedFillShop)
                .then((res) => datafill(res.data));
              break;
            case "asc":
              productService
                .getSortProductQuery(fill, "price", selectedFillShop)
                .then((res) => datafill(res.data));
              break;
            case "price0":
              productService.getPagingSearch(fill, 0, perPage).then((res) => {
                setData(res.data.data.data);
                setPageLength(res.data.data.pagingInfo.pageLength);
              });
              break;
            case "price1":
              productService
                .getSliceQuery(fill, 0, 50)
                .then((res) => datafill(res.data));
              break;
            case "price2":
              productService
                .getSliceQuery(fill, 50, 100)
                .then((res) => datafill(res.data));
              break;
            case "price3":
              productService
                .getSliceQuery(fill, 100, 150)
                .then((res) => datafill(res.data));
              break;
            case "price4":
              productService
                .getSliceQuery(fill, 150, 200)
                .then((res) => datafill(res.data));
              break;
            case "price5":
              productService
                .getSliceQuery(fill, 200)
                .then((res) => datafill(res.data));
              break;
            default:
              productService
                .getFillProductQuery(fill, selectedFillShop)
                .then((res) => datafill(res.data));
              break;
          }
        }
        break;

      default:
        break;
    }
  }, [typeFill, selectedFillShop, changeStatus]);
  //
  const loadData = () => {
    if (fill === "allproducts") {
      productService.getPaging(0, perPage).then((res) => {
        setData(res.data.data.data);
        setPageLength(res.data.data.pagingInfo.pageLength);
      });
    } else {
      productService.getPagingSearch(fill, 0, perPage).then((res) => {
        setData(res.data.data.data);
        // setPageLength(res.data.data.pagingInfo.pageLength);
      });
    }
  };
  useEffect(() => {
    loadData();
  }, [fill, perPage]);

  const handleFilter = () => {
    setSearch(false);
    setShowFilter(!showFilter);
    setShowSearch(false);
    if (showFilter) {
      loadData();
    }
  };
  const handleSearch = () => {
    setInputValue("");
    setShowSearch(!showSearch);
    if (showSearch) {
      loadData();
    }
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
  const listNav = ["allproducts", "women", "men", "belt", "shoes", "watches"];
  const listNavNames = [
    "allproducts",
    "women",
    "men",
    "belt",
    "shoes",
    "watches",
  ];
  const listPrice = [
    "all",
    "$0.00 - $50.00",
    "$50.00 - $100.00",
    "$100.00 - $150.00",
    "$150.00 - $200.00",
    " $200.00+",
  ];
  const priceNames = [
    "price0",
    "price1",
    "price2",
    "price3",
    "price4",
    "price5",
  ];
  const listColor = ["black", "blue", "grey", "green", "red", "white"];
  const colorNames = ["black", "blue", "grey", "green", "red", "white"];
  const listTags = ["fashion", "lifestyle", "denim", "streetstyle", "crafts"];
  const tapsName = ["fashion", "lifestyle", "denim", "streetstyle", "crafts"];
  const listFilter = [
    "default",
    "popularity",
    "average rating",
    "newness",
    " price:Low To Hight",
    "price:Hight To Low",
  ];
  const sorfByNames = [
    "default",
    "popularity",
    "average rating",
    "newness",
    "asc",
    "desc",
  ];
  const handleChangeInputSearch = (e) => {
    setResult("");
    if (e.target.value) {
      setSearch(true);
      setInputValue(e.target.value);
    } else setSearch(false);
  };
  useEffect(() => {
    if (search) {
      if (fill === "allproducts") {
        console.log("do search");
        productService.getFullSearch(inputValue).then((res) => {
          console.log(res.data);
          if (res.data.errorCode === 0) {
            setData(res.data.data);
            setResult("");
          } else {
            setResult("không có sản phẩm phù hợp");
            setData([]);
          }
        });
      } else {
        productService.getFullSearchQuery(fill, inputValue).then((res) => {
          if (res.data.errorCode === 0) {
            setData(res.data.data);
            setResult("");
          } else {
            setResult("không có sản phẩm phù hợp");
            setData([]);
          }
        });
      }
    } else {
      loadData();
    }
  }, [search, inputValue]);
  useEffect(() => {
    setShowFilter(false);
    setShowSearch(false);
    setInputValue("");
  }, [fill]);
  useEffect(() => {
    if (data.length === 0) setResult("không có sản phẩm phù hợp");
    else setResult("");
  }, [data]);
  return (
    <>
      <Row className="mb-2">
        <CateloryListText
          listText={listNav}
          typeFill="theme"
          names={listNavNames}
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
              typeFill="sorfBy"
              names={sorfByNames}
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <strong className="fs-3">Price</strong>
            <CateloryListText
              col="col-12"
              listText={listPrice}
              typeFill="price"
              names={priceNames}
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <strong className="fs-3">Color</strong>
            <CateloryListText
              col="col-12"
              listText={listColor}
              typeFill="color"
              names={colorNames}
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <strong className="fs-3">Tags</strong>
            <CateloryListText
              listText={listTags}
              typeFill="tag"
              radius="2rem"
              names={tapsName}
            />
          </Col>
        </Row>
      )}
      <Row>
        {showSearch && (
          <Form>
            <DebounceInput
              minLength={1}
              debounceTimeout={300}
              type="search"
              placeholder="Search"
              className="me-2 form-control mt-1 mb-5"
              aria-label="Search"
              value={inputValue}
              onChange={handleChangeInputSearch}
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
      <Row>
        <strong className="fs-4 text-capitalize text-danger">{result}</strong>
      </Row>
      <Row className="justify-content-center mb-5 mt-5">
        {search ? (
          ""
        ) : perPage >= pageLength ? (
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
