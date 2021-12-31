import api from "./api";

const add = (data) => api.post(api.url.productSolded, data);
const getProdct = (id) => api.post(`${api.url.allproducts}/${id}`);
const getDescriptors = (id) =>
  api.get(`${api.url.productDescription}/filter?search=${id}`);
const getCheckout = (id) =>
  api.get(`${api.url.productSoldedQuery}/?search=${id}`);
const getCodeOrder = (search) => api.get(`${api.url.detail}?search=${search}`);
const remove = (id) => api.delete(`${api.url.productSolded}/${id}`);
const productSolded = {
  add,
  getProdct,
  getDescriptors,
  getCheckout,
  getCodeOrder,
  remove,
};
export default productSolded;
