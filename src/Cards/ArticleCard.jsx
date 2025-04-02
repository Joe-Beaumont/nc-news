import React, { useState } from "react"
import { useNavigate } from 'react-router'
import { Votes } from "../Votes/Votes"


export function ArticleCard({ article }) {
    const navg = useNavigate()
    const { article_img_url, article_id, title, topic, author, created_at} = article

    return (
        <div className="Card">
            <br/>
            <img src= {article_img_url} alt={title}></img>
            <h2 onClick={() => {navg(`/articles/${article_id}`)}}>{title}</h2>
            <p>Topic: {topic}</p>
            <p>Author: {author}</p>
            <p>Created At: {created_at}</p>
            <Votes article_id={article_id}/>
            <br/>
        </div>
    )
}


export function SingleArticleCard({ article }) {
    const navg = useNavigate()
    const { article_img_url, article_id, body, title, topic, author, created_at} = article

    return (
        <div className="Card">
            <br/>
            <img src= {article_img_url} alt={title}></img>
            <h2>{title}</h2>
            <p>Topic: {topic}</p>
            <p>Author: {author}</p>
            <p>{body}</p>
            <p>Created At: {created_at}</p>
            <Votes article_id={article_id}/>
            <p onClick={() => {navg(`/articles/${article.article_id}/comments`)}}>View Comments</p>
        </div>
    )
}