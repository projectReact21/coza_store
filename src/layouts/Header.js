import React from "react";
import "./layout.css";
import { Navbar, Container, Nav, Form, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Container fluid className="top-bar">
        <Row>
          <Col md={6}>
            <Nav.Link href="/#">
              Free shipping for standard order over $100
            </Nav.Link>
          </Col>
          <Col md={6}>
            <Row className=" align-items-center mt-1">
              <Col md={4}>
                {" "}
                <Nav.Link href="/#" className="p-0">
                  {" "}
                  Help & FAQs
                </Nav.Link>
              </Col>
              <Col md={4}>
                {" "}
                <Nav.Link href="/#" className="p-0">
                  {" "}
                  My Account
                </Nav.Link>
              </Col>
              <Col>
                {" "}
                <Nav.Link href="/#" className="p-0">
                  {" "}
                  EN
                </Nav.Link>
              </Col>
              <Col>
                {" "}
                <Nav.Link href="/#" className="p-0">
                  {" "}
                  USD
                </Nav.Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Navbar expand="lg" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/icons/logo-01.png?raw=true" alt="IMG-LOGO" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-4">
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link as={NavLink} to="/feature">
                Features
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id="search"
              />

              <label htmlFor="search">
                <i
                  className="fa fa-search fs-3 mt-1 mx-2 "
                  aria-hidden="true"
                ></i>
              </label>
              <i
                className="fa fa-shopping-cart fs-3 mt-1 mx-2"
                aria-hidden="true"
              ></i>
              <i className="fa fa-heart fs-3 mt-1" aria-hidden="true">
                <sup className="text-warning mx-1">2</sup>
              </i>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
