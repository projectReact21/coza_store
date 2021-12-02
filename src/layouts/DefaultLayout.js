import React from "react";
import { Routes, Route } from "react-router";
import router from "../router";
import Footer from "./Footer";
import Header from "./Header";
function DefaultLayout() {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
=======
      <Home />
>>>>>>> c3d78f0019f021b708761f0ffd1fc1f854efa00a
      <Footer />
    </>
  );
}

export default DefaultLayout;
