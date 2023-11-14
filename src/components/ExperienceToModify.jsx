import { Plus } from "react-bootstrap-icons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import AddExperience from "./AddExperience";
import { useDispatch } from "react-redux";
import { allProfilesAction, myProfileAction } from "../redux/actions";

const StyledDiv = styled.div`
  font-size: 16px;
  border: 1px solid #eae8e5;
  padding: 0.5em;
  width: 22em;
  .icon {
    width: 1.3em;
    height: 1.3em;
    font-size: 1.4em;
    color: #5e5e5e;
    cursor: pointer;
    margin-top: 0;
  }
  .icon.fs-1 {
    border-radius: 50%;
  }
  .icon:hover {
    background-color: #ebebeb;
  }

  #pencil {
    border-radius: 50%;
    width: 2.2em;
    height: 2.2em;
    dispay: flex;
    justify-content: center;
    align-items: center;
  }
  .fa-pencil-alt.position-absolute {
    top: 0.5em;
    left: 0.6em;
  }
  #plus {
    right: 1em;
  }
  #qualifica {
    width: 10em;
  }
  .modal {
    width: 30em;
  }
  .drop-down {
    color: #666666;
    z-index: 4;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #eae8e5;
    right: 0.5em;
    top: 4em;
    & ul li:hover {
      background-color: #f3f3f3;
      cursor: pointer;
    }
    & ul li:nth-of-type(1) {
      padding: 0.5em;
      border-radius: 10px 10px 0 0;
    }
    & ul li:nth-of-type(2) {
      padding: 0.5em;
      border-radius: 0 0 10px 10px;
    }
    &ul {
      margin: 0;
      padding: 0;
    }
  }
`;

export default function ExperienceToModify() {
  const [show, setShow] = useState(false);
  const [showAddExperience, setShowAddExperience] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedDateStart, setSelectedDateStart] = useState(
    new Date().toISOString()
  );
  const [selectedDateEnd, setSelectedDateEnd] = useState(
    new Date().toISOString()
  );

  const handleDateStartChange = (event) => {
    setSelectedDateStart(event.target.value);
  };
  const handleDateEndChange = (event) => {
    setSelectedDateEnd(event.target.value);
  };
  const [showDrop, setshowDrop] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myProfileAction());
    // dispatch(allProfilesAction());
  });

  return (
    <>
      <StyledDiv className="d-flex flex-column rounded-3 text-black">
        <div className="d-flex justify-content-between position-relative">
          <h4>Esperienza</h4>
          <div id="buttons" className="d-flex flex-column">
            <Plus
              className="icon fs-1"
              id="plus"
              onClick={() => {
                setshowDrop(!showDrop);
              }}
            />
            <div className="icon position-relative" id="pencil">
              {/* <Pencil id="pencil" /> */}
              <i
                className="fas fa-pencil-alt position-absolute"
                onClick={handleShow}
              ></i>
            </div>
          </div>
          {showDrop && (
            <div className="drop-down position-absolute">
              <ul className="list-unstyled d-flex flex-column mb-0">
                <li
                  onClick={() => {
                    setshowDrop(false);
                    setShowAddExperience(true);
                  }}
                >
                  <i className="fas fa-suitcase"></i>&nbsp;&nbsp;Aggiungi
                  posizione lavorativa
                </li>
                <li>
                  <i className="fas fa-calendar-alt"></i>&nbsp;&nbsp;Aggiungi
                  pausa lavorativa
                </li>
              </ul>
            </div>
          )}
        </div>
        <Modal show={show} onHide={handleClose} className="modal">
          <Modal.Header closeButton>
            <Modal.Title className="fs-5 modal-title">
              Modifica esperienza
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="d-flex flex-column w-100">
              <Form.Label>Qualifica*</Form.Label>
            </InputGroup>
            <Form.Control></Form.Control>
            <InputGroup className="d-flex flex-column w-100">
              <Form.Label>Azienda</Form.Label>
            </InputGroup>
            <Form.Control></Form.Control>
            <InputGroup>
              <InputGroup className="d-flex flex-column w-100">
                <Form.Label>Data inizio</Form.Label>
              </InputGroup>
              <input
                type="date"
                id="dateStartInput"
                name="dateStartInput"
                value={selectedDateStart}
                onChange={handleDateStartChange}
                className="w-100"
              />
              <InputGroup className="d-flex flex-column w-100">
                <Form.Label>Data fine</Form.Label>
              </InputGroup>
              <input
                type="date"
                id="dateEndInput"
                name="dateEndInput"
                value={selectedDateEnd}
                onChange={handleDateEndChange}
                className="w-100"
              />
            </InputGroup>
            <InputGroup className="d-flex flex-column w-100">
              <Form.Label>Area</Form.Label>
            </InputGroup>
            <FormControl></FormControl>
            <InputGroup className="d-flex flex-column w-100">
              <Form.Label>Descrizione</Form.Label>
            </InputGroup>
            <FormControl as="textarea"></FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="save-button rounded-5 px-3"
              onClick={handleClose}
            >
              Salva
            </Button>
          </Modal.Footer>
        </Modal>
      </StyledDiv>
      {showAddExperience && (
        <AddExperience
          mostra={showAddExperience}
          set_mostra={setShowAddExperience}
        />
      )}
    </>
  );
}
