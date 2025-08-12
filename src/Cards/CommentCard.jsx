import React from "react"
import { DeleteComment } from "../Components/Comments"
import { CommentVotes } from "../Votes/Votes"

export function CommentCard ({ comment }){

    return (
        <div className="flex-1 min-w-[250px] max-w-[1080px] bg-white text-gray-600 dark:bg-gray-800 dark:text-gray-200 text-l md:text-xl lg:text-2xl  p-5 border border-black rounded">
            <p className="flex text-black dark:text-white justify-start text-xl md:text-2xl lg:text-3xl mb-3">{comment.body}</p>
            <p className="flex justify-start font-semibold mb-1">Author: {comment.author}</p>
            <p className="flex justify-start mb-1">Created at: {comment.created_at}</p>
            <p className="flex justify-start mb-1">Votes: {comment.votes}</p>
            <div className="flex justify-center">
                {/* <CommentVotes comment_id={comment.comment_id} initialVotes={comment.votes} /> */}
            </div>
        </div>
    )
}

export function UserCommentCard ({ comment }){
    return (
        <div className="flex-1 min-w-[250px] max-w-[1080px] bg-white dark:bg-gray-800 dark:text-white text-l md:text-xl lg:text-2xl  p-5 border border-black rounded">
            <p className="flex text-black dark:text-white justify-center text-xl md:text-2xl lg:text-3xl mb-3">{comment.body}</p>
            <p className="flex justify-start font-semibold mb-1">Author: {comment.author}</p>
            <p className="flex justify-center mb-1">Created at: {comment.created_at}</p>
            <p className="flex justify-center mb-1">Votes: {comment.votes}</p>
            <DeleteComment comment_id={comment.comment_id} initialVotes={comment.votes} />
        </div>
    )
}
