import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  myProfileAction,
  updateProfileAction,
  userProfileAction,
  visitUserAction,
} from "../redux/actions";
import placeholder from "../img/img_placeholder.jpg";
import React from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { token } from "../redux/actions";
import Experience from "./Experience";
import { useParams } from "react-router-dom";

const ProfileStyled = styled.div`
  @media screen and (min-width: 1200px) {
    .marginesagerato {
    margin-top: 120px !important;
  }

  .paddingzero {
      padding: 0 !important;
    }

    .containermain {
      position: relative;
      display: flex;
      flex-direction: column;
      border: 1px solid #dbdbdb;
      border-radius: 10px;
      overflow: hidden;
      background-color: white;
      background-color: #fff;
  }
    .cover {
      object-fit: cover;
      object-position: 0;
      width: 100%;
    }
    .containercover {
      height: 400px;
      width: 100%;
      overflow: hidden;
    }

    .containerinfo {
      padding: 2em;
      line-height: 18px;
    }

    .containerinfosmall {
      line-height: 15px;
      font-size: 0.8em;
      color: rgb(134, 134, 134);
    }

    .avatar {
      position: absolute;
      border: 5px solid #fff;
      border-radius: 50%;
      width: 170px;
      height: 170px;
      object-fit: cover;

      bottom: 190px;
      left: 35px;
    }

    .containercertification {
      padding-top: 2em;
      padding-left: 4em;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .certificationinfo {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: normal;
      margin-bottom: 12px;
    }

    .certificationinfoIMG {
      width: 30px;
      height: 30px;
    }

    .certificationinfoTEXT {
      font-size: 0.9em;
      font-weight: 600;
      padding-left: 10px;
      margin-bottom: 0;
    }

    /*TESTIINFORMAZIONI*/

    .name {
      font-size: 1.5em;
      font-weight: 500;
    }

    .inlineblockp {
      display: inline-block;
    }

    .bold {
      font-weight: 500;
    }

    /*TUTTI I BOTTONI*/

    .containerbutton {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }

    .buttonfull {
      border-radius: 20px !important;
      display: inline-block;
      width: 140px;
      height: 30px;
      padding-top: 6px;
      background-color: #016adb;
      color: #fff;
      border: none;
      border-radius: 15px;
      cursor: pointer;
      transition: background-color 0.3s;

      display: flex;
      align-items: baseline;
      justify-content: center;
    }

    .buttonfull:hover {
      background-color: #014691;
    }

    .buttonfulltext {
      font-weight: 600 !important;
    }

    .buttonoutlined {
      border-radius: 20px !important;
      display: inline-block;
      width: 140px;
      height: 30px;
      padding-top: 5px;
      color: #016adb;
      border: 1px solid #016adb;
      border-radius: 15px;
      cursor: pointer;
      transition: background-color 0.3s;
      background-color: #fff;
    }

    .buttonoutlined:hover {
      background-color: #d1e6fd;
    }

    .buttonoutlinedtext {
      font-weight: 500;
    }

    .buttonother {
      border-radius: 20px !important;
      display: inline-block;
      width: 70px;
      height: 30px;
      padding-top: 5px;
      color: #646464;
      border: 1px solid #646464;
      border-radius: 15px;
      cursor: pointer;
      transition: background-color 0.3s;
      background-color: #fff;
    }

    .buttonother:hover {
      background-color: #ebebeb;
    }

  }

  @media screen and (min-width: 1000px) and (max-width: 1200px) {
    .paddingzero {
      padding: 0 !important;
    }

    .containermain {
      position: relative;
      display: flex;
      flex-direction: column;
      border: 1px solid #dbdbdb;
      border-radius: 10px;
      overflow: hidden;
      background-color: white;
    }
    .cover {
      object-fit: cover;
      object-position: 0;
      width: 100%;
    }
    .containercover {
      height: 400px;
      width: 100%;
      overflow: hidden;
    }

    .containerinfo {
      padding: 2em;
      line-height: 10px;
    }

    .containerinfosmall {
      line-height: 15px;
      font-size: 0.8em;
      color: rgb(134, 134, 134);
    }

    .avatar {
      position: absolute;
      border: 5px solid #fff;
      border-radius: 50%;
      width: 170px;
      height: 170px;
      object-fit: cover;
      bottom: 190px;
      left: 35px;
    }

    .containercertification {
      padding-top: 2em;
      padding-left: 4em;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .certificationinfo {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: normal;
      margin-bottom: 12px;
    }

    .certificationinfoIMG {
      width: 30px;
      height: 30px;
    }

    .certificationinfoTEXT {
      font-size: 0.9em;
      font-weight: 600;
      padding-left: 10px;
      margin-bottom: 0;
    }

    /*TESTIINFORMAZIONI*/

    .name {
      font-size: 1.5em;
      font-weight: 500;
    }

    .inlineblockp {
      display: inline-block;
    }

    .bold {
      font-weight: 500;
    }

    /*TUTTI I BOTTONI*/

    .containerbutton {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }

    .buttonfull {
      border-radius: 20px !important;
      display: inline-block;
      width: 140px;
      height: 30px;
      padding-top: 6px;
      background-color: #016adb;
      color: #fff;
      border: none;
      border-radius: 15px;
      cursor: pointer;
      transition: background-color 0.3s;

      display: flex;
      align-items: baseline;
      justify-content: center;
    }

    .buttonfull:hover {
      background-color: #014691;
    }

    .buttonfulltext {
      font-weight: 600 !important;
    }

    .buttonoutlined {
      border-radius: 20px !important;
      display: inline-block;
      width: 140px;
      height: 30px;
      padding-top: 8px;
      color: #016adb;
      border: 1px solid #016adb;
      border-radius: 15px;
      cursor: pointer;
      transition: background-color 0.3s;
      background-color: #fff;
    }

    .buttonoutlined:hover {
      background-color: #d1e6fd;
    }

    .buttonoutlinedtext {
      font-weight: 500;
    }

    .buttonother {
      border-radius: 20px !important;
      display: inline-block;
      width: 70px;
      height: 30px;
      padding-top: 8px;
      color: #646464;
      border: 1px solid #646464;
      border-radius: 15px;
      cursor: pointer;
      transition: background-color 0.3s;
      background-color: #fff;
    }

    .buttonother:hover {
      background-color: #ebebeb;
    }

    .buttonothertext {
      font-weight: 500;
    }

    .exp {
      line-height: 100%;
    }
  }

  ${'' /* @media screen and (min-width: 768px) and (max-width: 800px) {
    .avatar {
      position: absolute;
      border: 5px solid #fff;
      border-radius: 50%;
      width: 140px;
      height: 140px;
      object-fit: cover;

      bottom: 100px;
      left: 35px;
    }
  } */}

  @media screen and (max-width: 999px) {
    .paddingzero {
      padding: 0 !important;
    }

    .containermain {
      position: relative;
      display: flex;
      flex-direction: column;
      border: 1px solid #dbdbdb;
      border-radius: 10px;
      overflow: hidden;
      background-color: white;
    }
    .cover {
      object-fit: cover;
      object-position: 0;
      width: 100%;
    }
    .containercover {
      width: 100%;
      overflow: hidden;
    }

    .containerinfo {
      padding: 2em;
      line-height: 18px;
    }

    .containerinfosmall {
      line-height: 15px;
      font-size: 0.8em;
      color: rgb(134, 134, 134);
    }

    .avatar {
      position: absolute;
      border: 5px solid #fff;
      border-radius: 50%;
      width: 140px;
      height: 140px;
      object-fit: cover;

      bottom: 220px;
      left: 35px;
    }

    .containercertification {
      padding-top: 2em;
      padding-left: 4em;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .certificationinfo {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: normal;
      margin-bottom: 12px;
    }

    .certificationinfoIMG {
      width: 30px;
      height: 30px;
    }

    .certificationinfoTEXT {
      font-size: 0.9em;
      font-weight: 600;
      padding-left: 10px;
      margin-bottom: 0;
    }

    /*TESTIINFORMAZIONI*/

    .name {
      font-size: 1.5em;
      font-weight: 500;
    }

    .inlineblockp {
      display: inline-block;
    }

    .bold {
      font-weight: 500;
    }

    /*TUTTI I BOTTONI*/

    .containerbutton {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }

    .buttonfull {
      border-radius: 20px !important;
      display: inline-block;
      width: 140px;
      height: 30px;
      padding-top: 6px;
      background-color: #016adb;
      color: #fff;
      border: none;
      border-radius: 15px;
      cursor: pointer;
      transition: background-color 0.3s;

      display: flex;
      align-items: baseline;
      justify-content: center;
    }

    .buttonfull:hover {
      background-color: #014691;
    }

    .buttonfulltext {
      font-weight: 600 !important;
    }

    .buttonoutlined {
      border-radius: 20px !important;
      display: inline-block;
      width: 140px;
      height: 30px;
      padding-top: 5px;
      color: #016adb;
      border: 1px solid #016adb;
      border-radius: 15px;
      cursor: pointer;
      transition: background-color 0.3s;
      background-color: #fff;
    }

    .buttonoutlined:hover {
      background-color: #d1e6fd;
    }

    .buttonoutlinedtext {
      font-weight: 500;
    }

    .buttonother {
      border-radius: 20px !important;
      display: inline-block;
      width: 70px;
      height: 30px;
      padding-top: 5px;
      color: #646464;
      border: 1px solid #646464;
      border-radius: 15px;
      cursor: pointer;
      transition: background-color 0.3s;
      background-color: #fff;
    }

    .buttonother:hover {
      background-color: #ebebeb;
    }

    .buttonothertext {
      font-weight: 500;
    }

    .exp {
      line-height: 100%;
    }
  }
  .pencil {
    right: 1.5em;
    top: 0.5em;
    width: 2.2em;
    height: 2.2em;
    border-radius: 50%;
    dispay: flex;
    justify-content: center;
    align-items: center;
  }
  .pencil:hover {
    cursor: pointer;
    background-color: #ebebeb;
  }
  .icon:hover {
    background-color: #ebebeb;
  }
  .icon-inner {
    left: 0.5em;
    top: 0.5em;
  }
  .pencil {
    right: 1.5em;
    top: 0.5em;
    width: 2.2em;
    height: 2.2em;
    border-radius: 50%;
    dispay: flex;
    justify-content: center;
    align-items: center;
  }
  .pencil:hover {
    cursor: pointer;
    background-color: #ebebeb;
  }
  .icon:hover {
    background-color: #ebebeb;
  }
  .icon-inner {
    left: 0.5em;
    top: 0.5em;
  }
`;

