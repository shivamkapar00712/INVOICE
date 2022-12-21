import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import userService from "../../services/user.service";

const Logout = () => {
  //   const navigate = useNavigate();
  localStorage.removeItem("invoice-token");
  const token = userService.getToken();
  console.log(token);
  if (!token) {
    window.location.href = "/login";
    toast.success("Successfully Sign out");
  } else {
    window.location.href = "/logout";
    userService.removeToken();
  }

  return null;
};

export default Logout;
