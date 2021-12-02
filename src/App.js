import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./cssGlobal/animate.css";
import "./cssGlobal/select2.min.css";
import "./cssGlobal/util.css";
import "./cssGlobal/main.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <>
      {/* <DefaultLayout /> */}
      <Shop />
    </>
  );
}

export default App;
