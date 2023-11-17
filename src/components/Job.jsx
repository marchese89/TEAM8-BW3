import { Col, Row, Card, Container } from "react-bootstrap";
import styled from "styled-components";
import imgJob from "../assets/asbulla.jpg";

const StyledCont = styled.a`
  text-decoration: none;
  color: black;
  font-size: 0.8em;
`;
const StyledSpan = styled.p`
  color: #a2a2a2;
  margin-bottom: 0;
`;

const StyledP = styled.p`
  color: #7a8496;
  font-weight: bold;
  margin-left: 2%;
  font-size: 0.8em;
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
          <Card.Title>
            {" "}
            <StyledCont href={data.url} target="_blank" rel="noreferrer">
              {data.title}
            </StyledCont>
          </Card.Title>
          <Card.Text>
            <div className="d-flex align-items-center my-2">
              <StyledSpan className="">Company: </StyledSpan>
              <StyledP className="my-0"> {data.company_name}</StyledP>
            </div>
            <Card.Footer className="bg-transparent p-0 py-2 ">
              <p className="text-break d-flex m-0 align-items-center">
                <StyledSpan>Category:</StyledSpan>{" "}
                <StyledP className="my-0">{data.category}</StyledP>
              </p>
            </Card.Footer>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    // </StyledCont>
  );
}
