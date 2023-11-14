import React from "react";
import {
  CaretDownFill,
  QuestionCircleFill,
  GearFill,
  ShieldShaded,
} from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";

const Footer = () => {
  return (
    <footer className="footer-container d-flex ms-2 ">
      <div className="footer-content ms-2">
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
        <p>Opzione per gli annunci pubblicitari</p>
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
          <QuestionCircleFill className="mt-2 me-2" />
          <p>
            Domande? <br /> Visita il nostro Centro assistenza
          </p>
        </div>
        <div className="d-flex">
          <GearFill className="mt-2 me-2" />
          <p>
            Gestisci il tuo account e la tua privacy <br /> Vai alle
            impostazioni
          </p>
        </div>
        <div className="d-flex">
          <ShieldShaded className="mt-2 me-2" />
          <p>
            Trasparenza sui contenuti consigliati <br /> Scopri di più sui
            contenuti consigliati
          </p>
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
      </div>
    </footer>
  );
};

export default Footer;
