import { useNavigate } from "react-router";
import styled from "styled-components";
import { userProfileAction } from "../redux/actions";
import { useDispatch } from "react-redux";

const StyledUser = styled.div`
  width: 30em;
  height: 4em;

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
  const dispatch = useDispatch();
  return (
    <StyledUser>
      <img src={user.image} alt="img-prof" className="img me-3" />
      <span
        onClick={() => {
          dispatch(userProfileAction(user._id));
          navigate("/profile/" + user._id);
        }}
      >
        {user.name} {user.surname}
      </span>
    </StyledUser>
  );
}

export default User;
