import { Card } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import styled from "styled-components";

const StyleUser = styled.div``;

const UserCard = () => {
  return (
    <StyleUser>
      <Card>
        <Card.Body>
          <img src="" alt="" />
          <div>
            {/* NAME */}

            <h5></h5>
          </div>
          <div>
            {" "}
            <Plus />{" "}
          </div>
        </Card.Body>
      </Card>
    </StyleUser>
  );
};
export default UserCard;
