import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const Layout = () => {
  return (
    <>
      <Profile />
      <Outlet />
    </>
  );
};

export default Layout;
