import { useState } from "react";
import { toast } from "react-toastify";
import userService from "../../services/user.service";

const RegisterUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    mobile: "",
    gst: "",
    state: "",
    address: "",
    password: "",
  });
  const handleSubmit = (e, state) => {
    e.preventDefault();
    console.log(state);
    userService
      .register({ ...state })
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.error(err.response.data.message));
  };
  const handleChange = (e, state, setState) => {
    let { name, value } = e.target;
    const demostate = { ...state };
    demostate[name] = value;
    setState({ ...demostate });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e, state)}>
      <div className="h-screen justify-center items-center  flex">
        <div className="h-96 w-72 md:w-96 border-3 rounded-lg shadow-slate-600 shadow-lg justify-center items-center flex flex-col">
          <h1 className="text-blue text-2xl mb-6">Register User</h1>
          <input
            type="text"
            className="p-1 mt-2 w-4/5 md:w-3/5 text-sm border-2 outline-0 border-slate-200 rounded-md"
            placeholder="Company Name"
            name="name"
            value={state.name}
            onChange={(e) => handleChange(e, state, setState)}
          />
          <input
            type="text"
            className="p-1 mt-2 w-4/5 md:w-3/5 text-sm border-2 outline-0 border-slate-200 rounded-md"
            placeholder="Company GST Number"
            name="gst"
            value={state.gst}
            onChange={(e) => handleChange(e, state, setState)}
          />

          <input
            type="email"
            className="p-1 mt-2 w-4/5 md:w-3/5 text-sm border-2 outline-0 border-slate-200 rounded-md"
            placeholder="Email Id"
            name="email"
            value={state.email}
            onChange={(e) => handleChange(e, state, setState)}
          />
          <input
            type="text"
            className="p-1 mt-2 w-4/5 md:w-3/5 text-sm border-2 outline-0 border-slate-200 rounded-md"
            placeholder="Mobile Number"
            name="mobile"
            value={state.mobile}
            onChange={(e) => handleChange(e, state, setState)}
          />

          <input
            type="text"
            className="p-1 mt-2 w-4/5 md:w-3/5 text-sm border-2 outline-0 border-slate-200 rounded-md"
            placeholder="User Id"
            name="address"
            value={state.address}
            onChange={(e) => handleChange(e, state, setState)}
          />
          <input
            type="text"
            className="p-1 mt-2 w-4/5 md:w-3/5 text-sm border-2 outline-0 border-slate-200 rounded-md"
            placeholder="state"
            name="state"
            value={state.state}
            onChange={(e) => handleChange(e, state, setState)}
          />
          <input
            type="password"
            className="p-1 mt-2 w-4/5 md:w-3/5 text-sm border-2 outline-0 border-slate-200 rounded-md"
            placeholder="Password"
            name="password"
            value={state.password}
            onChange={(e) => handleChange(e, state, setState)}
          />
          <button
            type="submit"
            className="text-white mt-2 hover:bg-red-600 bg-blue-600 border-2 rounded-md w-4/5 md:w-3/5 py-1"
          >
            + Add User
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterUser;
