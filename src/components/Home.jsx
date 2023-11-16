import React, { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import styled from "styled-components";
import { HandThumbsUp, ChatText, Share, SendFill } from "react-bootstrap-icons";
import RecentProfile from "./recentlyProfile";
import AddComment from "./AddComment";
import NewPost from "./AddNewPost";
import CardLeft from "./CardHomeRight";
import NewsCard from "./Notizie";
import { token } from "../redux/actions";
import { useSelector } from "react-redux";

const ProfileStyled = styled.div`
.destra li{
  font-weight: 700 !important;
}
li p{
  font-weight: normal
}
  .interazioni {
    padding: 0.6em !important;
  }
  .interazioni:hover {
    background-color: rgb(222, 220, 220);
    cursor: pointer;
  }
  .foto img{
    width: 100%
  }
`;

const Home = () => {
  const [postData, setPostData] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(false);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const my_profileFromReduxStore = useSelector(
    (state) => state.profile.my_profile
  );


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
      const response = await fetch('https://striveschool-api.herokuapp.com/api/posts/', {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "text": postText }), 
      });
  
      if (!response.ok) {
        throw new Error(`Errore nella richiesta POST: ${response.status} ${response.statusText}`);
      }
  
      // Dopo la creazione del post, rifetch dei dati
      fetchData();
      setShowModal(false);
    } catch (error) {
      console.error('Errore durante la creazione del post:', error.message);
    }
  };


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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ProfileStyled>
        {loading && (
          <Row className="py-5 my-5 text-center justify-content-center">
            <Spinner animation="border " variant="primary" />
          </Row>
        )}

        <Container className=" margine mt-5">
          <Row className="mb-5 justify-content-center ">
            <Col className='col-6'>
              <NewPost
                show={showModal}
                handleClose={() => setShowModal(false)}
                onPost={handlePost} 
              />
            </Col>
          </Row>

          {/* Colonna laterale profilo  */}
          <Row>
            <Col className="col-2 bg-white border rounded" >
              <h2>Aggiungere Profilo con redux</h2>
            </Col>
        
        
              {/* Centrare col  */}
            <Col className=" d-sm mb-2 mt-2 rounded col-md-6  pt-2 justify-content-center">

                {/* Map dei post  */}
              {postData.map((post) => (
                <Row className="justify-content-center " key={post._id}>
                <Col className=" d-sm border mb-2 mt-2 bg-white rounded  pt-2" lg={{offset:1}}>

                  {/* Avatar + Nome Utente  */}
                  <p
                    style={{
                      fontSize: 1 + "em",
                      fontWeight: "bold",
                      margin: 0.2 + "em",
                    }}
                    >
                    {" "}
                  
                  
                
                    <img
                      src={post.image}
                      className="rounded-circle"
                      alt="avatar"
                      width={50 + "px"}
                    />{" "}
                    {post.username}
                  </p>

                    {/* Data di creazione del post con funzione per trasformare la stringa della data */}
                    <p style={{ fontSize: 0.7 + "em" }}>
                      Creazione: {formatData(post.createdAt)}
                    </p>

                    {/* Contenuto del post  */}
                    <div className="d-flex flex-wrap">
                    <p className='d-flex flex-wrap'style={{ fontSize: 1 + "em" }}>{post.text}</p>
                    </div>
                    <div className="foto">
                    <img
                      src={post.image}                     
                      alt=""                     
                    />
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

              {/* Colonna laterale  */}
              <Col className="col-3 bg-white destra border container-fluid rounded" >
                <h5 style={{ fontSize: 1 + "em", margin: 0.2 + "em", fontWeight:700}}>LinkedIn Notizie</h5>

                <li className="mt-3">Effetto ATP Finals per Torino<br/>
                <p style={{ fontSize: 0.9 + "em", margin: 0.2 + "em" }}>6 ore fa • 105 lettori</p></li>

                <li className="mt-3">L'immobiliare è sempre più tech <br/>
                <p style={{ fontSize: 0.9 + "em", margin: 0.2 + "em" }}>6 ore fa</p></li>

                <li className="mt-3">La 'Sindrome della Papera' ci riguarda <br/>
                <p style={{ fontSize: 0.9 + "em", margin: 0.2 + "em" }}>4 ore fa • 110 lettori</p></li>

                <li className="mt-3">Manuale di critica costruttiva <br/>
                <p style={{ fontSize: 0.9 + "em", margin: 0.2 + "em" }}>5 ore fa</p></li>

                <li className="mt-3">Assunzioni e nuovi premi in Ferrari <br/>
                <p style={{ fontSize: 0.9 + "em", margin: 0.2 + "em" }}>7 ore fa • 437 lettori</p></li>
              </Col>
          </Row>
        </Container>
      </ProfileStyled>
    </>
  );
};

export default Home;

