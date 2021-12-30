import api from "./api";

const add = (data) => api.post(api.url.productSolded, data);
const getCheckout = (id) => {
  const data = id;
  return api.get(`/productSoldedQuery/?search=${data}`);
};

const productSolded = {
  add,
  getCheckout,
};
export default productSolded;
