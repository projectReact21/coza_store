import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./cssGlobal/animate.css";
import "./cssGlobal/select2.min.css";
import "./cssGlobal/util.css";
import "./cssGlobal/main.css";
import DefaultLayout from "./layouts/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
