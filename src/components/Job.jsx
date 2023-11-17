import { Col, Row, Card, Container } from "react-bootstrap";
import styled from "styled-components";
import imgJob from "../assets/asbulla.jpg";

const StyledCont = styled.a`
  text-decoration: none;
  color: #666666;
`;

export default function Job({ data }) {
  return (
    // <StyledCont>
    <Col className="col-3 mx-2 my-2">
      {/* <Card>
        <Card.Img src={imgJob} alt="logo" />

        <Col xs={12}>
          <StyledCont href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </StyledCont>
        </Col>
      </Card> */}

      <Card border="light" style={{ width: "18rem" }}>
        <Card.Img src={imgJob} alt="logo" />
        <Card.Body>
          <Card.Title>Light Card Title</Card.Title>
          <Card.Text>
            <StyledCont href={data.url} target="_blank" rel="noreferrer">
              {" "}
              {data.title}
            </StyledCont>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    // </StyledCont>
  );
}
