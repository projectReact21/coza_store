import React from "react";
import { Container, Row, Col, ListGroup, Form, Button } from "react-bootstrap";
import LayoutListTextItem from "./LayoutListTextItem";
import "./css/Header.css";
const listFirst = ["women", "men", "Shoes", "Watches"];
// const listSecond = ["track order", "returns", "shipping", "FAQs"];

const listSecond = ["Theo dõi đơn hàng", "Đổi trả", "Vận chuyển", "FAQs"];

function Footer() {
  return (
    <footer className="m-footer">
      <Container fluid className="bg-dark ">
        <Container className="bg-dark">
          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={3} className=" mt-5 col-lg-3 p-b-50">
              <h4 className="text-white mb-4">Loại Sản Phẩm</h4>
              <LayoutListTextItem listContent={listFirst} />
            </Col>
            <Col xs={12} sm={6} md={3} className=" mt-5 col-lg-3 p-b-50">
              <h4 className="text-white mb-4">Trợ Giúp</h4>
              <LayoutListTextItem listContent={listSecond} />
            </Col>
            <Col xs={12} sm={6} md={3} className=" mt-5 col-lg-3 p-b-50">
              <h4 className="text-white mb-4">Liên Hệ</h4>
              <ListGroup className="border-0  ">
                <ListGroup.Item className="border-0 px-0 bg-dark text-white">
                  <p className="cl-primary">
                    Có câu hỏi nào không? Hãy cho chúng tôi biết tại cửa hàng
                    tại tầng 8, 379 Hudson St, New York, NY 10018 hoặc gọi cho
                    chúng tôi theo số{" "}
                    <strong className="text-primary mx-0">
                      (+1) 96 716 6879
                    </strong>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white">
                  <Row className="justify-content-center">
                    <Col xs={3} sm={3} md={2}>
                      <i
                        className="fa fa-facebook-f cl-primary fs-3 hover_translate"
                        aria-hidden="true"
                      ></i>
                    </Col>
                    <Col xs={3} sm={3} md={2}>
                      <i
                        className="fa fa-instagram cl-primary fs-3 hover_translate"
                        aria-hidden="true"
                      ></i>
                    </Col>
                    <Col xs={3} sm={3} md={2}>
                      <i
                        className="fa fa-pinterest-p cl-primary cl-primary fs-3 hover_translate"
                        aria-hidden="true"
                      ></i>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={12} sm={6} md={3} className=" mt-5 col-lg-3 p-b-50">
              <h4 className="text-white mb-4">Bản tin</h4>
              <Form>
                <input
                  type="email"
                  className="form-control cl-primary bg-gray  border-0 "
                  placeholder="email@example.com"
                ></input>
                <Row className="justify-content-center mt-4">
                  <Button
                    type="submit"
                    className="col-sm-10 col-md-10 btn_submit border-radius-2 h-46 "
                  >
                    Subscribe
                  </Button>
                </Row>
              </Form>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={6} md={4}>
              <Row className="justify-content-center">
                <a href="/#" className="col-2 col-md-2 p-0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-pay-01.png?raw=true"
                    className=" hover_translate"
                    alt="ICON-PAY"
                  />
                </a>
                <a href="/#" className="col-2 col-md-2 p-0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-pay-02.png?raw=true"
                    className=" hover_translate"
                    alt="ICON-PAY"
                  />
                </a>
                <a href="/#" className="col-2 col-md-2 p-0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-pay-03.png?raw=true"
                    className=" hover_translate"
                    alt="ICON-PAY"
                  />
                </a>
                <a href="/#" className="col-2 col-md-2 p-0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-pay-04.png?raw=true"
                    className=" hover_translate"
                    alt="ICON-PAY"
                  />
                </a>
                <a href="/#" className="col-2 col-md-2 p-0">
                  <img
                    src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/icon-pay-05.png?raw=true"
                    className=" hover_translate"
                    alt="ICON-PAY"
                  />
                </a>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
            <p className=" text-center cl-primary">
              Copyright &copy; All rights reserved | Made with{""}
              <i className="fa fa-heart-o" aria-hidden="true"></i>
              {""} By Team
            </p>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}

export default Footer;
