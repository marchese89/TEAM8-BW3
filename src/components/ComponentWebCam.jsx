import { Button, Container, Card } from "react-bootstrap";
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
            <img src={imgSrc} alt="img" />
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
          <div className="retakeB">
            <Button onClick={save}>Save</Button>
            <Button onClick={retake}>Retake</Button>
          </div>
        )}
        <div className="buttonG mb-4">
          {show && (
            <Button onClick={captur} className="btn">
              Scatta
            </Button>
          )}
        </div>
      </Container>
    </StyledFoto>
  );
};

export default WebcamComponent;
