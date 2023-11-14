import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FormControl } from "react-bootstrap";
import imguno from "../img/LogoLinkedin.jpg";
import imgdue from "../img/icona-utente.jpg";
import styled from "styled-components";

import {
  HouseDoorFill,
  PeopleFill,
  ChatRightDotsFill,
  BellFill,
  Grid3x3GapFill,
  CaretDownFill,
  Search,
} from "react-bootstrap-icons";

function NavBar() {
  const FormConrolStyle = {
    maxWidth: "250px",
    color: "#EDF3F8",
    marginRight: "100px",
  };

  const navItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10px",
    marginRight: "35px",
  };
  const iconSize = "25px";

  const StyledDiv = styled.div`
    color: #666666;
    font-size: ${iconSize};

    &:hover {
      cursor: pointer !important;
      color: black !important;
    }
  `;

  const textStyle = {
    fontSize: "12px", // Imposta la dimensione del testo
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-center">
      <Navbar.Brand href="#home">
        <img
          src={imguno}
          alt="Logo Linkedin"
          width="35"
          height="35"
          style={{ marginLeft: "20px" }}
        />
      </Navbar.Brand>
      <FormControl
        type="search"
        placeholder="Cerca"
        className="serch"
        aria-label="Search"
        style={{ ...FormConrolStyle, backgroundColor: "#EDF3F8" }}
      />

      <Nav className="d-flex justify-content-center">
        <div className="d-flex">
          <div style={navItemStyle}>
            <StyledDiv>
              <HouseDoorFill />
            </StyledDiv>
            <span style={textStyle}>Home</span>
          </div>

          <div style={navItemStyle}>
            <StyledDiv>
              <PeopleFill />
            </StyledDiv>
            <span style={textStyle}>Rete</span>
          </div>
          <div style={navItemStyle}>
            <StyledDiv>
              <i className="fas fa-suitcase"></i>
            </StyledDiv>
            <span style={textStyle}>Lavoro</span>
          </div>
          <div style={navItemStyle}>
            <StyledDiv>
              <ChatRightDotsFill />
            </StyledDiv>

            <span style={textStyle}>Messagistica</span>
          </div>
          <div style={navItemStyle}>
            <StyledDiv>
              <BellFill />
            </StyledDiv>

            <span style={textStyle}>Notifiche</span>
          </div>
          <div style={navItemStyle}>
            <img src={imgdue} alt="Utente" width="30" height="30" />
            <span style={textStyle}>
              Tu <CaretDownFill />
            </span>
          </div>
          <div style={navItemStyle}>
            <StyledDiv>
              <Grid3x3GapFill />
            </StyledDiv>

            <span style={textStyle}>
              Per le aziende <CaretDownFill />
            </span>
          </div>
          <div style={navItemStyle}>
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
  );
}

export default NavBar;
