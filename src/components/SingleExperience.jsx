import { differenceInMonths, format } from "date-fns";
import styled from "styled-components";
import { it } from "date-fns/locale";
const SytledExperiece = styled.div`
  padding: 1em;
`;

export default function SingleExperience({ handleShow, exp }) {
  return (
    <SytledExperiece>
      <div className="d-flex">
        <div>
          <img src="https://placedog.net/50" alt=""></img>
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
        <div>
          <div className="icon position-relative" id="pencil">
            <i
              className="fas fa-pencil-alt position-absolute"
              onClick={() => handleShow(exp._id)}
            ></i>
          </div>
        </div>
      </div>
    </SytledExperiece>
  );
}
