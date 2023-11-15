import { Col } from "react-bootstrap";
import CardRight from "./CardRight";
import CardEvent from "./CardEventSide";

const CardLeft = () => {
  return (
    <Col xl={2} className={"mx-3 px-2"}>
      <CardRight />
      <CardEvent />
    </Col>
  );
};

export default CardLeft;
