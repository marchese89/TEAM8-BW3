import { useNavigate } from "react-router";
import styled from "styled-components";
import { userProfileAction } from "../redux/actions";
import { useDispatch } from "react-redux";

const StyledUser = styled.div`
  display: flex;
  aling-items: center;
  height: 10em;
  border: 1px solid #66666;
  border-radius: 20px;
  margin-bottom: 20px;
  background-color: white;
  padding: 3px;
  .img {
    width: 35px;
    height: 35px;
    border-radius: 20px;
    margin: 10px;
  }
  span:hover {
    cursor: pointer;
  }
  .name {
    font-size: 18px;
    margin-top: 5px;
    font-weight: bold;
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
        <p className="name">
          {user.name} {user.surname}{" "}
        </p>
        <p className="ema">Email: {user.email}</p>
        <p>Posizione: {user.area}</p>
        <p>Lavoro: {user.bio}</p>
      </span>
    </StyledUser>
  );
}

export default User;
