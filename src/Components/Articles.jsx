import { useState, useEffect } from "react";
import { getArticles } from "../Api";
import React from 'react'
import { ArticleCard, SingleArticleCard } from "../Cards/ArticleCard";
import { useParams } from "react-router"

export function AllArticles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles()
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

export function ArticleById() {
    const [articles, setArticles] = useState([]);
    const { article_id } = useParams()
    

    useEffect(() => {
        getArticles(article_id)
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
                            <SingleArticleCard article={article} />
                            <br />
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}