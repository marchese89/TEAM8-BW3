import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllCommentsAction, token } from "../redux/actions";
import SingleComment from "./SingleComment";

const StyledAllComments = styled.div`
  .trash {
    font-size: 1.5em;
  }
  .trash:hover {
    cursor: pointer;
    color: red;
  }
  .comment {
    padding: 1em;
  }
  .pencil {
    color: grey;
  }
  .pencil:hover {
    cursor: pointer;
    color: black;
  }
`;

const AllComments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const commentsFromReduxStore = useSelector(
    (state) => state.comments.all_comments
  );

  const my_profileFromReduxStore = useSelector(
    (state) => state.profile.my_profile
  );

  const dispatch = useDispatch();

  function deteteComment(commentId) {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + commentId, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch(getAllCommentsAction());
        } else {
          throw new Error("errore nella fetch");
        }
      })

      .catch((err) => console.log("ERRORE!", err));
  }

  useEffect(() => {
    setComments(
      commentsFromReduxStore.filter((comment) => comment.elementId === postId)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentsFromReduxStore]);

  return (
    <>
      <StyledAllComments>
        {comments.map((comment) => {
          return (
            <SingleComment
              comment={comment}
              key={comment._id}
              my_profileFromReduxStore={my_profileFromReduxStore}
              deteteComment={deteteComment}
            />
          );
        })}
      </StyledAllComments>
    </>
  );
};

export default AllComments;
