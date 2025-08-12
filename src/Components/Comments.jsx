import { deleteCommentAPI, getCommentsById, postNewComment } from "../Api"
import { useParams } from "react-router"
import React, { useContext } from "react"
import { useState, useEffect } from "react";
import { CommentCard, UserCommentCard } from "../Cards/CommentCard";
import { ErrorComponent } from "./Error";
import { CurrentUser } from "../Contexts/User";

export function CommentsByArticleId() {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const { article_id } = useParams()
    const { user } = useContext(CurrentUser)


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
    }, [comments])

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <ErrorComponent message={error.message} />;
    }

    return (
        <div className="flex justify-center">
            <ul className="grid grid-cols-1 gap-6">
                {comments.map((comment) => {
                    if (comment.author === user) 
                        return (
                            <li key={comment.comment_id}>
                                <div>
                                    <UserCommentCard comment={comment} />
                                </div>
                            </li>
                        )
                        return (
                            <li key={comment.comment_id}>
                                <div>
                                    <CommentCard comment={comment} />
                                </div>
                            </li>
                        )
                    
                })}
            </ul>
        </div>
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
            .then(() => {
                setNewComment("")
            })
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
        <form className="font-bold flex justify-center" onSubmit={postComment}>
            <label className="font-bold pr-4">
                Post Comment
                <input className="border border-black p-1 rounded" value={newComment}
                    onChange={(event) => setNewComment(event.target.value)}
                />
            </label>
            <button className="font-bold border border-black p-1 rounded cursor-pointer" type="submit">Submit</button>
        </form>
    )
}

export function DeleteComment({comment_id}) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [comments, setComments] = useState([])

    function handleDeletion(comment_id){
            setIsLoading(true)
            deleteCommentAPI(comment_id)
                .then(() => {
                    console.log("deleted")
                    setComments((previousComments) => {
                        previousComments.filter((comment) => comment.comment_id !== comment_id)
                    })
            })
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
        <div className="font-bold flex justify-center">
            <button className="font-bold border border-black p-1 rounded cursor-pointer" onClick={() => handleDeletion(comment_id)}>
                DeleteComment
            </button>
        </div>
    )
}


// export function GetComments() {
//     const [comments, setComments] = useState([]);
//     const [isLoading, setIsLoading] = useState(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         getComments()
//             .then((allComments) => {
//                 setComments(allComments);
//             })
//             .catch((error) => {
//                 setError(error)
//             })
//             .finally(() => {
//                 setIsLoading(false)
//             })
//     }, [comments])

//     if (isLoading) {
//         return <p>Loading...</p>
//     }

//     if (error) {
//         return <ErrorComponent message={error.message} />;
//     }
// }