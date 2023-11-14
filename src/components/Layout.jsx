import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Profile />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
