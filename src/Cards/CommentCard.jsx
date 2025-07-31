import React from "react"
import { DeleteComment } from "../Components/Comments"

export function CommentCard ({ comment }){

    return (
        <div className="flex-1 min-w-[250px] max-w-[1080px] bg-white text-black p-5 border border-black rounded">
            <p className="text-sm text-gray-600 mb-3">{comment.body}</p>
            <p className="text-2xl font-semibold mb-1">Author: {comment.author}</p>
            <p className="text-sm text-gray-600 mb-1">Created at: {comment.created_at}</p>
            <p className="text-sm text-gray-600 mb-1">Votes: {comment.votes}</p>
            <button>Vote</button>
        </div>
    )
}

export function UserCommentCard ({ comment }){
    return (
        <div className="flex-1 min-w-[250px] max-w-[1080px] bg-white text-black p-5 border border-black rounded">
            <p className="text-sm text-gray-600 mb-3">{comment.body}</p>
            <p className="text-2xl font-semibold mb-1">Author: {comment.author}</p>
            <p className="text-sm text-gray-600 mb-1">Created at: {comment.created_at}</p>
            <p className="text-sm text-gray-600 mb-1">Votes: {comment.votes}</p>
            <DeleteComment comment_id={comment.comment_id}/>
        </div>
    )
}
