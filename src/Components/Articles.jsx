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

    const params = {
        filter: searchParams.get("filter"),
        by: searchParams.get("by"),
        sort: searchParams.get("sort"),
        order: searchParams.get("order")
    };


    useEffect(() => {
        if (params.filter) {
            if (params.sort) {
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
            }
        } else {
            if (params.sort) {
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
        }
    }, [articles])

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <ErrorComponent message={error.message} />;
    }

    return (
        <div>
 <Dropdown as={ButtonGroup}>
    <Dropdown.Toggle variant = "secondary" id="Sort">
        Sort_by
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSortChange("created_at")}>Date</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSortChange("comment_count")}>Comment Count</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSortChange("votes")}>Votes</Dropdown.Item>
    </Dropdown.Menu>
 </Dropdown>
 <Dropdown>
    <Dropdown.Toggle variant = "secondary" id="Order">
        Desc
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleOrderChange("asc")}>Asc</Dropdown.Item>
        <Dropdown.Item onClick={() => handleOrderChange("desc")}>Desc</Dropdown.Item>
    </Dropdown.Menu>
 </Dropdown>
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
        </div>
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
        <ul className="List">
            {article.map((article) => {
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
