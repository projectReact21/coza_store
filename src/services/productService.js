import api from "./api";
const getProduct = () => api.get(api.url.allproducts);
console.log(api.url.allproducts);
console.log(api.get(api.url.allproducts));
const productService = {
  getProduct,
};
export default productService;
