import React from "react"
import { FeaturedArticles } from "./Articles"

export function Home() {
    return (
        <div>
            <p className="text-2xl dark:text-white">Welcome to NC-News</p>
            <p className="text-xl dark:text-white">Below are our featured articles:</p>
            <FeaturedArticles />
        </div>
    )
}
