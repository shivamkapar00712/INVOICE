import httpService from "./http.service";
import jwtDecode from "jwt-decode";

const create = (payload) => {
  return httpService.post("/inventory/create", payload);
};
const getAllData = (payload) => {
  return httpService.get("/inventory");
};
export default { create, getAllData };
