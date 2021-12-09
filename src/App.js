import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./cssGlobal/animate.css";
import "./cssGlobal/select2.min.css";
import "./cssGlobal/util.css";
import "./cssGlobal/main.css";
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
          className="bg-danger"
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
