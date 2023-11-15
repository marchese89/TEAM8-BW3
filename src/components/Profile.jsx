import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allProfilesAction, myProfileAction } from "../redux/actions";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
// import '../stylingprofile/style.css'
import Experience from "./Experience";

const ProfileStyled = styled.div`
  .paddingzero {
    padding: 0 !important;
  }

  .containermain {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-radius: 15px;
    overflow: hidden;
  }

  .cover {
    object-fit: cover;
    object-position: 0 -200px;
    width: 100%;
  }

  .containercover {
    height: 400px;
    width: 100%;
    overflow: hidden;
  }

  .containerinfo {
    padding: 2em;
    line-height: 10px;
  }

  .containerinfosmall {
    line-height: 8px;
    font-size: 0.8em;
    color: rgb(134, 134, 134);
  }

  .avatar {
    position: absolute;
    border: 5px solid #fff;
    border-radius: 50%;
    width: 170px;
    height: 170px;
    object-fit: cover;

    bottom: 190px;
    left: 35px;
  }

  .containercertification {
    padding-top: 2em;
    padding-left: 4em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .certificationinfo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: normal;
    margin-bottom: 12px;
  }

  .certificationinfoIMG {
    width: 30px;
    height: 30px;
  }

  .certificationinfoTEXT {
    font-size: 0.9em;
    font-weight: 600;
    padding-left: 10px;
    margin-bottom: 0;
  }

  /*TESTIINFORMAZIONI*/

  .name {
    font-size: 1.5em;
    font-weight: 500;
  }

  .inlineblockp {
    display: inline-block;
  }

  .bold {
    font-weight: 500;
  }

  /*TUTTI I BOTTONI*/

  .containerbutton {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .buttonfull {
    border-radius: 20px !important;
    display: inline-block;
    width: 140px;
    height: 30px;
    padding-top: 6px;
    background-color: #016adb;
    color: #fff;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s;

    display: flex;
    align-items: baseline;
    justify-content: center;
  }

  .buttonfull:hover {
    background-color: #014691;
  }

  .buttonfulltext {
    font-weight: 600 !important;
  }

  .buttonoutlined {
    border-radius: 20px !important;
    display: inline-block;
    width: 140px;
    height: 30px;
    padding-top: 8px;
    color: #016adb;
    border: 1px solid #016adb;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s;
    background-color: #fff;
  }

  .buttonoutlined:hover {
    background-color: #d1e6fd;
  }

  .buttonoutlinedtext {
    font-weight: 500;
  }

  .buttonother {
    border-radius: 20px !important;
    display: inline-block;
    width: 70px;
    height: 30px;
    padding-top: 8px;
    color: #646464;
    border: 1px solid #646464;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s;
    background-color: #fff;
  }

  .buttonother:hover {
    background-color: #ebebeb;
  }

  .buttonothertext {
    font-weight: 500;
  }
`;

export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProfilesAction());
    dispatch(myProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ProfileStyled>
        <Container className="mt-5">
          <div className="containermain">
            <div className="containercover">
              <Image
                src="https://images.pexels.com/photos/13566084/pexels-photo-13566084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="cover"
              />
            </div>
            <Image
              src="https://images.pexels.com/photos/14941556/pexels-photo-14941556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="avatar"
            />
            <Row>
              <Col className="col-6">
                <div className="containerinfo mt-4">
                  <p className="name">Thomas Elsener</p>
                  <p>Aftersales Manager bei Ducati (Schweiz) AG</p>
                  <div className="containerinfosmall">
                    <p>Svizzera</p>
                    <p className="inlineblockp bold">500</p>
                    <p className="inlineblockp ms-1">Collegamenti</p>
                  </div>
                  <Container className="paddingzero">
                    <Row>
                      <Col className="col-12">
                        <div className="containerbutton">
                          <button variant="primary" className="buttonfull">
                            <i className="bi bi-person-plus-fill"></i>
                            <p className="buttonfulltext"> &nbsp;Collegati</p>
                          </button>
                          <button
                            variant="primary"
                            className="buttonoutlined ms-2"
                          >
                            <p className="buttonoutlinedtext">Messaggio</p>
                          </button>
                          <button
                            variant="primary"
                            className="buttonother ms-2"
                          >
                            <p className="buttonothertext">Altro</p>
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
              <Col className="col-6">
                <div className="containercertification mt-4">
                  <div className="certificationinfo">
                    <Image
                      src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
                      className="certificationinfoIMG"
                    />
                    <p className="certificationinfoTEXT mt-1">
                      Epicode Network
                    </p>
                  </div>
                  <div className="certificationinfo">
                    <Image
                      src="https://www.acousticbulletin.com/wp-content/uploads/2020/01/70-706384_illuminati-clipart-all-illuminati-logo-png.png"
                      className="certificationinfoIMG"
                    />
                    <p className="certificationinfoTEXT mt-1">
                      Illuminati Network
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </ProfileStyled>
      <Experience />
    </>
  );
}
