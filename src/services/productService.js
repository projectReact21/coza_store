import api from "./api";
const getProduct = () => api.get(api.url.allproducts);
const getFillProduct = (search, start, end, sort, order) =>
  api.get(
    `${api.url.filter}?search=${search}&&start=${start}&&end=${end}&&sort=${sort}&&order=${order}`
  );
const getFullSearch = (search) => {
  api.get(`${api.url.fullSearch}?search=${search}`);
};
const productService = {
  getProduct,
  getFillProduct,
  getFullSearch,
};
export default productService;
