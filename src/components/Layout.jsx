import { Outlet, useLocation, useParams } from "react-router-dom";
// import Profile from "./Profile";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allProfilesAction, myProfileAction } from "../redux/actions";
// import Experience from "./Experience";
// import ExperienceModal from "./ExperienceModal";

const StyledLayout = styled.div`
  .cont {
    margin-top: 6em;
    margin-bottom: 2em;
  }
`;

const Layout = () => {
  const dispatch = useDispatch();
  const { idProfile } = useParams();
  useEffect(() => {
    dispatch(allProfilesAction());
    if (idProfile === undefined) {
      // dispatch(myProfileAction());
    }
  }, []);

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
