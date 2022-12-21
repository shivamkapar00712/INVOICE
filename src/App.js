import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import LoginForm from "./components/Login/login";
import Inventory from "./components/Inventory/Inventory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import InventoryList from "./components/Inventory/InventoryList";
import Logout from "./components/Login/logout";
import RegisterUser from "./components/register/registerUser";
import BillTable from "./components/bills/bill";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <ToastContainer />
      <div className="h-screen bg-slate-200">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/bills" element={<BillTable />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/bill/new" element={<Form />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
