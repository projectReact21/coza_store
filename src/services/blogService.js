import api from "./api";

const getList = () => api.get(api.url.blogs);
const get = (id) => api.get(`${api.url.blogs}/${id}`);
const getpaging = (page, perpage) =>
  api.get(`${api.url.blogsgetpaging}?page=${page}&perpage=${perpage}`);

const blogService = {
  getList,
  get,
  getpaging,
};
export default blogService;
