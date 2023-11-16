import { differenceInMonths, format } from "date-fns";
import styled from "styled-components";
import { it } from "date-fns/locale";
import { useLocation } from "react-router-dom";
import placeholder from "../img/img_placeholder.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";

const StyledP = styled.div`
  font-size: 0.6em;
  color: #868686;
  margin-bottom: 0;
`;
const StyledData = styled.div`
  font-size: 0.6em;
  color: #868686;
`;

const StyledRole = styled.h5`
  font-size: 0.8em;
  font-weight: bold;
  margin: 0;
`;

export default function SingleExperience({ handleShow, exp }) {
  const location = useLocation();
  return (
    <Row className="mb-3">
      <Card>
        <Col className="d-flex">
          <div className="d-flex align-items-center">
            <img
              width={40}
              height={40}
              src={exp.image !== undefined ? exp.image : placeholder}
              className="exp-img d-flex flex-column"
              alt=""
            ></img>
          </div>
          <Container>
            <div>
              <StyledRole className="role">{exp.role}</StyledRole>
            </div>
            <div className="d-flex flex-column">
              <StyledP>{exp.company}</StyledP>
              <StyledData className="dataJob ">
                {format(new Date(exp.startDate), "MMM yyyy", { locale: it })} -{" "}
                {format(new Date(exp.endDate), "MMM yyyy", { locale: it })}
                <br />
                {Math.floor(
                  differenceInMonths(
                    new Date(exp.endDate),
                    new Date(exp.startDate)
                  ) / 12
                ) > 0
                  ? Math.floor(
                      differenceInMonths(
                        new Date(exp.endDate),
                        new Date(exp.startDate)
                      ) / 12
                    ) + " anni e"
                  : ""}{" "}
                {differenceInMonths(
                  new Date(exp.endDate),
                  new Date(exp.startDate)
                ) %
                  12 >
                0
                  ? (differenceInMonths(
                      new Date(exp.endDate),
                      new Date(exp.startDate)
                    ) %
                      12) +
                    " mesi"
                  : ""}
              </StyledData>
            </div>
          </Container>
        </Col>
        {location.pathname === "/in/me/details/experience/" && (
          <div>
            <div className="icon position-relative" id="pencil">
              <i
                className="fas fa-pencil-alt position-absolute"
                onClick={() => handleShow(exp._id)}
              ></i>
            </div>
          </div>
        )}
      </Card>
    </Row>
  );
}
