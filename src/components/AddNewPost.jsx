import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col, Image } from 'react-bootstrap';
import { Calendar, Calendar3, CalendarFill, CameraFill, ImageFill, Newspaper, } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import styled from "styled-components";
const ProfileStyled = styled.div`
.commento {
  padding: 0.8em !important;
  width:80% !important;
  height: 80% !important;
  border-radius:5em;
  margin-left:1em;
  margin-right:1em;
}
.imgicon{
  color:#50ABE4;
  margin-right:0.7em;
  margin-left:1em
}
.calendar{
  color:#cc6d00;
  margin-right:0.7em;
  margin-left:3em
}
.newspaper{
  color:#ff673a;
  margin-right:0.7em;
  margin-left:3em
}
span{
  font-weight:600;
  color:#626060;
}
.hover:hover{
  cursor: pointer
}
`

const NewPost = ({ onPost }) => {
  const [show, setShow] = useState(false);
  const [postText, setPostText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  
  const my_profileFromReduxStore = useSelector(
    (state) => state.profile.my_profile
  );  


  const handleClose = () => {
    setShow(false);
    // Resettare il testo del post e il file selezionato quando si chiude il modale
    setPostText("");
    setSelectedFile(null);
  };

  const handleShow = () => setShow(true);

  const handlePost = () => {
    // Esegui l'azione di pubblicazione del post, includendo il testo e il file
    onPost(postText, selectedFile);
    // Chiudi il modale
    handleClose();
  };

  const handleFileChange = (event) => {
    // Gestisci il cambiamento del file selezionato
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const openFileInput = () => {
    // Apre l'input di tipo "file" quando si clicca sull'icona
    document.getElementById("fileInput").click();
  };

  return (
    <ProfileStyled>
    <span>
      <img
        src={my_profileFromReduxStore.image}
        className='rounded-circle'
                          
        alt="avatar"
        width={50 + "px"}
        height={50 + 'px'}
      />
    </span>
<input size="lg" type="text" placeholder="Avvia un post" className='commento' onClick={handleShow} />
<div className='mt-3'>
<ImageFill className='imgicon hover'/><span className='hover'>Contenuti multimediali</span>
<Calendar3 className='calendar hover'/><span className='hover'>Evento</span>
<Newspaper className='newspaper hover'/><span className='hover'>Scrivi un articolo</span>
</div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuovo Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Scrivi il tuo post qui..."
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
          <div className="mt-3">
            {/* Immagine/icona cliccabile */}
            <CameraFill
              size={30}
              style={{ cursor: 'pointer' }}
              
            />
            {/* Input di tipo "file" nascosto */}
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handlePost}>
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </ProfileStyled>
  );
};

export default NewPost;