import { useEffect } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Plus, PersonAdd } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import placeholder from "../img/img_placeholder.jpg";
const StyledUse = styled.div`
  .sectionProfile {
    line-height: 1;
    margin-left: 4%;
  }
  .sectionProfile h5 {
    font-size: 1em;
  }
  .sectionProfile p {
    font-size: 0.8em;
  }
  .profilePill {
    padding: 2%;
  }
  .collegamenti {
    font-size: 0.8em;
    padding: 0;
  }
`;

const RecentProfile = ({ user }) => {
  return (
    <StyledUse>
      <div className=" my-1 mx-2 d-flex profilePill flex-wrap ">
        <img
          src={user !== null ? user.image : placeholder}
          alt="imgProfile"
          width={40}
          height={40}
          className="rounded-5 mx-2"
        />
        <section className="sectionProfile">
          <h5 className="m-0">
            {user !== null ? user.name : "     "}{" "}
            {user !== null ? user.surname : "    "}
          </h5>
          <p className="m-0">Full-stack-developer</p>
        </section>
        <Container className="w-50">
          <Button className="rounded-pill bg-light text-primary collegamenti d-flex align-items-center px-2">
            <PersonAdd className="mx-1" /> Collegati
          </Button>
        </Container>
      </div>
    </StyledUse>
  );
};

export default RecentProfile;
