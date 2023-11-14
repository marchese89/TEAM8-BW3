import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FormControl } from "react-bootstrap";
import imguno from "../img/LogoLinkedin.jpg";
import imgdue from "../img/icona-utente.jpg";
import React, { useState } from "react";

import {
  HouseDoorFill,
  PeopleFill,
  ChatRightDotsFill,
  BellFill,
  Grid3x3GapFill,
  CaretDownFill,
} from "react-bootstrap-icons";

function NavBar() {
  const FormConrolStyle = {
    maxWidth: "150px",
  };

  const navItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10px",
    marginRight: "20px",
  };
  const [isHovered, setIsHovered] = useState(false);

  const iconStyle = {
    fontSize: "20px", // Imposta la dimensione delle icone
    color: isHovered ? "black" : "gray", //Cambio colore
  };

  const textStyle = {
    fontSize: "15px", // Imposta la dimensione del testo
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-center">
      <Navbar.Brand href="#home">
        <img
          src={imguno}
          alt="Logo Linkedin"
          width="30"
          height="30"
          style={{ marginLeft: "20px" }}
        />
      </Navbar.Brand>

      <FormControl
        type="search"
        placeholder="Cerca"
        className="serch"
        aria-label="Search"
        style={FormConrolStyle}
      />

      <Nav className="me-auto">
        <div className="d-flex">
          <div style={navItemStyle}>
            <HouseDoorFill
              style={iconStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <span style={textStyle}>Home</span>
          </div>
          <div style={navItemStyle}>
            <PeopleFill
              style={iconStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <span style={textStyle}>Rete</span>
          </div>
          <div style={navItemStyle}>
            <i
              className="fas fa-suitcase"
              style={{ ...iconStyle, fontSize: "20px" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            ></i>
            <span style={textStyle}>Lavoro</span>
          </div>
          <div
            style={navItemStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ChatRightDotsFill style={iconStyle} />
            <span style={textStyle}>Messagistica</span>
          </div>
          <div
            style={navItemStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <BellFill style={iconStyle} />
            <span style={textStyle}>Notifiche</span>
          </div>
          <div
            style={navItemStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={imgdue} alt="Utente" width="28" height="28" />
            <span style={textStyle}>
              Tu <CaretDownFill />
            </span>
          </div>
          <div style={navItemStyle}>
            <Grid3x3GapFill
              style={iconStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <span style={textStyle}>
              Per le aziende <CaretDownFill />
            </span>
          </div>
          <div
            style={navItemStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span style={textStyle}>
              Prova Premium per <br />0 EUR{" "}
            </span>
          </div>
        </div>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
