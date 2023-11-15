import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";

const StyledEv = styled.div`
  .event_card {
    color: #126bc4;
    font-size: 0.8em;
    font-weight: bold;
  }
  .event_card:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .card_footer {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    color: #666666;
  }
  .card_footer:hover {
    background-color: rgba(194, 197, 206, 0.5);
    cursor: pointer;
    color: black;
  }
  .addPlus:hover {
    background-color: rgba(194, 197, 206, 0.5);
    border-radius: 50%;
  }
`;

const CardEvent = () => {
  return (
    <StyledEv className="mt-2">
      <Card>
        <Card.Body>
          <div className="event_card px-2 pb-2">Gruppi</div>
          <div className="event_card px-2 pb-2 d-flex">
            Eventi
            <Plus className="ms-auto addPlus" />
          </div>
          <div className="event_card px-2 pb-2">Hashtag Seguiti</div>
        </Card.Body>
        <Card.Footer className="card_footer">
          <h5 className={"fs-6"}>Scopri di più </h5>
        </Card.Footer>
      </Card>
    </StyledEv>
  );
};

export default CardEvent;
