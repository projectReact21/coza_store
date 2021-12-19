import api from "./api";

const getList = () => api.get(api.url.blogs);
const get = (id) => api.get(`${api.url.blogs}/${id}`);

const blogService = {
  getList,
  get,
};
export default blogService;
