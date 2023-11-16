import { Card, Row } from "react-bootstrap";
import styled from "styled-components";

const StyledLi = styled.div`
  .liIt {
    padding-top: 5%;
  }
  .liIt:hover {
    background: rgba(161, 160, 160, 0.39);
    cursor: pointer;
  }
`;

const NewsCard = () => {
  return (
    <Card className="mb-2 d-none d-lg-flex">
      <Card.Body>
        <ul>
          <StyledLi>
            <li className="liIt">L'industria europea sta adottando il 5G</li>
            <li className="liIt">I Top MBA negli USA per la tua carriera</li>
            <li className="liIt">Effetto ATP Finals per Torino</li>
            <li className="liIt">L'immobiliare è sempre più tech</li>
            <li className="liIt">Manuale di critica costruttiva</li>
          </StyledLi>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
