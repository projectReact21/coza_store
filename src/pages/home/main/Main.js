import React from "react";
import { Container } from "react-bootstrap";
import "./Main.css";
import MainHome from "./MainHome";
function Main() {
  return (
    <Container className="mb-lg-5">
      <h2 className="text-uppercase fs-1 mt-5 mb-5 text-center ">Tổng Quan</h2>
      <MainHome />
    </Container>
  );
}

export default Main;
