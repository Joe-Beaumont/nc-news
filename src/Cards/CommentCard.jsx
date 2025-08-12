import React from "react"
import { DeleteComment } from "../Components/Comments"
import { CommentVotes } from "../Votes/Votes"

export function CommentCard ({ comment }){

    return (
        <div className="flex-1 min-w-[250px] max-w-[1080px] bg-white text-black p-5 border border-black rounded">
            <p className="flex justify-start text-l mb-3">{comment.body}</p>
            <p className="flex justify-start text-m font-semibold text-gray-600 mb-1">Author: {comment.author}</p>
            <p className="flex justify-start text-sm text-gray-600 mb-1">Created at: {comment.created_at}</p>
            <p className="flex justify-start text-sm text-gray-600 mb-1">Votes: {comment.votes}</p>
            <div className="flex justify-center">
                {/* <CommentVotes comment_id={comment.comment_id} initialVotes={comment.votes} /> */}
            </div>
        </div>
    )
}

export function UserCommentCard ({ comment }){
    return (
        <div className="flex-1 min-w-[250px] max-w-[1080px] bg-white text-black p-5 border border-black rounded">
            <p className="flex justify-center text-sm text-gray-600 mb-3">{comment.body}</p>
            <p className="flex justify-start text-m font-semibold text-gray-600 mb-1">Author: {comment.author}</p>
            <p className="flex justify-center text-sm text-gray-600 mb-1">Created at: {comment.created_at}</p>
            <p className="flex justify-center text-sm text-gray-600 mb-1">Votes: {comment.votes}</p>
            <DeleteComment comment_id={comment.comment_id} initialVotes={comment.votes} />
        </div>
    )
}
