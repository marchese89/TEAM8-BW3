import { Card, CardSubtitle, Col, Container, Row } from "react-bootstrap";

import "../StyledComponent/Side.css";
import ModalLanguage from "./ModalLenguageChange";
import CardLan from "./CardLanguage";
import SectionLearn from "./SectionLearn";
import styled from "styled-components";
const StyledSide = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const SidePart = () => {
  return (
    <StyledSide className={"mx-1"}>
      <Col className={"mx-4"}>
        <CardLan />
        <SectionLearn />
      </Col>
      <ModalLanguage />
    </StyledSide>
  );
};

export default SidePart;
