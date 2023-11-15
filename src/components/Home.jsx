import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { HandThumbsUp, ChatText, Share, SendFill } from 'react-bootstrap-icons';
import AddComment from './AddComment';
import Footer from './Footer';
import MyNavbar from './NavBar'
// import { useDispatch } from 'react-redux';
const ProfileStyled = styled.div`
.interazioni{
  padding: 0.6em !important;
}
.interazioni:hover{
  background-color: rgb(222, 220, 220);
  cursor: pointer;
}
/* Aggiungi questo stile al tuo foglio di stile */
#top {
  position: sticky;
  top: 0;
  z-index: 1000; /* o qualsiasi valore necessario */
}
#p{
  padding-top: 5em;
}
`;


const Home = () => {
  const [postData, setPostData] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(false);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://striveschool-api.herokuapp.com/api/posts/', {
        method: 'GET',

        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMmVjZWM1NWU3ZTAwMThmODNjODUiLCJpYXQiOjE2OTk4ODQ3NTAsImV4cCI6MTcwMTA5NDM1MH0.JwqWWy93veTxrqjHXsB3_IFB9m9gO6IYG7BOf9uxVKQ",
          'Content-Type': 'application/json',
        },

      });

      if (!response.ok) {
        throw new Error('Errore nella richiesta GET');
      }

      const data = await response.json();
      setPostData(data);
      console.log(data)
    } catch (error) {
      console.error('Errore durante la richiesta GET:', error.message);
    }
    finally {
      setLoading(false);
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
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return data.toLocaleDateString('it-IT', options);
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ProfileStyled>
        <div id='top'>
          <MyNavbar sticky="top" />
        </div>

        {loading &&
          <Row className='py-5 my-5 text-center justify-content-center'>
            <Spinner animation="border " variant="primary" /></Row>}

        <Container className='w-75' >
          {/* Map dei post  */}
          {postData.map(post => (
            < Row className='justify-content-center ' key={post._id}>
              <Col className=' d-sm border mb-2 mt-2 bg-white rounded col-md-6  pt-2' >
                {/* Avatar + Nome Utente  */}
                <p style={{ fontSize: 1 + 'em', fontWeight: 'bold', margin: 0.2 + 'em' }}> <img src={post.user.image} className='rounded-circle' alt="avatar" width={45 + 'px'} /> {post.username}</p>

                {/* Data di creazione del post con funzione per trasformare la stringa della data */}
                <p style={{ fontSize: 0.7 + 'em' }}>Creazione: {formatData(post.createdAt)}</p>
                {/* Contenuto del post  */}
                <p style={{ fontSize: 1 + 'em' }}>{post.text}</p>

                {/* Data di aggiornamento del post con funzione per trasformare la stringa della data */}
                <p style={{ fontSize: 0.7 + 'em', margin: 0.2 + 'em' }}>Aggiornamento: {formatData(post.updatedAt)}</p>
                <hr />

                <div className='d-flex flex-nowrap justify-content-center'  >
                  {/* Like  */}
                  <p onClick={() => setLiked(!liked)}
                    // *DA FIXARE* Al click pollice colorato
                    className='d-none rounded d-lg-block align-items-start align-text-center me-3 interazioni p-1 pb-1'><HandThumbsUp className='align-center me-1' />Consiglia</p> {/* Stato per mettere like */}
                  <p className='d-lg-none ms-3 me-4'><HandThumbsUp className=' align-center me-1' /></p>

                  {/* Commenta  */}
                  <p
                    onClick={() => toggleCommentArea(post._id)} className='d-none rounded d-lg-block align-items-start align-text-center me-4 interazioni p-1 pb-1'><ChatText className='align-center me-1' />Commenta</p>
                  <p onClick={() => toggleCommentArea(post._id)} className='d-lg-none me-4 '><ChatText className=' align-center me-1' /></p>

                  {/* Condividi  */}
                  < p className='d-none rounded d-lg-block align-items-start align-text-center me-3 interazioni p-1 pb-1 '><Share className=' align-center me-1' />Diffondi il post</p>
                  <p className='d-lg-none me-4 '><Share className=' align-center me-1' /></p>

                  {/* Invia  */}
                  <p className='d-none rounded d-lg-block align-items-start align-text-center interazioni p-1 pb-1'><SendFill className='align-center me-1' />Invia</p>
                  <p className='d-lg-none me-4 '><SendFill className=' align-center me-1' /></p>

                  {/* // Mostra il componente CommentArea selezionato */}
                </div>
                {post._id === selectedPostId && (
                  <>
                    <div>
                      <img src={post.user.image} className='rounded-circle' alt="avatar" width={20 + 'px'} />
                    </div>
                    <AddComment postId={selectedPostId} />
                  </>
                )}
              </Col >
            </Row >
          ))
          }
        </Container>
        <div id='p'>
          <Footer className='m-5' />
        </div>
      </ProfileStyled>

    </>
  );
};

export default Home;