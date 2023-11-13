import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
const StyledButton = styled.background


const Home = () => {
  const [postData, setPostData] = useState([]);
  let data
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
          <Col className=' text-center d-sm border mb-5 mt-5 bg-white rounded col-md-6  pt-2' >
            <p style={{ fontSize: 16 + 'px', fontWeight: 'bold' }}>Username: {post.username}</p>
            <p style={{ fontSize: 10 + 'px' }}>Creazione: {formatData(post.createdAt)}</p>
            <p style={{ fontSize: 16 + 'px' }}>Contenuto del post: {post.text}</p>
            <p style={{ fontSize: 10 + 'px' }}>Aggiornamento: {formatData(post.updatedAt)}</p>
            <p style={{ fontSize: 10 + 'px' }}>ID: {post._id}</p>
          </Col >
        </Row >
      ))}
    </Container>
  );
};

export default Home;
