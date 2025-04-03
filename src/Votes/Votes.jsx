import { useEffect, useState } from "react"
import { getArticles, incrementVotesOnArticle } from "../Api"
import React from "react"
import { ErrorComponent } from "../Components/Error";

export function Votes({ article_id }) {
    const [votesCount, setVotesCount] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getArticles(article_id)
            .then((response) => {
                setVotesCount(response[0].votes)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [article_id])

    function handleVote(article_id, inc_votes) {
        setVotesCount((currentVotesCount) => currentVotesCount + inc_votes)
        setError(null)

        incrementVotesOnArticle({ inc_votes }, article_id)
            .catch((error) => {
                setVotesCount((currentVotesCount) => currentVotesCount - inc_votes)
                setError(error)
            })
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <ErrorComponent message={error.message} />;
    }


    return (
        <div>
            <p>Votes: {votesCount}</p>
            <button onClick={() => handleVote(article_id, 1)}>Upvote</button>
            <button onClick={() => handleVote(article_id, -1)}>Downvote</button>
        </div>
    )

}