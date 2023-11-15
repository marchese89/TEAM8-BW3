import { Outlet } from "react-router-dom";
// import Profile from "./Profile";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";
// import Experience from "./Experience";
// import ExperienceModal from "./ExperienceModal";

const StyledLayout = styled.div`
  .cont {
    margin-top: 6em;
    margin-bottom: 2em;
  }
`;

const Layout = () => {
  return (
    <>
      <NavBar />
      <StyledLayout>
        <Outlet />
      </StyledLayout>
      <Footer />
    </>
  );
};

export default Layout;
