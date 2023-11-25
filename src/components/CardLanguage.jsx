import { Card, Container, Row } from "react-bootstrap";
import StyledH5 from "../StyledComponent/StyleSidePart";
import { Pen } from "react-bootstrap-icons";
import StyledCardSub from "../StyledComponent/StyledSub";

const CardLan = () => {
  return (
    <Row>
      <Card>
        <Card.Body>
          <Card.Text
            className={
              "d-flex justify-content-between align-items-center p-0 m-0"
            }
          >
            <StyledH5>Lingua</StyledH5>
            <Pen data-bs-toggle="modal" data-bs-target="#modalLarge" />
          </Card.Text>
          <StyledCardSub className={"m-0 p-0"}></StyledCardSub>
        </Card.Body>
        <hr className={"m-1"} />
        <Card.Body>
          <Card.Text
            className={
              "d-flex justify-content-between align-items-center py-0 px-0 mb-0"
            }
          >
            <StyledH5>Public Profile & URL</StyledH5>
            <Pen />
          </Card.Text>
          <Card.Link className={"py-0 text-decoration-none CardLink"}>
            www.linkedin.com/in/federico-poggi-ab4817272
          </Card.Link>
        </Card.Body>
      </Card>
    </Row>
  );
};
export default CardLan;
