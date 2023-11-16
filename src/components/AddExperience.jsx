import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { experienceListAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { token } from "../redux/actions";

export default function AddExperience({ mostra, set_mostra }) {
  const [experience_role, setExperienceRole] = useState("");
  const [experience_company, setExperienceCompany] = useState("");
  const [experience_startDate, setExperienceStartDate] = useState("");
  const [experience_endDate, setExperienceEndDate] = useState("");
  const [experience_description, setExperienceDescription] = useState("");
  const [experience_area, setExperienceArea] = useState("");

  //   const [show, setShow] = useState(true);
  const my_profileFromReduxStore = useSelector(
    (state) => state.profile.my_profile
  );

  const dispatch = useDispatch();

  const handleClose = () => {
    set_mostra(false);
  };
  const saveExperience = async () => {
    set_mostra(false);
    addExperienceAction(my_profileFromReduxStore._id, {
      role: experience_role,
      company: experience_company,
      startDate: experience_startDate,
      endDate: experience_endDate, // può essere null
      description: experience_description,
      area: experience_area,
    });
  };

  async function addExperienceAction(userId, exp) {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        userId +
        "/experiences",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exp),
      }
    )
      .then((response) => {
        if (response.ok) {
          dispatch(experienceListAction(my_profileFromReduxStore._id));
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .catch((err) => console.log("ERRORE!", err));
  }

  return (
    <Modal show={mostra} onHide={handleClose} className="modal">
      <Modal.Header closeButton>
        <Modal.Title className="fs-5 modal-title">
          Aggiungi esperienza
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="d-flex flex-column w-100">
          <Form.Label className="fs-7">
            * Indica che il campo è obbligatorio
          </Form.Label>
        </InputGroup>
        <InputGroup className="d-flex flex-column w-100">
          <Form.Label>Qualifica*</Form.Label>
        </InputGroup>
        <Form.Control
          required
          value={experience_role}
          onChange={(e) => {
            setExperienceRole(e.target.value);
          }}
        ></Form.Control>
        <InputGroup className="d-flex flex-column w-100">
          <Form.Label>Nome azienda*</Form.Label>
        </InputGroup>
        <Form.Control
          required
          value={experience_company}
          onChange={(e) => {
            setExperienceCompany(e.target.value);
          }}
        ></Form.Control>
        <InputGroup>
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label>Data inizio</Form.Label>
          </InputGroup>
          <input
            type="date"
            id="dateStartInput"
            name="dateStartInput"
            value={experience_startDate}
            onChange={(e) => {
              setExperienceStartDate(e.target.value);
            }}
            className="w-100"
          />
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label>Data fine</Form.Label>
          </InputGroup>
          <input
            type="date"
            id="dateEndInput"
            name="dateEndInput"
            value={experience_endDate}
            onChange={(e) => {
              setExperienceEndDate(e.target.value);
            }}
            className="w-100"
          />
        </InputGroup>
        <InputGroup className="d-flex flex-column w-100">
          <Form.Label>Area</Form.Label>
        </InputGroup>
        <FormControl
          required
          value={experience_area}
          onChange={(e) => {
            setExperienceArea(e.target.value);
          }}
        ></FormControl>
        <InputGroup className="d-flex flex-column w-100">
          <Form.Label>Descrizione</Form.Label>
        </InputGroup>
        <FormControl
          as="textarea"
          required
          value={experience_description}
          onChange={(e) => {
            setExperienceDescription(e.target.value);
          }}
        ></FormControl>
      </Modal.Body>
      <Modal.Footer>
        <Button className="save-button rounded-5 px-3" onClick={saveExperience}>
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
