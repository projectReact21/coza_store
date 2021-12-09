import api from "./api";
const getProduct = () => api.get(api.url.allproducts);
const getFillProduct = (search) =>
  api.get(`${api.url.filter}/?search=${search}`);
console.log(api.url.allproducts);
console.log(api.get(api.url.allproducts));
const productService = {
  getProduct,
  getFillProduct,
};
export default productService;
