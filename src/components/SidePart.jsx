import { Card, CardSubtitle, Col, Container, Row } from "react-bootstrap";
// import StyledH5 from "../StyledComponent/StyleSidePart";
// import {Pen} from 'react-bootstrap-icons'
// import StyledCardSub from "../StyledComponent/StyledSub";
import "../StyledComponent/Side.css";
import ModalLanguage from "./ModalLenguageChange";
import CardLan from "./CardLanguage";
// import Learn from "./Learn";
import SectionLearn from "./SectionLearn";
import styled from "styled-components";
import Experience from "./Experience";

const StyledSide = styled.div`
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const SidePart = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMTY3N2M1NWU3ZTAwMThmODNjMmUiLCJpYXQiOjE2OTk4Nzg1MjEsImV4cCI6MTcwMTA4ODEyMX0.OUjIWiA8Coq8XIN7HBfmcox3tAoSACAyfSlyL2cR9ow";

  return (
    <StyledSide className={"mx-1"}>
      <Col xl={8} lg={8} md={12} className={"mx-4"}>
        <CardLan />
        <SectionLearn />
        <Experience />
      </Col>

      <ModalLanguage />
    </StyledSide>
  );
};

export default SidePart;
