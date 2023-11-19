import React, { useState, useEffect } from "react";
import { Row, Spinner } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllCommentsAction, token } from "../redux/actions";

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
`;

const AllComments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
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
      {loading && (
        <Row className="mb-2 text-center justify-content-center">
          <Spinner animation="border " variant="primary" />
        </Row>
      )}
      <StyledAllComments>
        {comments.map((comment) => (
          <div
            key={comment._id}
            className="d-flex justify-content-between comment"
          >
            <div className="text-break">{comment.comment}</div>
            <div>
              {comment.author === my_profileFromReduxStore.email ? (
                <Trash
                  className="trash"
                  onClick={() => {
                    deteteComment(comment._id);
                  }}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </StyledAllComments>
    </>
  );
};

export default AllComments;
