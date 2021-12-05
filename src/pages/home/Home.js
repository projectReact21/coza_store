import React from "react";
import "./home.css";
import Banner from "./Banner";
import CateloryProduct from "./CateloryProduct";
import Main from "./main/Main";
import { Container } from "react-bootstrap";
function Home() {
  return (
    <>
      <Banner />
      <Container>
        <CateloryProduct />
        <Main />
      </Container>
    </>
  );
}

export default Home;
