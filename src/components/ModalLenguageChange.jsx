import styled from "styled-components";
import {Col, Container} from "react-bootstrap";
import {Plus} from "react-bootstrap-icons";

const StyledP=styled.p`
font-size: 0.8em;
`
const StyledDiv=styled.div`
  background: rgba(220, 241, 245, 0.24);

`



const ModalLanguage = ()=>{






    return(
        <div
            className="modal fade"
            id="modalLarge"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >


            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="ModalTitle">
                            Language Settings
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <StyledDiv className="modal-body d-flex">
                        <Col xl={6} className={"d-flex align-items-center"}>
                         <img width="70" height="70" src="https://img.icons8.com/emoji/96/globe-with-meridians-emoji.png" alt="globe-with-meridians-emoji"/>
                         <StyledP className={'m-0 mx-1'}>Aggiungi più di una lingua al tuo profilo, così sarà più facile trovarti.</StyledP>
                        </Col>
                        <Col xl={6} className={'d-flex align-items-center mx-2'}>
                            <img width="64" height="64" src="https://img.icons8.com/nolan/64/glasses.png" alt="glasses"/>
                            <StyledP className={'m-0 mx-2'}>Se disponibile, mostreremo il tuo profilo nella lingua di chi lo visita.
                                Se non c’è corrispondenza, verrà mostrato il tuo profilo predefinito.</StyledP>
                        </Col>
                    </StyledDiv>
                    <Container className="modal-body">
                        <h4>Language</h4>
                        <button className={'btn rounded-pill border-dark py-1 px-3 mx-1'}>Italiano</button>
                        <button className={'btn rounded-pill border-dark py-1 px-3 mx-1'}>Add Language <span><Plus/></span></button>
                    </Container>


                </div>
            </div>
        </div>
    )
}

export default ModalLanguage