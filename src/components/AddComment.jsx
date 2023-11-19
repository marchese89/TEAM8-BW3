import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllCommentsAction, token } from "../redux/actions";

const ProfileStyled = styled.div`
  .commento {
    padding: 1em !important;
    width: 70% !important;
    height: 80% !important;
    border-radius: 5em;
    margin-left: 1em;
    margin-right: 1em;
  }
  .bottone {
    display: inline;
  }
`;

const AddComment = ({ postId, toggleCommentArea }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: postId,
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const my_profileFromReduxStore = useSelector(
    (state) => state.profile.my_profile
  );

  const sendComment = async (e) => {
    e.preventDefault();
    toggleCommentArea(postId);
    try {
      setLoading(true);

      if (!comment.comment.trim()) {
        throw new Error("Il campo del commento non può essere vuoto");
      }
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...comment, elementId: postId }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Errore nella richiesta POST: ${response.status} ${response.statusText}`
        );
      } else {
        setComment({
          comment: "",
          rate: 1,
          elementId: postId,
        });
      }

      dispatch(getAllCommentsAction());
    } catch (error) {
      console.error(
        "Errore durante la richiesta POST dei commenti:",
        error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileStyled>
      <Row className="my-3">
        <Form onSubmit={sendComment}>
          <Form.Group className="mb-2">
            <span>
              <img
                src={my_profileFromReduxStore.image}
                className="rounded-circle"
                alt="avatar"
                width={50 + "px"}
                height={50 + "px"}
              />
            </span>
            <span>
              <input
                className="commento"
                type="text"
                placeholder="Aggiugni un commento..."
                value={comment.comment}
                onChange={(e) =>
                  setComment({ ...comment, comment: e.target.value })
                }
              />
            </span>
            <span>
              <Button
                className="bottone rounded-5 px-4"
                variant="primary"
                type="submit"
                disabled={loading}
              >
                {loading ? "Invio..." : "Invia"}
              </Button>
            </span>
          </Form.Group>
        </Form>
      </Row>
    </ProfileStyled>
  );
};

export default AddComment;
