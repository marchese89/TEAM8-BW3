import {Card, Col, Container, Modal, Row} from "react-bootstrap";
import styled from "styled-components";
import {Bookmark,Alipay, Person, Camera} from "react-bootstrap-icons";
import imgp from '../assets/LinkImg.PNG'
import ModalFoto from "./ModalFoto";

const StyledCard = styled.div`
  //.headerProfile{
  //  padding-top: 0;
  //  padding-left:0;
  //  padding-right: 0;
  //}

  .h4Modify {
    font-size: 15px;
    font-weight: bold;
  }

  .link {
    font-size: 10px;
    color: #2a2aef;
  }
  
  .link:hover{
    cursor: pointer;
  }

  .subt {
    font-size: 12px;
    color: #a1a0a0;
    margin: 0;

  }

  .expandC {
    font-weight: bold;
    font-size: 13px;
    margin: 0;
    display: flex;
    align-content: center;
    color: rgba(51, 51, 51, 0.88);
  }

  .rowEvents:hover {
    background: rgba(161, 160, 160, 0.39);
    cursor: pointer;
    color: rgba(72, 71, 71, 0.82);
  }

  .rowev {
    border-bottom: 0.5px solid rgba(128, 128, 128, 0.56);
    border-top: 0.5px solid rgba(128, 128, 128, 0.56);
    margin: 0;
  }

  .rowev2 {
    border-bottom: 0.5px solid rgba(128, 128, 128, 0.56);
    margin: 0;
  }

  .rowev3 {
    margin: 0;
  }
  .roundedCamera{
    position: absolute;
    z-index: 6;
    //top: 25px;
    //right: 70px;
    margin-left: 38%;
    margin-top: -20%;
  }
  
`

const CardRight =()=>{

    return(
        <StyledCard className={'position-relative'}>

            <Card className={'rounded-bottom-2'}>
                <Col>
                    <Row className={'imgProfile'}>
                        <img height={100} src={imgp} alt={'logo'} />
                    </Row>
                </Col>
                <Card.Body className={'px-0'}>

                 <div  className={'roundedCamera '}>
                    <Camera

                        size={50} className={'camera'}/>
                 </div>
                <Row >
                    <h4 className="h4Modify text-center pt-4"> Ti diamo il benvenuto (nome) </h4>
                    <p className={'link text-center'}
                       data-bs-toggle="modal"
                       data-bs-target="#modalPhoto"
                    >Aggiungi una foto</p>
                </Row>
                    {/*<hr className={'p-0 m-0'}/>*/}
                    <Row className={'rowev'}>
                        <div className={'rowEvents py-2'}>
                        <p className={'subt d-flex'}> Collegamenti <Person size={15} className={'ms-auto'}></Person></p>
                        <p className={'expandC'}>Espandi la tua rete</p>
                        </div>

                    </Row>
                    {/*<hr className={'p-0 m-0 my-2'}/>*/}
                    <Row className={'rowev2'}>
                        <div className={'rowEvents py-2'}>
                        <p className={'subt'}>Accedi a strumenti e informazione in esclusiva</p>
                            <p className={'expandC my-1'}> <Alipay size={15} className={'mx-2'}/>  Prova premium gratis</p>
                        </div>
                    </Row>
                    <Row className={'rowev3'}>
                        <div className={'rowEvents py-2'}>
                            <p className={'expandC'}> <Bookmark size={15} className={'mx-2'}/>I miei elementi</p>
                        </div>
                    </Row>
                </Card.Body>
            </Card>
            <ModalFoto/>
        </StyledCard>

    )
}

export default CardRight