import React, { useState, useEffect } from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { HandThumbsUp, HandThumbsUpFill, ChatText, Share, SendFill } from 'react-bootstrap-icons';
const StyledButton = styled.background


const Home = () => {
  const [postData, setPostData] = useState([]);
  const [selected, setSelected] = useState(false);
  const [liked, setLiked] = useState(false);
  const fetchData = async () => {
    try {
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
  };

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

    <Container >
      {postData.map(post => (
        < Row className='justify-content-center grow-0' key={post._id}>
          <Col className=' d-sm border mb-5 mt-5 bg-white rounded col-md-6  pt-2' >
            <p style={{ fontSize: 1 + 'em', fontWeight: 'bold', margin: 0.2 + 'em' }}>Username: <img src={post.user.image} className='rounded-circle' alt="avatar" width={20 + 'px'} /> {post.username}</p>
            <p style={{ fontSize: 0.7 + 'em' }}>Creazione: {formatData(post.createdAt)}</p>
            <p style={{ fontSize: 1 + 'em' }}>Contenuto del post: {post.text}</p>
            <p style={{ fontSize: 0.7 + 'em', margin: 0.2 + 'em' }}>Aggiornamento: {formatData(post.updatedAt)}</p>
            <p style={{ fontSize: 0.7 + 'em' }}>ID: {post._id}</p>
            <hr />
            <div className='d-flex flex-wrap'  >
              <p onClick={() => setLiked(!liked)}
                // *DA FIXARE* Al click pollice colorato
                style={{ border: liked ? /*Aggiungere componente  */ <HandThumbsUpFill /> : <HandThumbsUp /> }} className='align-items-start align-text-center me-3 interazioni p-1 pb-1'><HandThumbsUp className='align-center me-1' />Consiglia</p> {/* Stato per mettere like */}
              <p onClick={() => setSelected(!selected)}
                // *DA FIXARE* Aprire solamente commenti del post selezionato 
                style={{ border: selected ? /*Aggiungere componente  */ '3px solid red' : 'none' }} className='align-items-start align-text-center me-3 interazioni p-1 pb-1'><ChatText className='align-center me-1' />Commenta</p>
              <p className='align-items-start align-text-center me-3 interazioni p-1 pb-1 '><Share className='align-center me-1' />Diffondi il post</p>
              <p className='align-items-start align-text-center interazioni p-1 pb-1'><SendFill className='align-center me-1' />Invia</p>
            </div>
          </Col >
        </Row >
      ))
      }
    </Container >
  );
};

export default Home;
