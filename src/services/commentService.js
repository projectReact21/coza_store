import api from "./api";

const list = () => api.get(api.url.comment);
const add = (data) => api.post(api.url.comment, data);
const remove = (id) => api.delete(`${api.url.comment}/${id}`);

const commentService = {
  list,
  add,
  delete: remove,
};
export default commentService;
