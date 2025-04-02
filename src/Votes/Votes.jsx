import { useState } from "react"

function Votes({article}, increment) {
    const [votesCount, setVotesCount] = useState(0)
    const [error, setError] = useState(null)

    setVotesCount(article.votes)

    function handleVote(){
        setVotesCount((currentVotesCount) => currentVotesCount + increment)
        setError(null)
        incrementVotesOnArticle()
        .catch((error) => {
            setLikesCount((currentLikesCount) => currentLikesCount - increment)
            setError("Your vote could not be placed.  Please try again")
        })
    }
}