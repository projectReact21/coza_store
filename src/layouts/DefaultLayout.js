import React from "react";
import Home from "../pages/home/Home";
import Footer from "./Footer";
import Header from "./Header";
function DefaultLayout() {
  return (
    <>
      <Header />
        <Home/>
      <Footer />
    </>
  );
}

export default DefaultLayout;
