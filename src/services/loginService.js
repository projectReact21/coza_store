import api from "./api";
const login = (email, password) => {
  const data = { email: email, password: password };
  return api.post(api.url.login, data).then((res) => res.data);
};
const signup = (data) => api.post(api.url.signup, data);
const loginService = {
  login,
  signup,
};
export default loginService;
