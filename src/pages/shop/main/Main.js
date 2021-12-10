import React from "react";
import { Container } from "react-bootstrap";
import ProductOverview from "./ProductOverview";
import "./Main.css";
function Main() {
  return (
    <Container>
      <h2 className="text-uppercase mt-5 mb-5">Product Overview</h2>
      <ProductOverview />
    </Container>
  );
}

export default Main;
