import api from "./api";

const getList = () => api.get(api.url.mycart);
const get = (id) => api.get(`${api.url.mycart}/${id}`);
const add = (data) => api.post(api.url.mycart, data);
const update = (id, data) => api.put(`${api.url.mycart}/${id}`, data);
const remove = (id) => api.delete(`${api.url.mycart}/${id}`);
const getListId = (id) => api.get(`${api.url.mycartid}/query?search=${id}`);
const mycartService = {
  add,
  getList,
  update,
  get,
  getListId,
  delete: remove,
};
export default mycartService;
