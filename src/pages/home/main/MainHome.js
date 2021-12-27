import React, { useState, useEffect } from "react";
import { Carousel, Row, Container, Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MainHomeListText from "./MainHomeListext";
import { useSelector } from "react-redux";
import ListProductItem from "../../../component/ListProductItem";
import productService from "../../../services/productService";
import blogService from "./../../../services/blogService";
function MainHome() {
  const navigate = useNavigate();
  const [dataHome, setDataHome] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [date, setDate] = useState([]);
  const fill = useSelector((state) => state.auth.selectedHome);

  useEffect(() => {
    productService.getFillProduct(fill).then((res) => {
      console.log("res.data", res.data);
      setDataHome(res.data.data);
    });
  }, [fill]);
  useEffect(() => {
    blogService.getpaging(0, 3).then((res) => setBlogs(res.data.data));
  }, []);
  useEffect(() => {
    setDate([]);
    blogs.forEach((b) => {
      setDate((date) => [...date, b?.create_at.slice(0, 10)]);
    });
  }, [blogs]);
  const item1 = [dataHome[0], dataHome[1], dataHome[2], dataHome[3]];
  const item2 = [dataHome[4], dataHome[5], dataHome[6], dataHome[7]];
  const lists = ["best seller", "feautured", "sale", "top rate"];
  const names = ["seller", "feature", "sale", "toprate"];
  const handleChangePage = (e, id) => {
    e.preventDefault();
    navigate(`/blog/${id}`);
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
      <Row>
        <h2
          className="text-uppercase fs-1 mt-5 mb-5 text-center"
          // style={{ fontWeight: "800" }}
        >
          our blog
        </h2>
      </Row>
      <Row>
        {blogs.map((b, index) => (
          <Col xs={12} sm={12} md={4} key={b.id}>
            <Card>
              <div
                className="w-100"
                style={{ overflow: "hidden", height: "15rem" }}
              >
                <Card.Img className="h-100 hover-scale " src={b.srcImg} />
              </div>
              <Card.Body>
                <Card.Text>
                  <Row className="gx-4 gy-2">
                    <Col xs="auto">
                      by <strong className="fs-4 text-bold">{b.author}</strong>
                    </Col>
                    <Col xs="auto">
                      on
                      <strong className="fs-5 text-bold">
                        {date[index]}
                      </strong>{" "}
                    </Col>
                  </Row>
                  <Row>
                    <a
                      onClick={(e) => handleChangePage(e, b.id)}
                      href="/"
                      className="fs-4 fw-bold"
                      style={{ textDecoration: "none" }}
                    >
                      {b.title}
                    </a>
                  </Row>
                  <Row>
                    <p className="line-3">{b.contents[0]}</p>
                    <span
                      className="fs-4 read-more"
                      onClick={() => navigate(`/blog/${b.id}`)}
                    >
                      read more
                    </span>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default MainHome;
