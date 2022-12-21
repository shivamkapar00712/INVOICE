import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import httpService from "../services/http.service";
import userService from "../services/user.service";
const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ email: "", password: "" });
  const handleSubmit = (e, state) => {
    e.preventDefault();
    userService
      .login(state.email, state.password)
      .then((result) => {
        const { data } = result;
        console.log(data.token);
        userService.setToken(data.token);
        httpService.setJWT(data.token);
        window.location.href = "/inventory";
        toast.success("Successfully Login");
      })
      .catch((err) => toast(err.response.data.message));
  };
  const handleChange = (e, state, setState) => {
    e.preventDefault();

    const { currentTarget: input } = e;
    const demo = { ...state };
    demo[input.name] = input.value;
    setState({ ...demo });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e, state)}>
      <div className="h-screen justify-center items-center  flex">
        <div className="h-96 w-72 md:w-96 border-3 rounded-lg shadow-slate-600 shadow-lg justify-center items-center flex flex-col">
          <h1 className="text-blue text-2xl mb-6">Login Details</h1>
          <input
            type="text"
            className="p-1 mt-2 w-4/5 md:w-3/5 text-sm border-2 outline-0 border-slate-200 rounded-md"
            placeholder="userid"
            name="email"
            value={state.email}
            onChange={(e) => handleChange(e, state, setState)}
          />
          <input
            type="password"
            className="p-1 mt-2 w-4/5 md:w-3/5 text-sm border-2 outline-0 border-slate-200 rounded-md"
            placeholder="userid"
            name="password"
            value={state.password}
            onChange={(e) => handleChange(e, state, setState)}
          />
          <button
            type="submit"
            className="text-white mt-2 hover:bg-green-600 bg-blue-600 border-2 rounded-md w-4/5 md:w-3/5 py-1"
          >
            Login
          </button>
          {/* <h4 className="text-blue-500 text-sm underline pointer-events-none">
            create account ?
          </h4> */}
        </div>
      </div>
    </form>
  );
};

export default Login;
