import api from "./api";
const getProduct = () => api.get(api.url.allproducts);

const getFillProduct = (search) =>
  api.get(`${api.url.filter}?search=${search}`);
const getFullSearch = (search) =>
  api.get(`${api.url.fullSearch}?search=${search}`);
const productService = {
  getProduct,
  getFillProduct,
  getFullSearch,
};
export default productService;
