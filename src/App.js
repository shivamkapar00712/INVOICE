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

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/inventory" element={<InventoryList />} />
        <Route path="/bill/new" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
