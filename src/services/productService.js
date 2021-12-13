import api from "./api";
const getProduct = () => api.get(api.url.allproducts);
<<<<<<< HEAD
const getFillProduct = search =>api.get(`${api.url.filter}?search=${search}`);
const getFullSearch = search => api.get(`${api.url.fullSearch}?search=${search}`);
=======
const getFillProduct = search =>
  api.get(
    `${api.url.filter}?search=${search}`
  );
const getFullSearch = (search) => {
  api.get(`${api.url.fullSearch}?search=${search}`);
};
>>>>>>> 7fafd84d9692afce84bfff14854c43c76f2a149a
const productService = {
  getProduct,
  getFillProduct,
  getFullSearch,
};
export default productService;
