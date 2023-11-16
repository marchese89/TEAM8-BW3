import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { allProfilesAction } from "../redux/actions";
import User from "./User";
const RetePage = () => {
  // const dispatch = useDispatch();
  const usersFromRedux = useSelector((state) => state.profile.profiles);
  // const [profiles, setprofiles]=useState()

  // useEffect(() => {

  // }, []);

  return (
    <>
      <Container className="margin-auto">
        <Row className="justify-content-center d-flex w-100">
          {usersFromRedux.map((user) => {
            return (
              <Col key={user._id} xs={12} className="justify-content-center">
                <User user={user} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default RetePage;
