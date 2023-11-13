import { Plus } from "react-bootstrap-icons";
import styled from "styled-components";

export default function ExperienceToModify() {
  const StyledDiv = styled.div`
    font-size: 16px;
    border: 1px solid #eae8e5;
    padding: 0.5em;
    width: 22em;
    .icon {
      width: 1.3em;
      height: 1.3em;
      font-size: 1.4em;
      color: #5e5e5e;
      cursor: pointer;
      margin-top: 0;
    }
    .icon.fs-1 {
      border-radius: 50%;
    }
    .icon:hover {
      background-color: #ebebeb;
    }

    #pencil {
      border-radius: 50%;
      width: 2.2em;
      height: 2.2em;
      dispay: flex;
      justify-content: center;
      align-items: center;
    }
    .fa-pencil-alt.position-absolute {
      top: 0.5em;
      left: 0.6em;
    }
    #plus {
      right: 1em;
    }
  `;
  return (
    <StyledDiv className="d-flex flex-column rounded-3 text-black">
      <div className="d-flex justify-content-between">
        <h4>Esperienza</h4>
        <div id="buttons" className="d-flex flex-column">
          <Plus className="icon fs-1" id="plus" />
          <div className="icon position-relative" id="pencil">
            {/* <Pencil id="pencil" /> */}
            <i
              className="fas fa-pencil-alt position-absolute"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            ></i>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}
