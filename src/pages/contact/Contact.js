import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import DressItem from "./DressItem";
function Contact() {
  return (
    <>
      <Row
        className="align-items-center"
        style={{
          height: "239px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundPosition: "center center",
          backgroundImage:
            'url("https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/bg-01.jpg?raw=true")',
        }}
      >
        <h1
          className="text-center text-uppercase text-white shadow-lg hover_translate "
          style={{ fontWeight: 800, fontSize: "3rem",cursor:"default" }}
        >
          contact
        </h1>
      </Row>
      <Row className="bg-white pt-5 pb-5 container">
        <Col xs={12} sm={12} md={6} className="p-5 border">
          <Form>
            <Form.Group
              as={Row}
              inline="true"
              className="mx-auto mx-auto align-items-center"
            >
              <Form.Label as={Col} className=" col-auto mb-0">
                <label htmlFor="email">
                  <i
                    className="fa fa-envelope fs-1 bg-transparent mx-1 h-100"
                    aria-hidden="true"
                  ></i>
                </label>
              </Form.Label>
              <Form.Control
                id="email"
                style={{ height: "3rem" }}
                className="px-1 border-0 border-bottom-1 col fs-4"
                type="email"
                placeholder="name@example.com"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mt-4 ">
              <Form.Control
                as="textarea"
                placeholder="How Can We Help ?"
                rows="8"
                className="pt-4 px-4 fs-4"
              ></Form.Control>
            </Form.Group>
            <Button
              type="submit"
              className="w-100 mt-4 rounded-pill btn_submit bg-dark border-0 text-white text-uppercase "
              style={{ height: "3rem" }}
            >
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={12} sm={12} md={6} className="p-5 border">
          <DressItem
            icon="fa fa-map-marker"
            title="adress"
            description="Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US"
          />
          <i className="" aria-hidden="true"></i>
          <DressItem
            icon="fa fa-phone"
            title="Lets Talk"
            description="+1 800 1236879"
          />
          <DressItem
            icon="fa fa-envelope"
            title="Sale Support"
            description="contact@example.com"
          />
        </Col>
      </Row>
      <Row className="position-relative">
        {/* <!--Google map--> */}
        <div
          id="map-container-google-1"
          className="z-depth-1-half map-container"
          style={{ height: "500px" }}
        >
          <iframe
            src="https://maps.google.com/maps?q=cozastore&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
           </div>
        {/* <!--Google Maps--> */}
      </Row>
    </>
  );
}

export default Contact;
