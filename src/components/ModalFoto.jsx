import {
  Button,
  Col,
  Container,
  FormControl,
  FormGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";
import asbulla from "../assets/asbulla.jpg";
import nyan from "../assets/nyan.jfif";
import papa from "../assets/papa.webp";
import astro from "../assets/astrocat.jpg";
import astronaut from "../assets/immagine due.jpg";
import WebcamComponent from "./ComponentWebCam";
const StyledDiv = styled.div`
  .slogan {
    display: flex;
    justify-content: center;
  }

  .nyancat {
    border-radius: 50%;
    margin: 2%;
  }

  .asbulla {
    border-radius: 50%;
    margin: 2%;
  }

  .papa {
    border-radius: 50%;
    margin: 2%;
  }

  .astro {
    border-radius: 50%;
    margin: 2%;
  }

  .astronaut {
    border-radius: 50%;
    margin: 2%;
  }

  .trueId {
    display: flex;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 5%;
    color: rgba(128, 128, 128, 0.79);
  }

  Button {
    margin-left: 1%;
    margin-right: 1%;
  }
`;

const StyledImg = styled.img`
  border-radius: 50%;
  margin: 2%;
`;

const ModalFoto = (props) => {
  const [show, setShow] = useState(false);
  const [showTit, setShowTit] = useState(true);

  const handleClose = () => {
    props.setShowModal(false);
  };
  const showChange = () => {
    setShow(true);
    setShowTit(false);
  };

  return (
    <StyledDiv>
      <Modal
        show={props.showModal}
        onHide={handleClose}
        backdrop={true}
        size="xl"
      >
        {/* <div className="modal-content"> */}
        <Modal.Header>
          <Modal.Title>
            {" "}
            <h5 className={"px-3 py-3"}>Add a Photo</h5>{" "}
          </Modal.Title>
          <button
            onClick={() => {
              props.setShowModal(false);
            }}
            type="button"
            className="btn-close me-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </Modal.Header>
        {showTit && (
          <Modal.Body className="d-flex flex-column align-items-center">
            <div className={"text-center"}>
              <Container className={"slogan mt-3"}>
                <Col className={"col-12"}>
                  <p className={"h4"}>
                    Your photo doesn't have to be a close-up of you!
                    <br />
                    But something that represents you.
                  </p>
                </Col>
              </Container>
            </div>
            <div className={"d-flex justify-content-center mt-4"}>
              <StyledImg
                height={50}
                width={50}
                className="asbulla rounded-5"
                src={asbulla}
                alt={"logo"}
              />
              <StyledImg
                height={80}
                className="nyancat"
                src={nyan}
                alt={"logo"}
              />
              <StyledImg
                height={100}
                width={200}
                className={"papa"}
                src={papa}
                alt={"logo"}
              />
              <StyledImg
                height={80}
                width={80}
                className="astro"
                src={astro}
                alt={"logo"}
              />
              <StyledImg
                height={50}
                width={50}
                className="astronaut"
                src={astronaut}
                alt={"logo"}
              />
            </div>

            <div className="trueId px-5 my-5">
              <Col className={" d-flex col-12 text-center"}>
                Chiediamo agli utenti di LinkedIn di utilizzare le loro vere
                identità, quindi scatta o carica una tua foto. Poi ritagliala,
                applica dei filtri e perfezionala come vuoi.
              </Col>
            </div>
            <Modal.Footer className={" d-flex w-100"}>
              <Container className="d-flex justify-content-end">
                <Button className="mx-1">Carica Foto</Button>
                <Button className="mx-1" onClick={showChange}>
                  Usa Fotocamera
                </Button>
              </Container>
            </Modal.Footer>
          </Modal.Body>
        )}
        {show && <WebcamComponent />}
        {/* </div> */}
      </Modal>
    </StyledDiv>
  );
};

export default ModalFoto;
