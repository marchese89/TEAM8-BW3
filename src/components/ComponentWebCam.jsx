import { Button, Container, Card, ModalFooter } from "react-bootstrap";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import styled from "styled-components";

const StyledFoto = styled.div`
  .buttonG {
    display: flex;
    justify-content: center;
  }

  .retakeB {
    display: flex;
    justify-content: center;
    margin-top: 5%;
  }

  .webImg {
    border-radius: 50%;
  }
`;

const WebcamComponent = () => {
  // aggiunta cattura immagine
  const WebcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [photo, setPhoto] = useState({
    photo: imgSrc,
  });
  const [show, setShow] = useState(true);

  const captur = useCallback(() => {
    const imageSrc = WebcamRef.current.getScreenshot();
    console.log(imageSrc);
    setImgSrc(imageSrc);
    setShow(false);
  }, [WebcamRef]);

  const retake = () => {
    setImgSrc(null);
    setShow(true);
  };

  const save = () => {
    setPhoto(imgSrc);

    // Imposta le dimensioni del canvas sulla base delle dimensioni del video

    // Disegna l'immagine del fotogramma corrente sulla canvas

    // Puoi utilizzare canvas.toDataURL() per ottenere l'URL dei dati dell'immagi

    // Ora puoi utilizzare dataURL per creare un link di download o inviarlo al server
    // Ad esempio, creare un link di download
    const a = document.createElement("a");
    a.href = imgSrc;
    a.download = "captured_image.png";
    a.click();
  };

  return (
    <StyledFoto>
      <Container className="d-flex flex-column align-content-center">
        {imgSrc ? (
          <div className="d-flex justify-content-center mt-4">
            <img
              className="imgSet"
              src={imgSrc}
              alt="img"
              height={400}
              width={500}
            />
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <Webcam
              width={500}
              height={500}
              ref={WebcamRef}
              className="webImg"
            />
          </div>
        )}
        {imgSrc && (
          <ModalFooter className="retakeB">
            <Button
              className="mx-2 rounded-pill bg-light text-primary"
              onClick={save}
            >
              Save
            </Button>
            <Button
              className="mx-2 rounded-pill bg-light text-primary"
              onClick={retake}
            >
              Retake
            </Button>
          </ModalFooter>
        )}
        <ModalFooter className="buttonG mb-4">
          {show && (
            <Button
              onClick={captur}
              className="btn rounded-pill bg-light text-dark border-black"
            >
              Scatta
            </Button>
          )}
        </ModalFooter>
      </Container>
    </StyledFoto>
  );
};

export default WebcamComponent;
