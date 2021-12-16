import React, { useState, useEffect } from "react";
import { Carousel, Row, Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import MainHomeListText from "./MainHomeListext";
import { useSelector } from "react-redux";
import ListProductItem from "../../../component/ListProductItem";
import productService from "../../../services/productService";
function MainHome() {
  const [dataHome, setDataHome] = useState([]);
  const fill = useSelector((state) => state.auth.selectedHome);

  useEffect(() => {
    productService
      .getFillProduct(fill)
      .then((res) => setDataHome(res.data.data));
  }, [fill]);
  const item1 = [dataHome[0], dataHome[1], dataHome[2], dataHome[3]];
  const item2 = [dataHome[4], dataHome[5], dataHome[6], dataHome[7]];

  console.log("item1", item1);
  console.log("item2", item2);
  const lists = ["best seller", "feautured", "sale", "top rate"];
  const names = ["seller", "feature", "sale", "topRate"];
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <MainHomeListText
            names={names}
            listText={lists}
            col="col"
            center="center"
          />
        </Col>
      </Row>
      <Row className="p-5 main__home--carousel">
        <Carousel>
          <Carousel.Item>
            <Container>
              <Row className="gy-4">
                {item1.map((i, index) => (
                  <Col key={index} xs={6} md={6} lg={3}>
                    <ListProductItem
                      status="no"
                      productItem={i}
                      fs="fs-5"
                      home="home"
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row className="gy-4">
                {item2.map((i, index) => (
                  <Col key={index} xs={6} md={6} lg={3}>
                    <ListProductItem
                      status="no"
                      productItem={i}
                      fs="fs-5"
                      home="home"
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  );
}

export default MainHome;
