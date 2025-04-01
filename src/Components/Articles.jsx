import { useState } from "react";
import { getAllArticles } from "../Api";
import { useEffect } from "react";
import React from 'react'
import { ArticleCard } from "../Cards/ArticleCard";

export function AllArticles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getAllArticles()
            .then((allArticles) => {
                setArticles(allArticles);
            })
    }, [])

    return (
        <ul className="List">
            {articles.map((article) => {
                return (
                    <li key={article.article_id}>
                        <div>
                            <ArticleCard article={article} />
                            <br />
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}