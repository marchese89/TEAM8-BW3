import { useEffect } from "react";
import { Card } from "react-bootstrap";
import papa from "../assets/papa.webp";
import styled from "styled-components";

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
    background: #f8f8f8;
    padding: 2%;
  }
`;

const RecentProfile = () => {
  return (
    <StyledUse>
      <Card>
        <div className="rounded-pill my-3 mx-2 d-flex profilePill ">
          <img
            src={papa}
            alt="imgProfile"
            width={40}
            height={40}
            className="rounded-5 mx-2"
          />
          <section className="sectionProfile">
            <h5 className="m-0">Name</h5>
            <p className="m-0">Lavoro</p>
          </section>
        </div>
      </Card>
    </StyledUse>
  );
};

export default RecentProfile;
