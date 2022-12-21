import httpService from "./http.service";

const create = (payload) => {
  return httpService.post("/bill/create", payload);
};
const getAllData = (payload) => {
  return httpService.get("/bill");
};
export default { create, getAllData };
