import React, { useState } from "react"
import { useNavigate } from 'react-router'

export function ArticleCard({ article }) {
    const navg = useNavigate()


    return (
        <div className="Card">
            <br/>
            <img src= {article.article_img_url} alt={article.title}></img>
            <h2 onClick={() => {navg(`/articles/${article.article_id}`)}}>{article.title}</h2>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <p>Created At: {article.created_at}</p>
            <p>Votes: {article.votes}</p>
            <button>Upvote</button><button>Downvote</button>
            <br/>
        </div>
    )
}


export function SingleArticleCard({ article }) {
    const navg = useNavigate()
    return (
        <div className="Card">
            <br/>
            <img src= {article.article_img_url} alt={article.title}></img>
            <h2>{article.title}</h2>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <p>{article.body}</p>
            <p>Created At: {article.created_at}</p>
            <p>Votes: {article.votes}</p>
            <button>Upvote</button><button>Downvote</button>
            <br/>
            <p onClick={() => {navg(`/articles/${article.article_id}/comments`)}}>View Comments</p>
        </div>
    )
}