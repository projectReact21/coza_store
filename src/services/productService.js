import api from "./api";
const getProduct = () => api.get(api.url.allproducts);
const getFillProduct = (search,sort,order,start,end) =>api.get(`${api.url.filter}?search=${search}&sort=${sort}&order=${order}&start=${start}&end=${end}`);
const getFullSearch = search => api.get(`${api.url.fullSearch}?search=${search}`);
const productService = {
  getProduct,
  getFillProduct,
  getFullSearch,
};
export default productService;
