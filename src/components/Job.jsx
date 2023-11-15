import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const StyledCont = styled.div`
  a {
    text-decoration: none;
    color: #666666;
  }
`;

export default function Job({ data }) {
  return (
    <StyledCont>
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col xs={12}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
      </Row>
    </StyledCont>
  );
}
