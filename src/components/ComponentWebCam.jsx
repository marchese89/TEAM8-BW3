import { Button, Container } from "react-bootstrap";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import styled from "styled-components";

const StyledFoto = styled.div`
  .buttonG {
    display: flex;
    justify-content: center;
  }
`;

const WebcamComponent = () => {
  // aggiunta cattura immagine
  const WebcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [photo, setPhoto] = useState([
    {
      photo: "",
    },
  ]);

  const captur = useCallback(() => {
    const imageSrc = WebcamRef.current.getScreenshot();
    console.log(imageSrc);
    setImgSrc(imageSrc);
  }, [WebcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  const save = () => {
    setPhoto(imgSrc);
  };

  return (
    <StyledFoto>
      <Container className="d-flex flex-column align-content-center">
        {imgSrc ? (
          <div className="d-flex justify-content-center">
            <img src={imgSrc} alt="img" />
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <Webcam width={500} height={500} ref={WebcamRef} />
          </div>
        )}
        <div className="buttonG mb-4">
          <Button onClick={captur} className="btn">
            Scatta
          </Button>

          <Button onClick={retake}>Retake</Button>
          <Button onClick={save}>Save</Button>
        </div>
      </Container>
    </StyledFoto>
  );
};

export default WebcamComponent;
