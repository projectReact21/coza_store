import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
function Footer() {
  return (
    <footer>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={3} className=" mt-5 col-lg-3 p-b-50">
            <h4 className="text-white mb-4">Categories</h4>
            <ListGroup className="border-0  ">
              <ListGroup.Item className="border-0">
                <Nav.Item href="#Women">Women</Nav.Item>
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <Nav.Item href="#Men">Men</Nav.Item>
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <Nav.Item href="#Shoes">Shoes</Nav.Item>
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <Nav.Item href="#Watches">Watches</Nav.Item>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} sm={6} md={3} className=" mt-5 col-lg-3 p-b-50">
            <h4 className="text-white mb-4">Help</h4>
            <ListGroup className="border-0  ">
              <ListGroup.Item className="border-0">
                <Nav.Item href="#TrackOrder"> Track Order</Nav.Item>
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <Nav.Item href="#Returns">Returns</Nav.Item>
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <Nav.Item href="#Shipping">Shipping</Nav.Item>
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <Nav.Item href="#Watches">FAQs</Nav.Item>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} sm={6} md={3} className=" mt-5 col-lg-3 p-b-50">
            <h4 className="text-white mb-4">GET IN TOUCH</h4>
            <ListGroup className="border-0  ">
              <ListGroup.Item className="border-0 px-0">
                <p className="cl-primary">
                  Any questions? Let us know in store at 8th floor, 379 Hudson
                  St, New York, NY 10018 or call us on{" "}
                  <strong className="text-primary mx-0">
                    (+1) 96 716 6879
                  </strong>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col sm={3} md={2}>
                    <i
                      className="fa fa-facebook-f cl-primary fs-3 hover_translate"
                      aria-hidden="true"
                    ></i>
                  </Col>
                  <Col sm={3} md={2}>
                    <i
                      className="fa fa-instagram cl-primary fs-3 hover_translate"
                      aria-hidden="true"
                    ></i>
                  </Col>
                  <Col sm={3} md={2}>
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
            <h4 className="text-white mb-4">Newsletter</h4>
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
              <a href="/#" className="col-sm-2 col-md-2 p-0">
                <img
                  src="images/icons/icon-pay-01.png"
                  className=" hover_translate"
                  alt="ICON-PAY"
                />
              </a>
              <a href="/#" className="col-sm-2 col-md-2 p-0">
                <img
                  src="images/icons/icon-pay-02.png"
                  className=" hover_translate"
                  alt="ICON-PAY"
                />
              </a>
              <a href="/#" className="col-sm-2 col-md-2 p-0">
                <img
                  src="images/icons/icon-pay-03.png"
                  className=" hover_translate"
                  alt="ICON-PAY"
                />
              </a>
              <a href="/#" className="col-sm-2 col-md-2 p-0">
                <img
                  src="images/icons/icon-pay-04.png"
                  className=" hover_translate"
                  alt="ICON-PAY"
                />
              </a>
              <a href="/#" className="col-sm-2 col-md-2 p-0">
                <img
<<<<<<< HEAD
                  src="./images/icons/icon-pay-05.png"
=======
                  src="images/icons/icon-pay-05.png"
>>>>>>> c3d78f0019f021b708761f0ffd1fc1f854efa00a
                  className=" hover_translate"
                  alt="ICON-PAY"
                />
              </a>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <p className=" text-center cl-primary">
            Copyright &copy; All rights reserved | Made with
            <i className="fa fa-heart-o" aria-hidden="true"></i> By
          </p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
