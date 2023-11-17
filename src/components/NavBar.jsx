import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Container, Col, Form, FormControl } from "react-bootstrap";
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
  Search,
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
  margin-top: 5em !important;

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
  .search-text {
    text-indent: 25px;
    background-color: #edf3f8 !important;
    width: 13em;
    transition: width 0.3s linear;
    border-radius: 4px !important;
  }
  .search-text:focus {
    border: 2px solid #3c3d3e !important;
    box-shadow: none !important;
    width: 18em;
  }
  .search-text-alt {
    text-indent: 25px;
    background-color: #edf3f8 !important;
    border-radius: 4px !important;
  }
  .search-text-alt:focus {
    border: 2px solid #3c3d3e !important;
    box-shadow: none !important;
  }

  .search-icon {
    top: 0.7em;
    left: 0.7em;
    color: #3c3d3e;
  }
  .search-wrapper {
    margin-right: 5em;
    transition: margin-right 0.3s linear;
  }
  .search-wrapper-alt {
    margin-right: 0.6em;
  }
  .search-wrapper:focus-within {
    margin-right: 0;
  }
  .nav-bar {
    height: 4em;
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
      <Col className="mb-3" lg={12}>
        <Navbar
          expand="lg"
          // w-100
          // nav-bar
          className="bg-body-tertiary justify-content-end justify-content-md-start justify-content-lg-center position-fixed top-0 z-3 col-12 d-flex flex-nowrap"
        >
          <Navbar.Brand className="d-flex">
            <img
              src={imguno}
              alt="Logo Linkedin"
              width={30}
              height={30}
              // style={{ marginLeft: "120px" }}
              // className="mx-2"
              onClick={() => {
                navigate("/");
              }}
              className="brand mx-1 d-none d-lg-flex"
            />
            {/* <div className="d-flex flex-column justify-content-center mx-3">
                <Search
                  className="d-none d-sm-flex d-lg-none d-flex "
                  size={25}
                />
                <span className="textStyle">Cerca</span>
              </div> */}
          </Navbar.Brand>
          <div
            className={
              location.pathname !== "/jobs"
                ? "position-relative search-wrapper"
                : "position-relative search-wrapper-alt"
            }
          >
            <Search className="position-absolute search-icon d-none d-lg-flex" />

            <FormControl
              type="search"
              placeholder="Cerca"
              className={
                location.pathname !== "/jobs"
                  ? "FormControlStyle me-2 search-text d-none d-lg-flex"
                  : "FormControlStyle me-2 search-text-alt"
              }
              aria-label="Search"
              onKeyDown={handleKeyPress}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
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
            <Container fluid className="d-flex align-items-center">
              <img
                src={imguno}
                alt="Logo Linkedin"
                width={30}
                height={30}
                // style={{ marginLeft: "120px" }}
                // className="mx-2"
                onClick={() => {
                  navigate("/");
                }}
                className="mx-4 d-sm-flex d-lg-none"
              />
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

                <span className="textStyle d-none d-md-block">Home</span>
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

                <span className="textStyle d-none d-md-block">Rete</span>
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

                <span className="textStyle d-none d-md-block">Lavoro</span>
              </div>
              <div className="navItemStyle">
                <ChatRightDotsFill />

                <span className="textStyle d-none d-md-block">
                  Messagistica
                </span>
              </div>
              <div className="navItemStyle">
                <BellFill />

                <span className="textStyle d-none d-md-block">Notifiche</span>
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
                  <p className="textStyle d-none d-md-block m-0 ">Tu</p>
                </span>
              </div>
              <div className="d-none d-lg-flex">
                <div className="navItemStyle">
                  <Grid3x3GapFill />

                  <span className="textStyle d-none d-lg-block">
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
            </Container>
          </Nav>
        </Navbar>
      </Col>
    </StyledDiv>
  );
}

export default NavBar;
