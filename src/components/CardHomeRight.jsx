import { Col } from "react-bootstrap";
import CardRight from "./CardRight";
import CardEvent from "./CardEventSide";
import styled from "styled-components";

const StyledCard = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CardLeft = () => {
  return (
    <Col className="d-none d-lg-flex flex-column">
      <CardRight />
      <CardEvent />
    </Col>
  );
};

export default CardLeft;
