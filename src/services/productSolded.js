import api from "./api";

const add = (data) => api.post(api.url.productSolded, data);

const productSolded = {
  add,
};
export default productSolded;
