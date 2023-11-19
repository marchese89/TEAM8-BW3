import React, { useState, useEffect } from "react";
import { Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const AllComments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const commentsFromReduxStore = useSelector(
    (state) => state.comments.all_comments
  );

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
      <div>
        {comments.map((comment) => (
          <p key={comment._id}>{comment.comment}</p>
        ))}
      </div>
    </>
  );
};

export default AllComments;
