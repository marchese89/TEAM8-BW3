import { Outlet } from "react-router-dom";
import Profile from "./Profile";
// import Home from "./Home";

const Layout = () => {
  return (
    <>
      <Profile />
      <Outlet />
    </>
  );
};

export default Layout;
