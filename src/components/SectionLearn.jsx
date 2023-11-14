import {Button, Card, Col, Row} from "react-bootstrap";
import styled from "styled-components";




const StyledH4=styled.h4` font-size: 0.8em;
 margin-top: 3%;
 margin-left: 3%;
`


// const MyVideoContainer = styled.div`
//  border-radius: 5px;
//  border: 1px solid rgba(128, 128, 128, 0.51);
//  height: 80px;
//  width: 150px;
// `


// const MyContainer=styled.div`
//  display: flex;
//  align-items: center;
//  font-weight: bold;
// `




const SectionLearn=()=>{


    return(
        <Row>
            <Card>
                <StyledH4 className={'mx-4 my-2'}> Learning </StyledH4>
                <div>
                    <Col className={'m-2'}>
                        <Card.Body className={'mx-2 d-flex p-0'}>
                            <Card.Img className={'bg-primary'}>
                            </Card.Img>
                            <p className={'mx-2 my-0'}>Lorem ipsum sit dolor esque tempus fugit</p>
                        </Card.Body>
                        <Card.Body className={'mx-2 mt-2 d-flex p-0 '}>
                            <Card.Img className={'bg-primary'}>
                            </Card.Img>
                            <p className={'mx-2 my-0'}>Lorem ipsum sit dolor esque tempus fugit</p>
                        </Card.Body>
                        <Card.Footer className={'mt-3 text-center'}>
                            <Button className={'rounded-pill p-0 px-2 py-1 border-light'}> Scopri Di Più </Button>
                        </Card.Footer>
                    </Col>
                </div>
            </Card>
        </Row>
    )




}


export default SectionLearn


