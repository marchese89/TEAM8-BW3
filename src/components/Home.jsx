import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  Image,
  InputGroup,
  Modal,
  Row,
  Spinner,
} from "react-bootstrap";
import styled from "styled-components";
import {
  HandThumbsUp,
  ChatText,
  Share,
  SendFill,
  ThreeDots,
  Trash3Fill,
  PencilFill,
  CaretDown,
} from "react-bootstrap-icons";
import RecentProfile from "./recentlyProfile";
import AddComment from "./AddComment";
import NewPost from "./AddNewPost";
import CardLeft from "./CardHomeRight";
import NewsCard from "./Notizie";
import { token } from "../redux/actions";
import { useSelector } from "react-redux";

const ProfileStyled = styled.div`
  .destra li {
    font-weight: 700 !important;
  }
  li p {
    font-weight: normal;
  }
  .interazioni {
    padding: 0.6em !important;
  }
  .interazioni:hover {
    background-color: rgb(222, 220, 220);
    cursor: pointer;
  }
  .foto img {
    width: 100%;
  }
  .three-dots {
    width: 1.8em;
    height: 1.8em;
  }
  .three-dots:hover {
    cursor: pointer;
  }
  .drop-down {
    color: #666666;
    z-index: 4;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #eae8e5;
    right: 0em;
    top: 2em;
    & ul li {
      white-space: nowrap;
      width: 20em;
    }
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

const Home = () => {
  const [postData, setPostData] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(false);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModPost, setShowModPost] = useState(false);
  const [postText, setPostText] = useState("");
  const [post, setPost] = useState();

  const my_profileFromReduxStore = useSelector(
    (state) => state.profile.my_profile
  );
  const [showDrop, setshowDrop] = useState(false);
  const [selectedPostIdDrop, setSelectedPostIdDrop] = useState();

  const fetchData = async (text, file) => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "GET",

          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMmVjZWM1NWU3ZTAwMThmODNjODUiLCJpYXQiOjE2OTk4ODQ3NTAsImV4cCI6MTcwMTA5NDM1MH0.JwqWWy93veTxrqjHXsB3_IFB9m9gO6IYG7BOf9uxVKQ",
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Errore nella richiesta GET");
      }

      const data = await response.json();
      setPostData(data);
      console.log(data);
    } catch (error) {
      console.error("Errore durante la richiesta GET:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePost = async (postText) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: postText }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Errore nella richiesta POST: ${response.status} ${response.statusText}`
        );
      }

      // Dopo la creazione del post, rifetch dei dati
      fetchData();
      setShowModal(false);
    } catch (error) {
      console.error("Errore durante la creazione del post:", error.message);
    }
  };

  function deletePost(idPost) {
    fetch("https://striveschool-api.herokuapp.com/api/posts/" + idPost, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          fetchData();
        } else {
          throw new Error("Errore nella delete");
        }
      })
      .catch((err) => {
        console.log("Errore ", err);
      });
  }

  function modifyPost(idPost) {
    fetch("https://striveschool-api.herokuapp.com/api/posts/" + idPost, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: postText }),
    })
      .then((response) => {
        if (response.ok) {
          if (selectedFile !== null) {
            uploadPostImage(idPost);
          } else {
            fetchData();
          }
        } else {
          throw new Error("Errore nella delete");
        }
      })
      .catch((err) => {
        console.log("Errore ", err);
      });
  }

  function uploadPostImage(idPost) {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("post", selectedFile);
      fetch(`https://striveschool-api.herokuapp.com/api/posts/${idPost}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            fetchData();
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

  // Funzione per mostrare CommentArea
  const toggleCommentArea = (postId) => {
    setSelectedPostId(postId === selectedPostId ? null : postId);
  };

  // Funzione per stringa orario
  function formatData(dataString) {
    const data = new Date(dataString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return data.toLocaleDateString("it-IT", options);
  }

  const handleFileChange = (event) => {
    // Gestisci il cambiamento del file selezionato
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ProfileStyled>
        {loading && (
          <Row className="py-5 my-5 text-center d-flex flex-column">
            <Spinner animation="border " variant="primary" />
          </Row>
        )}
        {/* Contenitore  */}
        <Container className=" margine mt-5">
          {/* Colonna laterale profilo  */}

          <Row>
            <Col lg={2} className="mt-2 d-lg-flex d-md-block position-sticky ">
              <CardLeft />
            </Col>
            {/* Centrare col  */}
            <Col
              lg={7}
              md={12}
              sm={12}
              className="mb-2 mt-0 rounded col-md-6 pt-2 justify-content-center"
            >
              {/* Row add post  */}
              <Row className="mb-2  justify-content-center ">
                <Col
                  className=" bg-white py-3 border rounded lunghezza"
                  // lg={{ span: 11, offset: 1 }}
                >
                  <NewPost
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    onPost={handlePost}
                  />
                </Col>
              </Row>
              {/* Map dei post  */}
              {postData.map((post) => (
                <Row className="justify-content-center " key={post._id}>
                  <Col
                    className=" d-sm border mb-2 mt-2 bg-white rounded  pt-2"
                    // lg={{ offset: 1 }}
                  >
                    {/* Avatar + Nome Utente  */}
                    <p
                      style={{
                        fontSize: 1 + "em",
                        fontWeight: "bold",
                        margin: 0.2 + "em",
                      }}
                      className="d-flex justify-content-between"
                    >
                      <div>
                        {" "}
                        <img
                          src={post.user.image}
                          className="rounded-circle"
                          alt="avatar"
                          width={50 + "px"}
                          height={50 + "px"}
                        />{" "}
                        {post.username}
                      </div>
                      <div className="position-relative">
                        <ThreeDots
                          className={
                            my_profileFromReduxStore.username === post.username
                              ? "three-dots"
                              : "three-dots d-none"
                          }
                          onClick={() => {
                            setshowDrop(!showDrop);
                            setSelectedPostIdDrop(post._id);
                          }}
                        />
                        {showDrop && selectedPostIdDrop === post._id && (
                          <div
                            className={
                              my_profileFromReduxStore.username ===
                              post.username
                                ? "drop-down position-absolute"
                                : "drop-down position-absolute d-none"
                            }
                          >
                            <ul className="list-unstyled d-flex flex-column mb-0">
                              <li
                                onClick={() => {
                                  // setshowDrop(true);
                                  setShowModPost(true);
                                  setshowDrop(false);
                                  setPost(post);
                                  setPostText(post.text);
                                  // setShowAddExperience(true);
                                }}
                              >
                                <PencilFill className="me-2" />
                                Modifica Post
                              </li>
                              <li
                                onClick={() => {
                                  deletePost(post._id);
                                }}
                              >
                                <Trash3Fill className="me-2" />
                                Elimina post
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </p>

                    {/* Data di creazione del post con funzione per trasformare la stringa della data */}
                    <p style={{ fontSize: 0.7 + "em" }}>
                      Creazione: {formatData(post.createdAt)}
                    </p>

                    {/* Contenuto del post  */}
                    <div className="d-flex flex-wrap">
                      <p
                        className="d-flex flex-wrap"
                        style={{ fontSize: 1 + "em" }}
                      >
                        {post.text}
                      </p>
                    </div>
                    <div className="foto">
                      <img src={post.image} alt="" />
                    </div>

                    {/* Data di aggiornamento del post con funzione per trasformare la stringa della data */}
                    <p style={{ fontSize: 0.7 + "em", margin: 0.2 + "em" }}>
                      Aggiornamento: {formatData(post.updatedAt)}
                    </p>
                    <hr />

                    <div className="d-flex flex-nowrap justify-content-center">
                      {/* Like  */}
                      <p
                        onClick={() => setLiked(!liked)}
                        // *DA FIXARE* Al click pollice colorato
                        className="d-none rounded d-lg-block align-items-start align-text-center me-3 interazioni p-1 pb-1"
                      >
                        <HandThumbsUp className="align-center me-1" />
                        Consiglia
                      </p>{" "}
                      {/* Stato per mettere like */}
                      <p className="d-lg-none ms-3 me-4">
                        <HandThumbsUp className=" align-center me-1" />
                      </p>
                      {/* Commenta  */}
                      <p
                        onClick={() => toggleCommentArea(post._id)}
                        className="d-none rounded d-lg-block align-items-start align-text-center me-4 interazioni p-1 pb-1"
                      >
                        <ChatText className="align-center me-1" />
                        Commenta
                      </p>
                      <p
                        onClick={() => toggleCommentArea(post._id)}
                        className="d-lg-none me-4 "
                      >
                        <ChatText className=" align-center me-1" />
                      </p>
                      {/* Condividi  */}
                      <p className="d-none rounded d-lg-block align-items-start align-text-center me-3 interazioni p-1 pb-1 ">
                        <Share className=" align-center me-1" />
                        Diffondi il post
                      </p>
                      <p className="d-lg-none me-4 ">
                        <Share className=" align-center me-1" />
                      </p>
                      {/* Invia  */}
                      <p className="d-none rounded d-lg-block align-items-start align-text-center interazioni p-1 pb-1">
                        <SendFill className="align-center me-1" />
                        Invia
                      </p>
                      <p className="d-lg-none me-4 ">
                        <SendFill className=" align-center me-1" />
                      </p>
                      {/* // Mostra il componente CommentArea selezionato */}
                    </div>
                    {post._id === selectedPostId && (
                      <>
                        <AddComment postId={selectedPostId} />
                      </>
                    )}
                  </Col>
                </Row>
              ))}
            </Col>
            <Col className="mt-2 d-none d-lg-block">
              <NewsCard />
              <Card>
                <Card.Body className="">
                  <h6>Altri profili consultati</h6>
                  <RecentProfile />
                  <RecentProfile />
                  <RecentProfile />
                  <RecentProfile />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Modal
          show={showModPost}
          onHide={() => {
            setShowModPost(false);
          }}
          className="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fs-5 modal-title">
              Modifica Post
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="d-flex flex-column w-100">
              <Form.Label>Testo</Form.Label>
            </InputGroup>
            <Form.Control
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            ></Form.Control>

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
          <Modal.Footer className="d-flex justify-content-end">
            <Button
              className="save-button rounded-5 px-3"
              onClick={() => {
                setShowModPost(false);
                modifyPost(post._id);
              }}
            >
              Salva
            </Button>
          </Modal.Footer>
        </Modal>
      </ProfileStyled>
    </>
  );
};

export default Home;
