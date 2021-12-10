import api from "./api";

const getList = () => api.get(api.url.mycart);
const get = (id) => api.put(`${api.url.mycart}/${id}`);
const update = (id, data) => api.put(`${api.url.mycart}/${id}`, data);

const mycartService = {
  getList,
  update,
  get,
};
export default mycartService;
