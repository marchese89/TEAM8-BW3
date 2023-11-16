import { Outlet } from "react-router-dom";
// import Profile from "./Profile";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allProfilesAction, myProfileAction } from "../redux/actions";
// import Experience from "./Experience";
// import ExperienceModal from "./ExperienceModal";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProfilesAction());
    dispatch(myProfileAction());
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
