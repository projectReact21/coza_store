import React from "react";
import { Routes, Route } from "react-router";
import router from "../router";
import Footer from "./Footer";
import Header from "./Header";
import "./css/Header.css";
function DefaultLayout() {
  return (
    <div className="DefaultLayout">
      <Header />
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
