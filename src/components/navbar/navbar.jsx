import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import userService from "../../services/user.service";

const NavBar = () => {
  const [toogle, setToggle] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const result = userService.getLogedUserDetails();
    // if (!result) window.location.href = "/login";
    // console.log(result);
    if (result) setUser({ ...result });
    else setUser(null);
  }, []);
  return (
    <div>
      <div className="hidden md:grid grid-cols-12 w-full bg-sky-800 shadow-md border-1 shadow-slate-400 text-white h-12 justify-center place-items-center">
        <div className="col-span-2">{user ? user.name : ""}</div>
        <div className="col-span-7 flex">
          <div className="flex flex-row space-x-12 justify-center">
            <p className="hover:text-green-400">Home</p>
            {user && (
              <NavLink to="/inventory" className="">
                Inventory
              </NavLink>
            )}
            {user && (
              <NavLink to="/bills" className="hover:text-green-400">
                Bills
              </NavLink>
            )}
            {user && (
              <NavLink to="/bill/new" className="hover:text-green-400">
                Bill Now
              </NavLink>
            )}
            {user && user.role === "Admin" && (
              <NavLink to="/register" className="hover:text-green-400">
                + Add User
              </NavLink>
            )}

            <input
              type="text"
              className="border-1  border-gray-400 rounded-lg pl-4 outline-none text-black text-sm"
              placeholder="search"
            />
          </div>
        </div>
        {user && (
          <div className="col-span-3 hover:text-sky-300">
            <ul className="flex flex-row space-x-8 justify-center">
              <Link to="/logout">Logout</Link>
            </ul>
          </div>
        )}
        {!user && (
          <div className="col-span-3 hover:text-sky-300">
            <ul className="flex flex-row space-x-8 justify-center">
              <Link to="/login">Login</Link>
            </ul>
          </div>
        )}
      </div>

      <div className="bg-slate-800 md:hidden  h-12 grid grid-cols-12 justify-center place-items-center">
        <div className="col-span-3 text-white">Logo</div>
        <div className="col-span-9 flex ">
          <div className="grid grid-cols-12">
            <input
              className="col-span-9 my-1  mx-5 border-2  border-sky-300 pl-2 rounded-lg  text-xs"
              type="text"
              placeholder="search"
            />
            <button
              className="col-span-3 p-2 text-white"
              onClick={() => {
                setToggle(!toogle);
              }}
            >
              =
            </button>
          </div>
        </div>
      </div>
      <div className={`${toogle ? "block" : "hidden"} w-full bg-blue-500 p-5`}>
        <ul className="flex flex-col text-center gap-2 ">
          <li className=" hover:text-white text-2xl">Hi Deepak!</li>
          <li className=" hover:text-white">Home</li>
          <li className="hover:text-white">Inventory</li>
          <li className="hover:text-white">Bill Now</li>
          <li className="hover:text-white">Add Users</li>
          <li className="hover:text-white">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
