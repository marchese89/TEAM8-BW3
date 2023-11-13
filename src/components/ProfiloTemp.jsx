import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import '../stylingprofile/style.css'
import Button from 'react-bootstrap/Button';

const ProfiloTemp = function () {



    return (
        <Container >
            <div className="containermain">
                <div className="containercover">
                    <Image src="https://images.pexels.com/photos/13566084/pexels-photo-13566084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="cover" />

                </div>
                <Image src='https://images.pexels.com/photos/14941556/pexels-photo-14941556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    className="avatar" />

                <div className="containerinfo mt-4">
                    <p className="name">Thomas Elsener</p>
                    <p>Aftersales Manager bei Ducati (Schweiz) AG</p>
                    <div className="containerinfosmall">
                        <p>Svizzera</p>
                        <p className="inlineblockp bold">500</p><p className="inlineblockp ms-1">Collegamenti</p>
                    </div>
                    <Container>
                        <Row>
                            <Col className="col-12 col-md-6">
                                <div className="containerbutton">
                                    <button variant="primary" className="buttonfull">
                                        <i class="bi bi-person-plus-fill"></i><p className="buttonfulltext"> &nbsp;Collegati</p>
                                    </button>
                                    <button variant="primary" className="buttonfull ms-2">
                                        <i class="bi bi-person-plus-fill"></i><p className="buttonfulltext"> &nbsp;Collegati</p>
                                    </button>
                                    <button variant="primary" className="buttonfull ms-2">
                                        <i class="bi bi-person-plus-fill"></i><p className="buttonfulltext"> &nbsp;Collegati</p>
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Container>
    )
}

export default ProfiloTemp