// import { Outlet } from "react-router-dom";
import Home from "../Home";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Home />
    </div>
  );
};

export default Layout;
