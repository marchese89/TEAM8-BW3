import React, { useState } from 'react';
import { Button, Modal, Form, Row } from 'react-bootstrap';
import { CameraFill } from 'react-bootstrap-icons';

const NewPost = ({ onPost }) => {
  const [show, setShow] = useState(false);
  const [postText, setPostText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  
  const handleClose = () => {
    setShow(false);
    // Resettare il testo del post e il file selezionato quando si chiude il modale
    setPostText('');
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
    document.getElementById('fileInput').click();
  };

  return (
    <>
       <Row className="mb-5 ">




<Form.Control size="lg" type="text" placeholder="Avvia un post" onClick={handleShow} />
      

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
              onClick={openFileInput}
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
      </Row>
    </>
  );
};

export default NewPost;
