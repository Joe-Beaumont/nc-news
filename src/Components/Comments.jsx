import { getCommentsById, postNewComment } from "../Api"
import { useParams } from "react-router"
import React, { useContext } from "react"
import { useState, useEffect } from "react";
import { CommentCard } from "../Cards/CommentCard";
import { ErrorComponent } from "./Error";
import { CurrentUser } from "../Contexts/User";

export function CommentsByArticleId() {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const { article_id } = useParams()

    useEffect(() => {
        getCommentsById(article_id)
            .then((allComments) => {
                setComments(allComments)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <ErrorComponent message={error.message} />;
    }

    return (
        <ul className="List">
            {comments.map((comment) => {
                return (
                    <li key={comment.comment_id}>
                        <div>
                            <CommentCard comment={comment} />
                            <br />
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export function PostComment() {
    const [newComment, setNewComment] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const { article_id } = useParams()
    const { user } = useContext(CurrentUser)

    const request = { params: article_id, body: { body: newComment, username: user } }

    function postComment(event) {
        event.preventDefault()
        setIsLoading(true)
        postNewComment(request)
            .then(() =>{
                setNewComment("")})
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
        }

        if (isLoading) {
            return <p>Loading...</p>
        }

        if (error) {
            return <ErrorComponent message={error.message} />;
        }

    return (
        <form onSubmit={postComment}>
            <label>
                Post Comment
                <input value={newComment}
                    onChange={(event) => setNewComment(event.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}