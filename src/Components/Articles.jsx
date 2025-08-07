import { useState, useEffect } from "react";
import { ArticleQueries, getArticles } from "../Api";
import React from 'react'
import { ArticleCard, SingleArticleCard } from "../Cards/ArticleCard";
import { useParams, useSearchParams } from "react-router"
import { ErrorComponent } from "./Error";
import { ButtonGroup, Dropdown } from "react-bootstrap";


export function GetArticles() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [sortBy, setSortBy] = useState("date")
    const [order, setOrder] = useState("desc")
    const [searchParams, setSearchParams] = useSearchParams()


    function handleSortChange(selectedSort) {
        setSortBy(selectedSort)
        searchParams.set("sort", selectedSort)
        setSearchParams(searchParams)
    }
    function handleOrderChange(selectedOrder) {
        setOrder(selectedOrder)
        searchParams.set("order", selectedOrder)
        setSearchParams(searchParams)
    }


    useEffect(() => {
        const params = {
            filter: searchParams.get("filter"),
            by: searchParams.get("by"),
            sort: searchParams.get("sort"),
            order: searchParams.get("order")
        };
    
        setIsLoading(true)
    
        if (params.filter || params.sort || params.order) {
            ArticleQueries(params)
                .then((articles) => {
                    setArticles(articles)
                })
                .catch((error) => {
                    setError(error)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        } else {
            getArticles()
                .then((allArticles) => {
                    setArticles(allArticles);
                })
                .catch((error) => {
                    setError(error)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }, [searchParams]); 
    
    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <ErrorComponent message={error.message} />;
    }

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
            {articles.map((article) => (
                <div key={article.article_id}>
                    <div>
                        <ArticleCard article={article} />
                    </div>
                </div>
            ))}
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
        <ul className="flex justify-center p-6">
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

export function FeaturedArticles() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchParams] = useSearchParams()


    useEffect(() => {
        getArticles()
            .then((allArticles) => {
                const top3 = allArticles.sort((a, b) => b.votes - a.votes).slice(0, 3);
                setArticles(top3);
                console.log(top3)
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
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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