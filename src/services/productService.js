import api from "./api";
const getProduct = () => api.get(api.url.allproducts);
const getFillProduct = (search, sort, order, start, end) =>
  api.get(
    `${api.url.filter}?search=${search}&sort=${sort}&order=${order}&start=${start}&end=${end}`
  );
const getFullSearch = (search) =>
  api.get(`${api.url.fullSearch}?search=${search}`);
const getPaging = (page, perpage) =>
  api.get(`${api.url.getPaging}?page=${page}&perpage=${perpage}`);
const getPagingSearch = (search, page, perpage) =>
  api.get(
    `${api.url.getpagingAndSearch}?search=${search}&page=${page}&perpage=${perpage}`
  );
const productService = {
  getProduct,
  getFillProduct,
  getFullSearch,
  getPaging,
  getPagingSearch,
};
export default productService;
