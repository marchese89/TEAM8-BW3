import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./src/LogoLinkedin";
import { Form } from "react-router-dom";
import { Button, FormControl } from "react-bootstrap";
import { Icon } from "bootrap-icon";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo Linkedin" width="30" height="30" />
        </Navbar.Brand>

        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Cerca"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Cerca</Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">
                <i class="bi bi-house-door-fill"></i> Home
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <i class="bi bi-people-fill"></i>Rete
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <i class="bi bi-suitcase-lg"></i>Lavoro
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <i class="bi bi-chat-right-dots-fill"></i>Messagistica
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <i class="bi bi-bell-fill"></i>Notifiche
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
