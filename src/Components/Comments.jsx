import { getCommentsById } from "../Api"
import { useParams } from "react-router"
import React from "react"
import { useState, useEffect } from "react";
import { CommentCard } from "../Cards/CommentCard";
import { ErrorComponent } from "./Error";

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