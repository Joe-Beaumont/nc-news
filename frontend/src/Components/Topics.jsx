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
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => {
                return (
                    <li key={topic.slug}>
                        <div>
                            <TopicCard topic={topic} />
                        </div>
                    </li>
                )
            })}
        </ul>
    )

}