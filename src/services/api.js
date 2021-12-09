import axios from "axios";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import store from "./../stores/index";
const url = {
<<<<<<< HEAD
  baseUrl: "https://hoanghuy1998.herokuapp.com/allproduct",
  allproducts: "/list",
  filter: "/filter",
=======
  baseUrl: "https://hoanghuy1998.herokuapp.com",
  allproducts: "/allproduct/list",
  filter: "/allproduct/filter",
>>>>>>> 6b1ed7ca722dc8a58c75fe6099b8eae487a316c1
};
const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Tyle": "application/json",
    Accept: "application/json",
  },
});
instance.interceptors.request.use((request) => {
  console.log("da ket noi api");
  return request;
});
instance.interceptors.response.use(
  (response) => {
    setTimeout(() => {
      store.dispatch(hideLoading());
    }, 1000);
    store.dispatch(showLoading());
    return response;
  },
  (error) => {
    setTimeout(() => {
      store.dispatch(hideLoading());
    }, 1000);
    if (!error.response) {
      window.location.href = "/no-internet";
    } else {
      switch (error.response.status) {
        case 401:
          // window.location.href = "/login";
          break;
        case 403:
          window.location.href = "/no-perission";
          break;
        default:
          break;
      }
      return Promise.reject(error);
    }
  }
);
const api = {
  instance,
  url,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};
export default api;
