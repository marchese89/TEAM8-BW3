import React, { useState, useEffect } from "react";
import { Form, Button, Row, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import AllComments from "./AllComments";
import styled from "styled-components";
const ProfileStyled = styled.div`
.commento {
  padding: 1em !important;
  width:100%
  hei
}
`;

const AddComment = ({ postId, fetchComments }) => {
  console.log("post id: ", postId);
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
                          className='rounded-circle'
                          
                          alt="avatar"
                          width={50 + "px"}
                          height={50 + 'px'}
                        />
                      </span>
            <Badge pill bg='white' className="color-white w-75">
            <input
            className="commento rounded-circle"
              type="text"
              placeholder="Inserisci qui il testo"
              value={comment.comment}
              onChange={(e) =>
                setComment({ ...comment, comment: e.target.value })
              }
            /></Badge>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Invio..." : "Invia"}
          </Button>
        </Form>
      </Row>
      <AllComments postId={postId} />
    </ProfileStyled>
  );
};

export default AddComment;
