import React from "react"

export function ArticleCard({ article }) {
    return (
        <div className="Card">
            <br/>
            <img src= {article.article_img_url} alt={article.title}></img>
            <h2>{article.title}</h2>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <p>Created At: {article.created_at}</p>
            <p>Votes: {article.votes}</p>
            <button>Vote</button>
            <br/>
        </div>
    )
}