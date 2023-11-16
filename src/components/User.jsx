import { useNavigate } from "react-router";
import styled from "styled-components";

const StyledUser = styled.div`
  width: 30em;
  height: 8em;
  .img {
    width: 35px;
    height: 35px;
  }
  span:hover {
    cursor: pointer;
  }
`;

function User({ user }) {
  const navigate = useNavigate();
  return (
    <StyledUser>
      <img src={user.image} alt="img-prof" className="img me-3" />
      <span
        onClick={() => {
          navigate("/profile/" + user._id);
        }}
      >
        {user.name} {user.surname}
      </span>
    </StyledUser>
  );
}

export default User;
