import api from "./api";

const list = () => api.get(api.url.comment);
const add = (data) => api.post(api.url.comment, data);
const remove = (id) => api.delete(`${api.url.comment}/${id}`);
const getListCmt = (id) => api.get(`${api.url.comment}/filter?search=${id}`);

const commentService = {
  list,
  add,
  delete: remove,
  getListCmt,
};
export default commentService;
