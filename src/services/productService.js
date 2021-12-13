import api from "./api";
const getProduct = () => api.get(api.url.allproducts);
<<<<<<< HEAD
const getFillProduct = (search) =>
  api.get(`${api.url.filter}?search=${search}`);
const getFullSearch = (search) => {
  api.get(`${api.url.fullSearch}?search=${search}`);
};
=======
const getFillProduct = search =>api.get(`${api.url.filter}?search=${search}`);
const getFullSearch = search => api.get(`${api.url.fullSearch}?search=${search}`);
>>>>>>> 82ebb7cf5f3453ac97c07742d7e1e45a7df39899
const productService = {
  getProduct,
  getFillProduct,
  getFullSearch,
};
export default productService;
