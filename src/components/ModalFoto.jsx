import {Button, Col, Container, FormControl, FormGroup, Modal, Row} from "react-bootstrap";
import {useState} from "react";
import styled from "styled-components";
import asbulla from "../assets/asbulla.jpg"
import nyan from "../assets/nyan.jfif"
import papa from "../assets/papa.webp"
import astro from "../assets/astrocat.jpg"
import astronaut from "../assets/immagine due.jpg"
const StyledDiv=styled.div`

  .slogan {
    display: flex;
    justify-content: center;
  }

  

  .nyancat {
    border-radius: 50%;
    margin: 2%;
  }

  .asbulla {
    border-radius: 50%;
    margin: 2%;
  }

  .papa {
    border-radius: 50%;
    margin: 2%;
  }

  .astro {
    border-radius: 50%;
    margin: 2%;
  }

  .astronaut {
    border-radius: 50%;
    margin: 2%;
  }

  .trueId {
    display: flex;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 5%;
    color: rgba(128, 128, 128, 0.79);
  }
  
  Button{
    margin-left: 1%;
    margin-right: 1%;
  }

`

const ModalFoto = ()=>{
 const [show, setShow]=useState(true)


    const showChange = () => {
     setShow(true)

    }


    return(
        <StyledDiv>
            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modalPhoto">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className={'modal-header'}>
                        <div className={'modal-title'}> <h5 className={'px-3 py-3'}>Add a Photo</h5> </div>
                        <button
                            type="button"
                            className="btn-close me-2"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                        </div>
                        <div className='modal-body'>
                            <div className={'text-center'}>
                                <Container className={'slogan mt-3'}>
                                     <Col className={'col-8'}>
                                    <p className={'h4'}>Your photo doesn't have to be a close-up of you!<br/>
                                    But something that represents you.</p>
                                    </Col>
                                </Container>
                            </div>
                            <div className={'d-flex justify-content-center mt-4'}>
                                <img height={50} width={50} className="asbulla" src={asbulla} alt={'logo'} />
                                <img height={80} className="nyancat" src={nyan} alt={'logo'} />
                                <img height={100}  width={100} className="papa" src={papa} alt={'logo'} />
                                <img height={80}  width={80} className="astro" src={astro} alt={'logo'} />
                                <img height={50}  width={50} className="astronaut" src={astronaut} alt={'logo'} />
                            </div>

                            <div className= "trueId">
                                <Col className={' col-10 text-center'}>
                                Chiediamo agli utenti di LinkedIn di utilizzare le loro vere identità, quindi scatta o
                                carica una tua foto. Poi ritagliala, applica dei filtri e perfezionala come vuoi.
                                </Col>
                            </div>
                            <div className={'modal-footer'}>
                                <Container className={'d-flex justify-content-end'}>
                                    <Button>Carica Foto</Button>
                                    <Button>Usa Fotocamera</Button>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledDiv>
    )
}

export default ModalFoto