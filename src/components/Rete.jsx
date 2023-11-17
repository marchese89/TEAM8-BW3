import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { allProfilesAction } from "../redux/actions";
import styled from "styled-components";
import User from "./User";
const RetePage = () => {
  // const dispatch = useDispatch();
  const usersFromRedux = useSelector((state) => state.profile.profiles);
  // const [profiles, setprofiles]=useState()

  // useEffect(() => {

  // }, []);


  const ReteStyled = styled.div`

  margin-top: 120px;
  .containergeneric {
      border: 1px solid #dbdbdb;
      border-radius: 10px;
      padding: 2em;
      background-color: #fff;
}`

  return (
    <>
      <ReteStyled>
        <Container className="margin-auto containergeneric">
          <h3 className="mb-4">Profili</h3>
          <Row className="justify-content-center d-flex">
            {usersFromRedux.map((user) => {
              return (
                <Col key={user._id} xs={12} md={6} className="justify-content-center">
                  <User user={user} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </ReteStyled>
    </>
  );
};

export default RetePage;
