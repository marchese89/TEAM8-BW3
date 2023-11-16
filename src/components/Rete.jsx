import { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { allProfilesAction } from "../redux/actions";

const RetePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProfilesAction());
  }, []);

  return (
    <Container>
      <Col>ciao</Col>
    </Container>
  );
};

export default RetePage;
