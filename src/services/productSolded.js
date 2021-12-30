import api from "./api";

const add = (data) => api.post(api.url.productSolded, data);
const getProdct = (id) => api.post(`${api.url.allproducts}/${id}`);
const getDescriptors = (id) =>
  api.get(`${api.url.productDescription}/filter?search=${id}`);
const getCheckout = (id) =>
  api.get(`${api.url.productSoldedQuery}/?search=${id}`);

const productSolded = {
  add,
  getProdct,
  getDescriptors,
  getCheckout,
};
export default productSolded;
