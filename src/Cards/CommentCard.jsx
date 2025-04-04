import React from "react"
import { DeleteComment } from "../Components/Comments"

export function CommentCard ({ comment }){

    return (
        <div className="Card">
            <br/>
            <p>{comment.body}</p>
            <p>Author: {comment.author}</p>
            <p>Created at: {comment.created_at}</p>
            <p>Votes: {comment.votes}</p>
            <button>Vote</button>
            <br/>
        </div>
    )
}

export function UserCommentCard ({ comment }){
    return (
        <div className="Card">
            <br/>
            <p>{comment.body}</p>
            <p>Author: {comment.author}</p>
            <p>Created at: {comment.created_at}</p>
            <p>Votes: {comment.votes}</p>
            <br/>
            <DeleteComment comment_id={comment.comment_id}/>
        </div>
    )
}
