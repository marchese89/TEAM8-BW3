import React, { useState, useEffect } from 'react';
const AllComments = ({ postId }) => {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        try {
            console.log('ID del post per la richiesta dei commenti:', postId);

            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments?postId=${postId}`, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzNDFhMmRkOTllZjAwMTlhMDkyZmUiLCJpYXQiOjE2OTk5NTUxMDYsImV4cCI6MTcwMTE2NDcwNn0.f58KFLVbD0YqxkSlMLUZlkjHQLFooaODPwT0pwQg4jQ",
                    'Content-Type': 'application/json',
                },
            });
            console.log(response)

            if (!response.ok) {
                throw new Error('Errore nella richiesta GET');
            }

            const data = await response.json();
            setComments(data);
        } catch (error) {
            console.error('Errore durante la richiesta GET dei commenti:', error.message);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [postId]);

    return (
        <div>
            {comments.map((comment) => (
                <li key={comment._id}>{comment.comment}</li>
            ))}
        </div>
    );
};

export default AllComments;
