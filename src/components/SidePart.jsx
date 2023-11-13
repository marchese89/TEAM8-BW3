import { Col, Container, Row } from "react-bootstrap";

const SidePart = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMTY3N2M1NWU3ZTAwMThmODNjMmUiLCJpYXQiOjE2OTk4Nzg1MjEsImV4cCI6MTcwMTA4ODEyMX0.OUjIWiA8Coq8XIN7HBfmcox3tAoSACAyfSlyL2cR9ow";

  return (
    <div>
      <Container>
        <Row>
          <Col>Lingua</Col>
        </Row>
        <Row>Impostazioni profilo</Row>
      </Container>
    </div>
  );
};

export default SidePart;
