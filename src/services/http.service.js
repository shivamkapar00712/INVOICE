import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://invoice-node.onrender.com";

function setJWT() {
  axios.defaults.headers.common["authorization"] =
    localStorage.getItem("invoice-token");
  axios.defaults.headers.common["Authorization"] =
    localStorage.getItem("invoice-token");

  //   axios.defaults.headers.common["Authorization"] = jwt;
  console.log(axios);
}
setJWT();
axios.interceptors.response.use(null, (err) => {
  const expectedError =
    err.response && err.response.status >= 400 && err.response.status < 500;
  console.log(expectedError);
  if (!expectedError) {
    toast.error("Unexpected error occured, please Try again");
  }
  return Promise.reject(err);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJWT,
};
