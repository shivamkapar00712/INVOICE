import { useState } from "react";

const LoginForm = () => {
  return (
    <form className=" w-full h-full bg-slate-200">
      <div className="text-red-300 text-4xl text-center">Login</div>
      <div className="w-full flex justify-content-center align-items-center">
        <div className="w-full">
          <input type="text" className="w-[70%] m-4 " placeholder="Email" />
          <input type="password" className="w-[70%]  m-4" placeholder="Email" />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-600 rounded-[2rem] w-32 text-[#ffffff]"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
