import { Button, Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const StyledH4 = styled.h4`
  font-size: 0.8em;
`;

const StyledP = styled.p`
  font-size: 0.8em;
`;
const SectionLearn = () => {
  return (
    <Row className={"mt-2"}>
      <Card>
        <StyledH4 className={"mx-4 my-2"}> Learning </StyledH4>
        <div>
          <Col className={"m-2"}>
            <Card.Body className={"mx-2 d-flex p-0"}>
              <Card.Img className={"bg-primary"}></Card.Img>
              <StyledP className={"mx-2 my-0 pVid"}>
                Lorem ipsum sit dolor esque tempus fugit
              </StyledP>
            </Card.Body>
            <Card.Body className={"mx-2 mt-2 d-flex p-0 "}>
              <Card.Img className={"bg-primary"}></Card.Img>
              <StyledP className={"mx-2 my-0 pVid"}>
                Lorem ipsum sit dolor esque tempus fugit
              </StyledP>
            </Card.Body>
            <Card.Footer className={"mt-3 text-center bg-transparent"}>
              <Button
                className={
                  "rounded-pill p-0 px-2 py-1 bg-light text-primary border-primary"
                }
              >
                Scopri Di Più
              </Button>
            </Card.Footer>
          </Col>
        </div>
      </Card>
    </Row>
  );
};

export default SectionLearn;
