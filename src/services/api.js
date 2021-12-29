import axios from "axios";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import store from "./../stores/index";
const url = {
  // baseUrl: "https://hoanghuy1998.herokuapp.com",
  baseUrl: "http://localhost:5000",
  allproducts: "/allproduct/list",
  filter: "/allproduct/filter",
  filterQuery: "/allproduct/filterQuery",
  filterSortQuery: "/allproduct/filterSortQuery",
  fullSearch: "/allproduct/fullSearch",
  fullSearchQuery: "/allproduct/fullSearchQuery",
  mycart: "/mycartproduct/list",
  mycartid: "/mycartproduct",
  login: "/login",
  signup: "/user",
  getPaging: "/allproduct/get-paging",
  getpagingAndSearch: "/allproduct/searchAndGet-paging",
  blogs: "/blogs",
  blogsgetpaging: "/blogs/get-paging",
  comment: "/comment",
  productSolded: "/productSolded",
  user: "/user",
};
const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
instance.interceptors.request.use((request) => {
  // console.log("da ket noi api");
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
  promise: axios.all,
  spreads: axios.spreads,
};
export default api;
