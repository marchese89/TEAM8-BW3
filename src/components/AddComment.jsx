import React, { useState, useEffect } from "react";
import { Form, Button, Row, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import AllComments from "./AllComments";
import styled from "styled-components";
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

const AddComment = ({ postId, author, fetchComments }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: postId,
  });
  const [loading, setLoading] = useState(false);

  const my_profileFromReduxStore = useSelector(
    (state) => state.profile.my_profile
  );

  // const fetchComments = async () => { };

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (!comment.comment.trim()) {
        throw new Error("Il campo del commento non può essere vuoto");
      }
      console.log("commento", comment);
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzNDFhMmRkOTllZjAwMTlhMDkyZmUiLCJpYXQiOjE2OTk5NTUxMDYsImV4cCI6MTcwMTE2NDcwNn0.f58KFLVbD0YqxkSlMLUZlkjHQLFooaODPwT0pwQg4jQ",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...comment, elementId: postId }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Errore nella richiesta POST: ${response.status} ${response.statusText}`
        );
      }

      await fetchComments();
    } catch (error) {
      console.error(
        "Errore durante la richiesta POST dei commenti:",
        error.message
      );
    } finally {
      setLoading(false);
    }
  };

  console.log(comment.comment);
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
                className="bottone"
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
