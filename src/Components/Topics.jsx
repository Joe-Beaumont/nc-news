import { useEffect, useState } from "react";
import { getTopics } from "../Api";
import { TopicCard } from "../Cards/TopicCard";
import React from 'react'

export function AllTopics() {
    const [topics, SetTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getTopics()
        .then((allTopics) => {
            SetTopics(allTopics)
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
            {topics.map((topic) => {
                return (
                    <li key={topic.slug}>
                        <div>
                            <TopicCard topic={topic} />
                            <br />
                        </div>
                    </li>
                )
            })}
        </ul>
    )

}