export default function Profile() {
  const dispatch = useDispatch();

  const { idProfile } = useParams();
  useEffect(() => {
    if (idProfile !== undefined) {
      dispatch(visitUserAction(idProfile));
      console.log("ho chiamato visit user");
      setDifferentUser(true);
    } else {
      setDifferentUser(false);
    }
  }, [idProfile]);

  const [show, setShow] = useState(false); //per il modale
  const handleClose = () => setShow(false); //chiusura modale

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("");
  const [profileImage, setProfileImage] = useState(placeholder);
  const [differentUser, setDifferentUser] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const my_profileFromReduxStore = useSelector(
    (state) => state.profile.my_profile
  );

  const current_profileFromReduxStore = useSelector(
    (state) => state.profile.current_user_profile
  );

  useEffect(() => {
    if (Object.keys(current_profileFromReduxStore).length > 0) {
      if (idProfile !== undefined) {
        setDifferentUser(true);
        dispatch(userProfileAction(idProfile));
      } else {
        setDifferentUser(false);
        //   dispatch(userProfileAction(my_profileFromReduxStore._id));
      }
    }
  }, []);

  // useEffect(() => {
  //   if (Object.keys(my_profileFromReduxStore).length > 0) {
  //     setProfileImage(my_profileFromReduxStore.image);
  //     dispatch(userProfileAction(my_profileFromReduxStore._id));
  //   }
  // }, [my_profileFromReduxStore]);

  useEffect(() => {
    if (Object.keys(current_profileFromReduxStore).length > 0) {
      setName(current_profileFromReduxStore.name);
      setSurname(current_profileFromReduxStore.surname);
      setEmail(current_profileFromReduxStore.email);
      setUsername(current_profileFromReduxStore.username);
      setBio(current_profileFromReduxStore.bio);
      setTitle(current_profileFromReduxStore.title);
      setArea(current_profileFromReduxStore.area);
      setProfileImage(current_profileFromReduxStore.image);
    }
  }, [current_profileFromReduxStore]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  function modifyProfile() {
    dispatch(
      updateProfileAction({
        name: name,
        surname: surname,
        email: email,
        username: username,
        bio: bio,
        title: title,
        area: area,
      })
    );
  }

  async function handleImageUpload() {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("profile", selectedImage);

      fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${my_profileFromReduxStore._id}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          // console.log("img ok", data);
          dispatch(myProfileAction());
        })
        .catch((error) => {
          console.error("err", error);
        });

      closeModal();
    }
  }

  return (
    <>
      <ProfileStyled>
        <Container className="mt-5 marginesagerato">
          <div className="containermain">
            <div className="containercover">
              <Image
                src="https://images.pexels.com/photos/13566084/pexels-photo-13566084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="cover"
              />
            </div>
            <Image
              src={profileImage}
              className="avatar"
              style={!differentUser ? { cursor: "pointer" } : {}}
              onClick={!differentUser ? openModal : () => { }}
            />
            {/* isOpen={} onRequestClose={closeModal} */}
            <Modal show={isModalOpen} onHide={closeModal}>
              <Modal.Header closeButton>
                <Modal.Title className="fs-5 modal-title">
                  Modifica immagine profilo
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="d-flex flex-column w-100 mt-3 align-items-center">
                  <Form.Label>Immagine</Form.Label>
                  {selectedImage && (
                    <Image
                      src={URL.createObjectURL(selectedImage)}
                      alt="Anteprima immagine"
                      className="image-preview w-25 my-2 rounded-2"
                      fluid
                    />
                  )}
                  <Form.Control type="file" onChange={handleImage} />
                </div>
                {/* <input type="file" onChange={handleImage} accept="image/*" /> */}
              </Modal.Body>
              <Modal.Footer className="d-flex justify-content-between">
                <Button
                  className="save-button rounded-5 px-3"
                  onClick={handleImageUpload}
                >
                  Conferma
                </Button>
                {/* <button >Conferma</button> */}
                <Button
                  className="save-button rounded-5 px-3"
                  onClick={closeModal}
                >
                  Annulla
                </Button>
                {/* <button onClick={closeModal}>Annulla</button> */}
              </Modal.Footer>
            </Modal>

            <Row className="position-relative">
              <Col className="col-6">
                <div className="containerinfo mt-4">
                  <p className="name">
                    {current_profileFromReduxStore.name}{" "}
                    {current_profileFromReduxStore.surname}
                  </p>
                  <p>Aftersales Manager bei Ducati (Schweiz) AG</p>
                  <div className="containerinfosmall">
                    <p>{current_profileFromReduxStore.area}</p>
                    <p className="inlineblockp bold">500</p>
                    <p className="inlineblockp ms-1">Collegamenti</p>
                  </div>
                  <Container className="paddingzero">
                    <Row>
                      <Col className="col-12">
                        <div className="containerbutton">
                          <button variant="primary" className="buttonfull">
                            <i className="bi bi-person-plus-fill"></i>
                            <p className="buttonfulltext"> &nbsp;Collegati</p>
                          </button>
                          <button
                            variant="primary"
                            className="buttonoutlined ms-2"
                          >
                            <p className="buttonoutlinedtext">Messaggio</p>
                          </button>
                          <button
                            variant="primary"
                            className="buttonother ms-2"
                          >
                            <p className="buttonothertext">Altro</p>
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
              <Col className="col-6">
                <div className="containercertification mt-4">
                  <div className="certificationinfo">
                    <Image
                      src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
                      className="certificationinfoIMG"
                    />
                    <p className="certificationinfoTEXT mt-1">
                      Epicode Network
                    </p>
                    {!differentUser && (
                      <div className="icon pencil position-absolute">
                        <i
                          className="fas fa-pencil-alt position-absolute icon-inner"
                          onClick={() => {
                            setShow(true);
                          }}
                        ></i>
                      </div>
                    )}
                  </div>
                  <div className="certificationinfo">
                    <Image
                      src="https://www.acousticbulletin.com/wp-content/uploads/2020/01/70-706384_illuminati-clipart-all-illuminati-logo-png.png"
                      className="certificationinfoIMG"
                    />
                    <p className="certificationinfoTEXT mt-1">
                      Illuminati Network
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </ProfileStyled>
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title className="fs-5 modal-title">
            Modifica Dati profilo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label>Nome</Form.Label>
          </InputGroup>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label>Surmane</Form.Label>
          </InputGroup>
          <Form.Control
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          ></Form.Control>
          <InputGroup></InputGroup>
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label>Email</Form.Label>
          </InputGroup>
          <FormControl
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></FormControl>
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label>username</Form.Label>
          </InputGroup>
          <FormControl
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></FormControl>
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label>Bio</Form.Label>
          </InputGroup>
          <FormControl
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></FormControl>
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label>Title</Form.Label>
          </InputGroup>
          <FormControl
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></FormControl>
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label>Area</Form.Label>
          </InputGroup>
          <FormControl
            value={area}
            onChange={(e) => setArea(e.target.value)}
          ></FormControl>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end">
          <Button
            className="save-button rounded-5 px-3"
            onClick={() => {
              setShow(false);
              modifyProfile();
            }}
          >
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
      <Container className="mt-5">
        <Experience />
      </Container>
    </>
  );
}
