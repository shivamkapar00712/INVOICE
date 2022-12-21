import httpService from "./http.service";
import jwtDecode from "jwt-decode";
const tokenKey = "invoice-token";
const login = (email, password) => {
  return httpService.post("/user/login", { email, password });
};
const register = (payload) => {
  return httpService.post("/user/register", payload);
};

const getLogedUserDetails = () => {
  const token = localStorage.getItem(tokenKey);
  if (!token) {
    return false;
  }
  const decode = jwtDecode(token);
  console.log(decode);
  return decode;
};
const setToken = (token) => {
  return localStorage.setItem(tokenKey, token);
};

const getToken = (token) => {
  return localStorage.getItem(tokenKey);
};
const removeToken = () => {
  return localStorage.removeItem(tokenKey);
};
export default {
  login,
  setToken,
  getToken,
  removeToken,
  getLogedUserDetails,
  register,
};
