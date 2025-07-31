import { useState, useEffect } from "react";
import { getArticles, getArticlesQueries } from "../Api";
import React from 'react'
import { ArticleCard, SingleArticleCard } from "../Cards/ArticleCard";
import { useParams, useSearchParams } from "react-router"
import { ErrorComponent } from "./Error";

export function GetArticles() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchParams] = useSearchParams()


    useEffect(() => {
        getArticles()
            .then((allArticles) => {
                let featuredArticles = [];
                let max = allArticles[0].votes;
                let first = 0;
                let second = 0;
                let third = 0;
                for(let i = 0; i <= allArticles.length; i++){

                }
                setArticles(allArticles);
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
        },[])

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <ErrorComponent message={error.message} />;
    }

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => {
                return (
                    <li key={article.article_id}>
                        <div>
                            <ArticleCard article={article} />
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export function ArticleById() {
    const [article, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const { article_id } = useParams()


    useEffect(() => {
        getArticles(article_id)
            .then((article) => {
                setArticles(article);
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
            {article.map((article) => {
                return (
                    <li key={article.article_id}>
                        <div>
                            <SingleArticleCard article={article} />
                        </div>
                    </li>
                )
            })}
        </ul>
    )

}
