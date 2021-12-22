import api from "./api";
const login = (email, password) => {
  const data = { email: email, password: password };
  return api.post(api.url.login, data).then((res) => res.data);
};
const getId = (id) => api.get(`${api.url.signup}/${id}`);
const signup = (data) => api.post(api.url.signup, data);
const putdata = (data, id) => api.put(`${api.url.signup}/${id}`, data);
const loginService = {
  login,
  signup,
  putdata,
  getId,
};
export default loginService;
