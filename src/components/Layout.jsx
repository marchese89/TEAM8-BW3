import { Outlet } from "react-router-dom";
// import Profile from "./Profile";
import NavBar from "./NavBar";
import Footer from "./Footer";
// import Experience from "./Experience";
import ExperienceToModify from "./ExperienceToModify";
// import ExperienceModal from "./ExperienceModal";

const Layout = () => {
  return (
    <>
      <NavBar />
      <ExperienceToModify />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
