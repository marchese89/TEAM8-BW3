import { useEffect, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { PencilFill, Trash } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { getAllCommentsAction, token } from "../redux/actions";

export default function SingleComment({
  comment,
  my_profileFromReduxStore,
  deteteComment,
}) {
  const [showModify, setShowModify] = useState(false);
  const [commentText, setcommentText] = useState("");
  useEffect(() => {
    setcommentText(comment.comment);
  }, []);

  const dispatch = useDispatch();

  function modifyComment() {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + comment._id,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...comment, comment: commentText }),
      }
    )
      .then((response) => {
        if (response.ok) {
          dispatch(getAllCommentsAction());
        } else {
          throw new Error("errore nella fetch");
        }
      })

      .catch((err) => console.log("ERRORE!", err));
  }

  return (
    <div key={comment._id} className="d-flex justify-content-between comment">
      {!showModify && <div className="text-break">{comment.comment}</div>}
      {showModify && (
        <div className="d-flex">
          <FormControl
            value={commentText}
            onChange={(e) => {
              setcommentText(e.target.value);
            }}
          ></FormControl>
          <Button
            className="ms-3 rounded-5"
            onClick={() => {
              setShowModify(false);
              modifyComment();
            }}
          >
            Modifica
          </Button>
        </div>
      )}
      <div>
        {comment.author === my_profileFromReduxStore.username ? (
          <>
            {!showModify && (
              <PencilFill
                className="me-3 pencil"
                onClick={() => {
                  setShowModify(true);
                }}
              />
            )}
            <Trash
              className="trash"
              onClick={() => {
                deteteComment(comment._id);
              }}
            />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
