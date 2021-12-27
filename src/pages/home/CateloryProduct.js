import React from "react";
import { Container, Row } from "react-bootstrap";
import CateloryItem from "./../../component/CateloryItem";

function CateloryProduct() {
  return (
    <Container fluid className="pt-5 pb-5 mt-lg-1">
      <Row className="justify-content-center gy-4">
        <CateloryItem
          srcImg="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/banner-01.jpg?raw=true "
          title="women"
          text="string 2018"
          name="women"
        />
        <CateloryItem
          srcImg="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/banner-02.jpg?raw=true "
          title="men"
          text="string 2018"
          name="men"
        />
        <CateloryItem
          srcImg="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/banner-03.jpg?raw=true "
          title="Accessories"
          text="new trend"
          name="allproducts"
        />
      </Row>
    </Container>
  );
}

export default CateloryProduct;
