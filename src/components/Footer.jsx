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
  color: grey;
  .margine{
    margin-top: 8em
  }
`;

const Footer = () => {
  return (
    <StyledDiv>
      <footer className="footer-container d-flex justify-content-center margine ">
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
            <QuestionCircleFill className="mt-2 me-2 fs-5 text-dark" />
            <p>
              Domande? <br /> Visita il nostro Centro assistenza
            </p>
          </div>
          <div className="d-flex">
            <GearFill className="mt-2 me-2 fs-5 text-dark" />
            <p>
              Gestisci il tuo account e la tua privacy <br /> Vai alle
              impostazioni
            </p>
          </div>
          <div className="d-flex">
            <ShieldShaded className="mt-2 me-2 fs-5 text-dark" />
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
            <option value="2">Napoletano</option>
            <option value="3">Inglese</option>
            <option value="4">Francese</option>
            <option value="5">Russo</option>
            <option value="6">Spagnolo</option>
            <option value="7">Portoghese</option>
            <option value="8">Cinese</option>
          </Form.Select>
        </div>
      </footer>
    </StyledDiv>
  );
};

export default Footer;
