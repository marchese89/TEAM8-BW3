import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form, FormControl } from "react-bootstrap";
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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CATEGORY,
  COMPANY,
  QUERY,
  myProfileAction,
  searchAction,
} from "../redux/actions";

const StyledDiv = styled.div`
  color: #666666;
  margin-top: 8em !important;

  .FormControlStyle {
    max-width: 290px;
    color: black;
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
  .select-search {
    width: 13em;
  }
  .brand:hover {
    cursor: pointer;
  }

  .profile-img {
    width: 30px;
    height: 30px;
  }
`;

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchType, setsearchType] = useState("QUERY");
  const [search, setSearch] = useState();
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(searchAction(searchType, search));
    }
  };

  const my_profileFromReduxStore = useSelector(
    (state) => state.profile.my_profile
  );

  return (
    <StyledDiv>
      <Navbar
        expand="lg"
        className="bg-body-tertiary justify-content-center position-fixed top-0 w-100 z-3"
      >
        <Navbar.Brand>
          <img
            src={imguno}
            alt="Logo Linkedin"
            width="35"
            height="35"
            style={{ marginLeft: "120px" }}
            onClick={() => {
              navigate("/");
            }}
            className="brand"
          />
        </Navbar.Brand>

        <FormControl
          type="search"
          placeholder="Cerca"
          className="FormControlStyle me-2"
          aria-label="Search"
          onKeyDown={handleKeyPress}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {location.pathname === "/jobs" && (
          <Form.Select
            className="select-search"
            onChange={(e) => {
              setsearchType(e.target.value);
            }}
            value={searchType}
          >
            <option value={QUERY}>Ricerca Semplice</option>
            <option value={COMPANY}>Azienda</option>
            <option value={CATEGORY}>Categoria</option>
          </Form.Select>
        )}
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

            <div
              className={
                location.pathname === "/rete"
                  ? "navItemStyle selected"
                  : "navItemStyle"
              }
              onClick={() => {
                navigate("/rete");
              }}
            >
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
              <span className="textStyle prof-img-cont d-flex flex-column align-items-center">
                <img
                  src={my_profileFromReduxStore.image}
                  alt="profile"
                  className="profile-img rounded-circle"
                  onClick={() => {
                    dispatch(myProfileAction());
                    navigate("/in/me");
                  }}
                />
                Tu
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
