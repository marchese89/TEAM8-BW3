import { useNavigate } from "react-router";
import styled from "styled-components";
import { userProfileAction } from "../redux/actions";
import { useDispatch } from "react-redux";
import {
  Card,
  CardGroup,
  CardImgOverlay,
  Col,
  NavDropdown,
} from "react-bootstrap";

import linkedin from "../assets/LinkImg.PNG";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
const StyledUser = styled.div`
  ${
    "" /* display: flex;
  aling-items: center;
  height: 10em;
  border: 1px solid #66666;
  border-radius: 20px;
  margin-bottom: 20px;
  background-color: white;
  padding: 3px;
  .img {
    width: 35px;
    height: 35px;
    border-radius: 20px;
    margin: 10px;
  }
  span:hover {
    cursor: pointer;
  }
  .name {
    font-size: 18px;
    margin-top: 5px;
    font-weight: bold;
  } */
  }
`;

// const StyledCard=styled.div`

// `

function User({ user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const area = user.area;
  const job = user.title;
  const mail = user.email;
  const name = user.name;
  console.log(area);

  return (
    <>
      {name ? (
        <Col className="col-2">
          <Card className="position-relative">
            <CardImgOverlay className="z-0 overflow-hidden p-0">
              <Card.Img src={linkedin} alt="img" variant="top" />
            </CardImgOverlay>

            <Card.Body className="z-0">
              <div className="d-flex align-items-center">
                <img
                  src={user.image}
                  alt="img-prof"
                  className="m-3 rounded-5"
                  width={60}
                  height={60}
                />
                {mail ? (
                  <NavDropdown className="ms-auto">
                    <NavDropdown.Item className="h6 m-0 px-2">
                      {user.email}
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : null}
              </div>
              <span
                onClick={() => {
                  dispatch(userProfileAction(user._id));
                  navigate("/profile/" + user._id);
                }}
              >
                <p className="name">
                  {user.name} {user.surname}{" "}
                </p>
                {/* <p className="ema">Email: {user.email}</p> */}

                {/* <p>Posizione: {user.area}</p> */}
                {area ? <p>Posizione: {area}</p> : null}
                {job ? <p>Lavoro: {user.title}</p> : null}
              </span>
            </Card.Body>
          </Card>
        </Col>
      ) : null}
    </>
  );
}

export default User;
