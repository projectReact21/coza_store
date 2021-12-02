import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./cssGlobal/animate.css";
import "./cssGlobal/select2.min.css";
import "./cssGlobal/util.css";
import "./cssGlobal/main.css";
import DefaultLayout from "./layouts/DefaultLayout";
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
=======
import Shop from "./pages/shop/Shop";
>>>>>>> c3d78f0019f021b708761f0ffd1fc1f854efa00a

function App() {
  return (
    <>
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>
=======
      {/* <DefaultLayout /> */}
      <Shop />
>>>>>>> c3d78f0019f021b708761f0ffd1fc1f854efa00a
    </>
  );
}

export default App;
