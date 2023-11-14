import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import AllComments from './AllComments';

const AddComment = ({ postId }) => {
    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState(null);
    const [comment, setComment] = useState({
        comment: '',
        rate: 1,
        elementId: postId,
    });
    const [loading, setLoading] = useState(false);

    const fetchComments = async () => {
    };

    const sendComment = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            if (!comment.comment.trim()) {
                throw new Error('Il campo del commento non può essere vuoto');
            }

            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzNDFhMmRkOTllZjAwMTlhMDkyZmUiLCJpYXQiOjE2OTk5NTUxMDYsImV4cCI6MTcwMTE2NDcwNn0.f58KFLVbD0YqxkSlMLUZlkjHQLFooaODPwT0pwQg4jQ",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    comment: newComment,
                    rate: rating,
                    postId: postId,
                }),
            });

            if (!response.ok) {
                throw new Error(`Errore nella richiesta POST: ${response.status} ${response.statusText}`);
            }

            setNewComment('');
            await fetchComments();
        } catch (error) {
            console.error('Errore durante la richiesta POST dei commenti:', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (postId._id !== comment.elementId) {
            setComment({
                ...comment,
                elementId: postId._id,
            });
        }
    }, [postId._id, comment]);

    return (
        <>
            <div className="my-3">
                <Form onSubmit={sendComment}>
                    <Form.Group className="mb-2">
                        <Form.Label>Recensione</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Inserisci qui il testo"
                            value={comment.comment}
                            onChange={(e) => setComment({ ...comment, comment: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Valutazione</Form.Label>
                        <Form.Control
                            as="select"
                            value={comment.rate}
                            onChange={(e) => setComment({ ...comment, rate: e.target.value })}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={loading}>
                        {loading ? 'Invio...' : 'Invia'}
                    </Button>
                </Form>
            </div>
            <AllComments postId={postId} />
        </>
    );
};

export default AddComment;
