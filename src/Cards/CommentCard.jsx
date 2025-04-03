import React from "react"


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