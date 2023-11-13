import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Profile />
      <Outlet />
    </>
  );
};

export default Layout;
