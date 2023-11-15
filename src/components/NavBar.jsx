import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FormControl } from "react-bootstrap";
import imguno from "../img/LogoLinkedin.jpg";
import imgdue from "../img/icona-utente.jpg";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import {
  HouseDoorFill,
  PeopleFill,
  ChatRightDotsFill,
  BellFill,
  Grid3x3GapFill,
  CaretDownFill,
} from "react-bootstrap-icons";

const StyledDiv = styled.div`
  color: #666666;
  margin-top:8em !important;

  .FormControlStyle {
    max-width: 290px;
    color: #edf3f8;
    background-color: #edf3f8;
  }

  .navItemStyle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-right: 35px;
    cursor: pointer;
    font-size: 25px;
  }

  .navItemStyle:hover {
    color: black;
    border-bottom: 2px solid black;
  }

  .selected {
    color: black;
    border-bottom: 2px solid black;
  }
  .textStyle {
    font-size: 11px;
  }
`;

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <StyledDiv>
      <Navbar
        expand="lg"
        className="bg-body-tertiary justify-content-center position-fixed top-0 w-100 z-3"
      >
        <Navbar.Brand href="#home">
          <img
            src={imguno}
            alt="Logo Linkedin"
            width="35"
            height="35"
            style={{ marginLeft: "120px" }}
          />
        </Navbar.Brand>
        <FormControl
          type="search"
          placeholder="Cerca"
          className="FormControlStyle"
          aria-label="Search"
          style={{ backgroundColor: "#EDF3F8", marginRight: "100px" }}
        />

        <Nav className="d-flex justify-content-center">
          <div className="d-flex">
            <div
              className={
                location.pathname === "/"
                  ? "navItemStyle selected"
                  : "navItemStyle"
              }
            >
              <HouseDoorFill
                onClick={() => {
                  navigate("/");
                }}
              />

              <span className="textStyle">Home</span>
            </div>

            <div className="navItemStyle">
              <PeopleFill />

              <span className="textStyle">Rete</span>
            </div>
            <div
              className={
                location.pathname === "/jobs"
                  ? "navItemStyle selected"
                  : "navItemStyle"
              }
              onClick={() => {
                navigate("/jobs");
              }}
            >
              <i className="fas fa-suitcase"></i>

              <span className="textStyle">Lavoro</span>
            </div>
            <div className="navItemStyle">
              <ChatRightDotsFill />

              <span className="textStyle">Messagistica</span>
            </div>
            <div className="navItemStyle">
              <BellFill />

              <span className="textStyle">Notifiche</span>
            </div>
            <div
              className={
                location.pathname === "/in/me"
                  ? "navItemStyle selected"
                  : "navItemStyle"
              }
            >
              <img
                src={imgdue}
                alt="Utente"
                width="28"
                height="28"
                onClick={() => {
                  navigate("/in/me");
                }}
              />
              <span className="textStyle">
                Tu <CaretDownFill />
              </span>
            </div>
            <div className="navItemStyle">
              <Grid3x3GapFill />

              <span className="textStyle">
                Per le aziende <CaretDownFill />
              </span>
            </div>
            <div className="navItemStyle">
              <span
                style={{
                  color: "#915907",
                  fontSize: "12px",
                  textDecoration: "underline",
                }}
              >
                Prova Premium per <br />0 EUR{" "}
              </span>
            </div>
          </div>
        </Nav>
      </Navbar>
    </StyledDiv>
  );
}

export default NavBar;
