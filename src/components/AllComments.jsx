import React, { useState, useEffect } from "react";
import { Row, Spinner } from "react-bootstrap";

const AllComments = ({ author }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU3YTk4YjI3NmVhNjAwMThmNTNjOWYiLCJpYXQiOjE3MDAyNDM4NTEsImV4cCI6MTcwMTQ1MzQ1MX0.pb4ceFIy4XrkaGzRpmwwNeT4_9PhBZ5MDbDj6cn0qZw",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Errore nella richiesta GET");
      }

      const data = await response.json();
      console.log("commenti", data);
      setComments(data.filter((comment) => comment.author === author));
    } catch (error) {
      console.error(
        "Errore durante la richiesta GET dei commenti:",
        error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [author]);

  return (
    <>
      {loading && (
        <Row className="mb-2 text-center justify-content-center">
          <Spinner animation="border " variant="primary" />
        </Row>
      )}
      <div>
        {comments.map((comment) => (
          <li key={comment._id}>{comment.comment}</li>
        ))}
      </div>
    </>
  );
};

export default AllComments;
