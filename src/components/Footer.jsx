import React from "react";
import {
  CaretDownFill,
  QuestionCircleFill,
  GearFill,
  ShieldShaded,
} from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-size: 14px;
`;

const Footer = () => {
  return (
    <StyledDiv>
      <footer className="footer-container d-flex justify-content-center ">
        <div className="footer-content ">
          <p>Informazioni</p>
          <p>LInee guida della community</p>
          <p>
            Privacy e condizioni <CaretDownFill />
          </p>
          <p>Sales Solution</p>
          <p>Centro sicurezza</p>

          <p>Linkedin Corporation &copy; 2023 </p>
        </div>
        <div className="footer-content ms-4">
          <p>Accessibilità</p>
          <p>Carriera</p>
          <p>
            Opzione per gli annunci <br />
            pubblicitari
          </p>
          <p>Mobile</p>
        </div>
        <div className="footer-content ms-4">
          <p>Talent Solution</p>
          <p>Soluzioni di marketing</p>
          <p>Pubblicità</p>
          <p>Piccole imprese</p>
        </div>
        <div className="footer-content ms-4">
          <div className="d-flex">
            <QuestionCircleFill className="mt-2 me-2 fs-5" />
            <p>
              Domande? <br /> Visita il nostro Centro assistenza
            </p>
          </div>
          <div className="d-flex">
            <GearFill className="mt-2 me-2 fs-5" />
            <p>
              Gestisci il tuo account e la tua privacy <br /> Vai alle
              impostazioni
            </p>
          </div>
          <div className="d-flex">
            <ShieldShaded className="mt-2 me-2 fs-5" />
            <p>
              Trasparenza sui contenuti consigliati <br /> Scopri di più sui
              contenuti consigliati
            </p>
          </div>
        </div>
        <div className="footer-content ms-4">
          <p>Seleziona lingua</p>

          <Form.Select aria-label="Default select example">
            <option>Italiano (Italiano)</option>
            <option value="1">Italiano</option>
            <option value="2">Inglese</option>
            <option value="3">Francese</option>
            <option value="3">Russo</option>
            <option value="3">Spagnolo</option>
            <option value="3">Portoghese</option>
            <option value="3">Cinese</option>
          </Form.Select>
        </div>
      </footer>
    </StyledDiv>
  );
};

export default Footer;
