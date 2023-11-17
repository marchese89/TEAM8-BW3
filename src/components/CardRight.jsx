import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import styled from "styled-components";
import { Bookmark, Alipay, Person, Camera } from "react-bootstrap-icons";
import imgp from "../assets/LinkImg.PNG";
import ModalFoto from "./ModalFoto";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StyledCard = styled.div`
  .h4Modify {
    font-size: 15px;
    font-weight: bold;
  }

  .link {
    font-size: 10px;
    color: #2a2aef;
  }

  .link:hover {
    cursor: pointer;
  }

  .subt {
    font-size: 12px;
    color: #a1a0a0;
    margin: 0;
  }

  .expandC {
    font-weight: bold;
    font-size: 13px;
    margin: 0;
    display: flex;
    align-content: center;
    color: rgba(51, 51, 51, 0.88);
  }

  .rowEvents:hover {
    background: rgba(161, 160, 160, 0.39);
    cursor: pointer;
    color: rgba(72, 71, 71, 0.82);
  }

  .rowev {
    border-bottom: 0.5px solid rgba(128, 128, 128, 0.56);
    border-top: 0.5px solid rgba(128, 128, 128, 0.56);
    margin: 0;
  }

  .rowev2 {
    border-bottom: 0.5px solid rgba(128, 128, 128, 0.56);
    margin: 0;
  }

  .rowev3 {
    margin: 0;
  }
  .roundedCamera {
    ${"" /* position: absolute; */}
    ${"" /* z-index: 6; */}
  }
`;

const CardRight = ({ shoModal }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const goToProf = () => {
    navigate("/in/me");
  };

  return (
    <StyledCard>
      <Card className={"rounded-bottom-2"}>
        <Col>
          <Row className={"imgProfile position-relative"}>
            <img height={100} src={imgp} alt={"logo"} />
            <div
              className={
                " position-absolute top-100 start-50 translate-middle d-flex justify-content-center "
              }
            >
              <Camera size={50} onClick={goToProf} className={"camera "} />
            </div>
          </Row>
        </Col>
        <Card.Body className={"px-0"}>
          <Row>
            <h4 className="h4Modify text-center pt-4">
              {" "}
              Ti diamo il benvenuto (nome){" "}
            </h4>
            <p
              className={"link text-center"}
              // data-bs-toggle="modal"
              // data-bs-target="#modalPhoto"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Aggiungi una foto
            </p>
          </Row>
          {/*<hr className={'p-0 m-0'}/>*/}
          <Row className={"rowev"}>
            <div className={"rowEvents py-2"}>
              <p className={"subt d-flex"}>
                {" "}
                Collegamenti <Person size={15} className={"ms-auto"}></Person>
              </p>
              <p className={"expandC"}>Espandi la tua rete</p>
            </div>
          </Row>
          {/*<hr className={'p-0 m-0 my-2'}/>*/}
          <Row className={"rowev2"}>
            <div className={"rowEvents py-2"}>
              <p className={"subt"}>
                Accedi a strumenti e informazione in esclusiva
              </p>
              <p className={"expandC my-1"}>
                {" "}
                <Alipay size={15} className={"mx-2"} /> Prova premium gratis
              </p>
            </div>
          </Row>
          <Row className={"rowev3"}>
            <div className={"rowEvents py-2"}>
              <p className={"expandC"}>
                {" "}
                <Bookmark size={15} className={"mx-2"} />I miei elementi
              </p>
            </div>
          </Row>
        </Card.Body>
      </Card>
      <ModalFoto showModal={showModal} setShowModal={setShowModal} />
    </StyledCard>
  );
};

export default CardRight;
