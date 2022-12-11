import httpService from "./http.service";
const tokenKey = "invoice-token";
const login = (email, password) => {
  return httpService.post("/user/login", { email, password });
};

const setToken = (token) => {
  return localStorage.setItem(tokenKey, token);
};

const getToken = (token) => {
  return localStorage.getItem(token);
};
export default {
  login,
  setToken,
  getToken,
};
