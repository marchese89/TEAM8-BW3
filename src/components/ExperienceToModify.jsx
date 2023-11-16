import { Plus } from "react-bootstrap-icons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, FormControl, Image, InputGroup } from "react-bootstrap";
import AddExperience from "./AddExperience";
import { useDispatch, useSelector } from "react-redux";
import { experienceListAction, getExperienceAction } from "../redux/actions";
import SingleExperience from "./SingleExperience";
import { token } from "../redux/actions";
import { format } from "date-fns";

const StyledDiv = styled.div`
  font-size: 16px;
  border: 1px solid #eae8e5;
  padding: 0.5em;
  width: 35em;
  margin-top: 6em;
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
  .image-preview {
    ${"" /* width: 3em; */}
    height: 30em;
  }
`;

const StyledSpan = styled.span`
  color: #5e5e5e !important;
  padding: 0.4em;
  &:hover {
    cursor: pointer !important;
    background-color: #ebebeb;
  }
`;

export default function ExperienceToModify() {
  const [show, setShow] = useState(false);
  const [showAddExperience, setShowAddExperience] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (idExp) => {
    dispatch(getExperienceAction(my_profileFromReduxStore._id, idExp));
    setShow(true);
  };

  const [selectedExp_id, setselectedExp_id] = useState("");
  const [selectedExp_role, setselectedExp_role] = useState("");
  const [selectedExp_company, setselectedExp_company] = useState("");
  const [selectedExp_startDate, setselectedExp_startDate] = useState("");
  const [selectedExp_endDate, setselectedExp_endDate] = useState("");
  const [selectedExp_description, setselectedExp_description] = useState("");
  const [selectedExp_area, setselectedExp_area] = useState("");

  const [showDrop, setshowDrop] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const dispatch = useDispatch();

  const my_profileFromReduxStore = useSelector(
    (state) => state.profile.my_profile
  );

  const myExperiencesFromReduxStore = useSelector(
    (state) => state.experience.experiences_list
  );

  const currentExperienceFromReduxStore = useSelector(
    (state) => state.experience.current_experience
  );
  useEffect(() => {}, []);

  useEffect(() => {
    if (currentExperienceFromReduxStore !== null) {
      setselectedExp_id(currentExperienceFromReduxStore._id);
      setselectedExp_role(currentExperienceFromReduxStore.role);
      setselectedExp_company(currentExperienceFromReduxStore.company);
      // console.log(
      //   format(new Date(currentExperienceFromReduxStore.endDate), "yyyy-MM-dd")
      // );
      if (currentExperienceFromReduxStore.startDate === undefined) {
        setselectedExp_startDate(new Date());
      } else {
        setselectedExp_startDate(
          new Date(currentExperienceFromReduxStore.startDate)
        );
      }

      if (currentExperienceFromReduxStore.endDate === undefined) {
        new Date();
      } else {
        setselectedExp_endDate(
          new Date(currentExperienceFromReduxStore.endDate)
        );
      }

      setselectedExp_description(currentExperienceFromReduxStore.description);

      setselectedExp_area(currentExperienceFromReduxStore.area);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentExperienceFromReduxStore]);

  useEffect(() => {
    if (my_profileFromReduxStore !== undefined) {
      dispatch(experienceListAction(my_profileFromReduxStore._id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [my_profileFromReduxStore]);

  async function deleteExp() {
    setShow(false);
    // dispatch(
    //   deleteExperienceAction(my_profileFromReduxStore._id, selectedExp_id)
    // );
    console.log("chiamo la funzione per eliminare l'esperienza");
    deleteExperience(my_profileFromReduxStore._id, selectedExp_id);
  }

  async function deleteExperience(userId, expId) {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        userId +
        "/experiences/" +
        expId,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
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

  async function uploadExpImage(userId, expId) {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("experience", selectedFile);
      fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      )
        .then((response) => {
          if (response.ok) {
            dispatch(experienceListAction(userId));
          } else {
            console.log("upload NO");
            throw new Error("errore nell'upload'");
          }
        })
        // .then(() => {

        // })
        .catch((err) => console.log("ERRORE!", err));
    }
  }

  const modifyExperienceAction = (userId, expId, exp) => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        userId +
        "/experiences/" +
        expId,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exp),
      }
    )
      .then((response) => {
        if (response.ok) {
          uploadExpImage(userId, expId);
          dispatch(experienceListAction(userId));
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .catch((err) => console.log("ERRORE!", err));
  };

  return (
    <>
      <StyledDiv className="d-flex flex-column rounded-3 text-black">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between position-relative">
            <h4>Esperienze</h4>
            <div id="buttons" className="d-flex flex-column">
              <Plus
                className="icon fs-1"
                id="plus"
                onClick={() => {
                  setshowDrop(!showDrop);
                }}
              />
              <div className="icon position-relative" id="pencil">
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
          {myExperiencesFromReduxStore.map((exp) => {
            return (
              <SingleExperience
                handleShow={handleShow}
                exp={exp}
                key={exp._id}
              />
            );
          })}
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
            <Form.Control
              value={selectedExp_role}
              onChange={(e) => setselectedExp_role(e.target.value)}
            ></Form.Control>
            <InputGroup className="d-flex flex-column w-100">
              <Form.Label>Azienda</Form.Label>
            </InputGroup>
            <Form.Control
              value={selectedExp_company}
              onChange={(e) => setselectedExp_company(e.target.value)}
            ></Form.Control>
            <InputGroup>
              <InputGroup className="d-flex flex-column w-100">
                <Form.Label>Data inizio</Form.Label>
              </InputGroup>
              <input
                type="date"
                id="dateStartInput"
                name="dateStartInput"
                value={
                  selectedExp_startDate !== ""
                    ? format(new Date(selectedExp_startDate), "yyyy-MM-dd")
                    : ""
                }
                onChange={(e) => setselectedExp_startDate(e.target.value)}
                className="w-100"
              />
              <InputGroup className="d-flex flex-column w-100">
                <Form.Label>Data fine</Form.Label>
              </InputGroup>
              <input
                type="date"
                id="dateEndInput"
                name="dateEndInput"
                value={
                  selectedExp_endDate !== ""
                    ? format(new Date(selectedExp_endDate), "yyyy-MM-dd")
                    : ""
                }
                onChange={(e) => setselectedExp_endDate(e.target.value)}
                className="w-100"
              />
            </InputGroup>
            <InputGroup className="d-flex flex-column w-100">
              <Form.Label>Area</Form.Label>
            </InputGroup>
            <FormControl
              value={selectedExp_area}
              onChange={(e) => setselectedExp_area(e.target.value)}
            ></FormControl>
            <InputGroup className="d-flex flex-column w-100">
              <Form.Label>Descrizione</Form.Label>
            </InputGroup>
            <FormControl
              as="textarea"
              value={selectedExp_description}
              onChange={(e) => setselectedExp_description(e.target.value)}
            ></FormControl>
            <div className="d-flex flex-column w-100 mt-3 align-items-center">
              <Form.Label>Immagine</Form.Label>
              {selectedFile && (
                <Image
                  src={URL.createObjectURL(selectedFile)}
                  alt="Anteprima immagine"
                  className="image-preview w-25 my-2 rounded-2"
                  fluid
                />
              )}
              <Form.Control type="file" onChange={handleFileChange} />
            </div>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <StyledSpan className="rounded-3" onClick={deleteExp}>
              Elimina Esperienza
            </StyledSpan>
            <Button
              className="save-button rounded-5 px-3"
              onClick={() => {
                setShow(false);
                modifyExperienceAction(
                  my_profileFromReduxStore._id,
                  selectedExp_id,
                  {
                    role: selectedExp_role,
                    company: selectedExp_company,
                    startDate: selectedExp_startDate,
                    endDate: selectedExp_endDate,
                    description: selectedExp_description,
                    area: selectedExp_area,
                  }
                );
              }}
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
