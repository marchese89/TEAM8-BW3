import { Outlet } from "react-router-dom";
// import Profile from "./Profile";
// import Experience from "./Experience";
import ExperienceToModify from "./ExperienceToModify";
import ExperienceModal from "./ExperienceModal";

const Layout = () => {
  return (
    <>
      <ExperienceToModify />
      <ExperienceModal />
      <Outlet />
    </>
  );
};

export default Layout;
