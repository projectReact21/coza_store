import React from "react";
import { Container } from "react-bootstrap";
import "./Main.css";
import MainHome from "./MainHome";
function Main() {
  return (
    <Container>
      <h2 className="text-uppercase fs-1 mt-5 mb-5 text-center ">
        store Overview
      </h2>
      <MainHome />
    </Container>
  );
}

export default Main;
