import { getCommentsById } from "../Api"
import { useParams } from "react-router"
import React from "react"
import { useState, useEffect } from "react";
import { CommentCard } from "../Cards/CommentCard";

export function CommentsByArticleId(){
    const [comments, setComments] = useState([])
    const { article_id } = useParams()

    useEffect(() => {
        getCommentsById(article_id)
        .then((allComments) => {
            setComments(allComments)
        })
    }, [])

    
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