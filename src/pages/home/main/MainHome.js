import React, { useState } from "react";
import { Carousel, Row, Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import MainHomeListText from "./MainHomeListext";
import { useSelector } from "react-redux";
import BannerItem from "../../../component/BannerItem";
import CateloryItem from "../../../component/CateloryItem";
import ListProductItem from "../../../component/ListProductItem";
import mycartService from "../../../services/mycartService";

function MainHome() {
  const d = useSelector((state) => state.auth.productHome);
  const item1 = [d[0], d[1], d[2], d[3]];
  const item2 = [d[4], d[5], d[6], d[7]];
  console.log("item1", item1);
  console.log("item2", item2);
  const lists = ["best seller", "feautured", "sale", "top rate"];
  const names = ["seller", "feature", "sale", "topRate"];
  const addToCart = (data) => {
    mycartService.add(data).then((res) => {
      console.log(res.data);
      if (res.errorCode === 0) {
        console.log("Cart added");
      }
    });
  };
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
<<<<<<< HEAD
          <Carousel.Item>
            <Container>
              <Row className="gy-4">
                {item1.map((i, index) => (
                  <Col key={index} xs={6} md={6} lg={3}>
                    <ListProductItem productItem={i} addToCart={addToCart} />

                    {/* <ListProductItem
                      srcImg={i?.srcImg}
                      name={i?.name}
                      price={"$ " + i?.price}
                      fs="fs-5"
                    /> */}
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
                    <ListProductItem productItem={i} addToCart={addToCart} />
                    {/* <ListProductItem  srcImg={i?.srcImg} name={i?.name} price={"$ " + i?.price} fs="fs-5" /> */}
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
=======
            <Carousel.Item>
                <Container>
                <Row className="gy-4" >
                    {item1.map((i, index)=>(
                    <Col key={index} xs={6}  md={6} lg={3} >
                        <ListProductItem  srcImg={i?.srcImg} name={i?.name} price={"$ " + i?.price} fs="fs-5"  />
                    </Col>
                    ))}
                </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container>
                <Row className="gy-4">
                    {item2.map((i,index)=>(
                    <Col key={index} xs={6} md={6} lg={3} >
                        <ListProductItem productItem={i} fs="fs-5" />
                    </Col>
                    ))}
                </Row>
                </Container>
            </Carousel.Item>
>>>>>>> 82ebb7cf5f3453ac97c07742d7e1e45a7df39899
        </Carousel>
      </Row>
    </>
  );
}

export default MainHome;
