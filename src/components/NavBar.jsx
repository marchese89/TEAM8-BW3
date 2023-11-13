import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FormControl } from "react-bootstrap";
import img from "../img/LogoLinkedin.jpg";
import {
  HouseDoorFill,
  PeopleFill,
  ChatRightDotsFill,
  BellFill,
} from "react-bootstrap-icons";

function NavBar() {
  const FormConrolStyle = {
    maxWidth: "250px",
  };
  const iconTextStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "10px",
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="#home">
        <img src={img} alt="Logo Linkedin" width="30" height="30" />
      </Navbar.Brand>

      <FormControl
        type="search"
        placeholder="Cerca"
        className="serch"
        aria-label="Search"
        style={FormConrolStyle}
      />

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <div style={iconTextStyle}>
            <HouseDoorFill />
            <span>Home</span>
          </div>
          <div style={iconTextStyle}>
            <PeopleFill />
            <span>Rete</span>
          </div>
          <div style={iconTextStyle}>
            <i class="fas fa-suitcase"></i>
            <span>Lavoro</span>
          </div>
          <div style={iconTextStyle}>
            <ChatRightDotsFill />
            <span> Messagistica</span>
          </div>
          <div style={iconTextStyle}>
            <BellFill />
            <span>Notifiche</span>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
