import api from "./api";
const login = (email, password) => {
  const data = { email: email, password: password };
  return api.post(api.url.login, data).then((res) => res.data);
};
const getId = (id) => api.get(`${api.url.signup}/${id}`);
const signup = (data) => {
  const formData = new FormData();
  for (const key in data) formData.append(key, data[key]);
  return api.post(api.url.signup, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const putdata = (data, id) => api.put(`${api.url.signup}/${id}`, data);
const getUser = (id) => api.get(`${api.url.user}/${id}`);
const loginService = {
  login,
  signup,
  putdata,
  getId,
  getUser,
};
export default loginService;
