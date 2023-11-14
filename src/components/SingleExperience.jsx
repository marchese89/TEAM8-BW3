import styled from "styled-components";

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
            {exp.startDate} - {exp.endDate} - durata complessiva
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
