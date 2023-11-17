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
      <Container className="">
        <Row className="justify-content-center d-flex w-100">
          {usersFromRedux.map((user) => {
            return (
              <>
                <Col xs={3}></Col>
                <Col
                  key={user._id}
                  xs={6}
                  className="justify-content-center  mx-auto"
                >
                  <User user={user} />
                </Col>
                <Col xs={3}></Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default RetePage;
