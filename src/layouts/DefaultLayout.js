import React from "react";
import { Routes, Route } from "react-router";
import router from "../router";
import Footer from "./Footer";
import Header from "./Header";
function DefaultLayout() {
  return (
    <>
      <Header />
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default DefaultLayout;
