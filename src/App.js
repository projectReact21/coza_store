import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./cssGlobal/animate.css";
import "./cssGlobal/select2.min.css";
import "./cssGlobal/util.css";
import "./cssGlobal/main.css";
// import "jquery/dist/jquery.min.js";
// import "./cssGlobal/main.js";
import DefaultLayout from "./layouts/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";

function App() {
  return (
    <>
      <div
        className="position-absolute pos-fixed  w-100"
        style={{ zIndex: 100 }}
      >
        <LoadingBar
          updateTime={100}
          className="bg-custom"
          style={{ height: "4px" }}
        />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
