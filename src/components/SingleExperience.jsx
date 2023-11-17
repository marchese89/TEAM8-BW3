import { differenceInMonths, format } from "date-fns";
import styled from "styled-components";
import { it } from "date-fns/locale";
import { useLocation } from "react-router-dom";
import placeholder from "../img/img_placeholder.jpg";

const SytledExperiece = styled.div`
  padding: 1em;
  .exp-img {
    width: 50px;
    height: 50px;
  }
`;

export default function SingleExperience({ handleShow, exp }) {
  const location = useLocation();
  return (
    <SytledExperiece>
      <div className="d-flex">
        <div>
          <img
            src={exp.image !== undefined ? exp.image : placeholder}
            className="exp-img"
            alt=""
          ></img>
        </div>
        <div className="ms-3 flex-grow-1">
          <div>
            <strong>{exp.role}</strong>
          </div>
          <div>{exp.company}</div>
          <div>
            {format(new Date(exp.startDate), "MMM yyyy", { locale: it })} -{" "}
            {format(new Date(exp.endDate), "MMM yyyy", { locale: it })} -{" "}
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
          </div>
        </div>
        {location.pathname === "/in/me/details/experience/" && (
          <div className="icon " id="pencil">
            <i
              className="fas fa-pencil-alt "
              onClick={() => handleShow(exp._id)}
            ></i>
          </div>
        )}
      </div>
    </SytledExperiece>
  );
}
