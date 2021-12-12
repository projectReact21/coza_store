import React from "react";
import { Row, Col } from "react-bootstrap";
function DressItem({ icon, title, description }) {
  const icons = `${icon} fs-1 hover_translate`;
  return (
    <Row className="align-items-center mb-4 p-4">
      <Col xs="auto">
        <i className={icons}></i>
      </Col>
      <Col>
        <strong className="fs-5 text-uppercase">{title}</strong>
        <p className="fs-5 text-primary hover-layout">{description}</p>
      </Col>
    </Row>
  );
}

export default DressItem;
