import styled from "styled-components";
import {
  Button,
  Col,
  Container,
  FormControl,
  FormGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useState } from "react";
import React from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const StyledP = styled.p`
  font-size: 0.8em;
`;
const StyledDiv = styled.div`
  background: rgba(220, 241, 245, 0.24);
  border-bottom: 1px solid rgba(128, 128, 128, 0.37);
`;

const StyledButton = styled.button`
  :hover {
    background: rgba(0, 255, 255, 0.37);
  }
`;

const ModalLanguage = () => {
  const [show, setShow] = useState(true);
  const [secondCol, setSecondCol] = useState(false);
  const [selected, setSelected] = useState(true);
  const [showChange, setShowChange] = useState(false);
  const [lan, setLanSelected] = useState("");

  const option = [
    { value: "italiano", label: "Italiano" },
    { value: "ceco", label: "Ceco" },
    { value: "serbo", label: "Serbo" },
    { value: "inglese", label: "Inglese" },
  ];

  const showLan = () => {
    setShow(false);
    setSecondCol(true);
  };

  const hidePage = () => {
    setSelected(false);
    setShowChange(true);
  };

  const onLanSub = () => {
    setLanSelected("");
    setShowChange(false);
    setSelected(true);
  };

  return (
    <div
      className="modal fade"
      id="modalLarge"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="ModalTitle">
              Language Settings
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <StyledDiv className="modal-body d-flex">
            <Col xl={6} className={"d-flex align-items-center"}>
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/emoji/96/globe-with-meridians-emoji.png"
                alt="globe-with-meridians-emoji"
              />
              <StyledP className={"m-0 mx-1"}>
                Aggiungi più di una lingua al tuo profilo, così sarà più facile
                trovarti.
              </StyledP>
            </Col>
            <Col xl={6} className={"d-flex align-items-center mx-2"}>
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/nolan/64/glasses.png"
                alt="glasses"
              />
              <StyledP className={"m-0 mx-2"}>
                Se disponibile, mostreremo il tuo profilo nella lingua di chi lo
                visita. Se non c’è corrispondenza, verrà mostrato il tuo profilo
                predefinito.
              </StyledP>
            </Col>
          </StyledDiv>
          <Container className="modal-body">
            <h4 className={"mb-4"}>Language</h4>
            {show && (
              <Col className={"d-flex mb-3"}>
                <button
                  className={"btn rounded-pill border-dark py-1 px-3 mx-1"}
                >
                  Italiano
                </button>
                <button
                  className={"btn rounded-pill border-dark py-1 px-3 mx-1"}
                  id={"btnBlue"}
                  onClick={showLan}
                >
                  Add Language{" "}
                  <span>
                    <Plus />
                  </span>
                </button>
              </Col>
            )}
            {secondCol && (
              <Row className={"d-flex"}>
                {selected && (
                  <Col xl={6}>
                    <Select
                      options={option}
                      onChange={(e) => {
                        setLanSelected(e.value);
                        hidePage();
                      }}
                      aria-label="Default select example"
                    >
                      {option.map((op) => {
                        return <option value={op.value}>{op.label}</option>;
                      })}
                    </Select>
                  </Col>
                )}
                {showChange && (
                  <Modal.Body className={"col-12"}>
                    <h5 className={"fs-6"}>
                      Inizia a compilare il tuo profilo in {lan}
                    </h5>
                    <Col xl={12}>
                      <FormGroup className={"d-flex"}>
                        <FormControl placeholder={"name"} />
                        <FormControl placeholder={"Surname"} />
                      </FormGroup>
                      <div className={"mt-3"}>
                        <FormControl as={"textarea"} rows={3} />
                      </div>
                      <div className="d-flex mt-3">
                        <Button
                          type="button"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          onClick={onLanSub}
                          className="rounded-pill ms-auto mx-3 fw-bold"
                        >
                          Salva Modifiche
                        </Button>
                      </div>
                    </Col>
                  </Modal.Body>
                )}
              </Row>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ModalLanguage;
