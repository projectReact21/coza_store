import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
// import "../node_modules/bootstrap-input-spinner/src/bootstrap-input-spinner.js";
import { toast } from "react-toastify";
import { Provider } from "react-redux";
import store from "./stores/index";

toast.configure({
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  rtl: false,
  progress: undefined,
  theme: "colored",
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
