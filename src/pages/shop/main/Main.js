import React from "react";
import { Container } from "react-bootstrap";
import "./Main.css";
import ProductOverview from './../ProductOverview';
function Main() {
  return (
    <Container>
      <h2 className="text-uppercase mt-5 mb-5">Product Overview</h2>
      <ProductOverview/>
    </Container>
  );
}

export default Main;
