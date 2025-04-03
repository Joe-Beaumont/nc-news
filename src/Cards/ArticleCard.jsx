import React from "react"
import { Votes } from "../Votes/Votes"
import { Link } from 'react-router'
import { PostComment } from "../Components/Comments"


export function ArticleCard({ article }) {

    const { article_img_url, article_id, title, topic, author, created_at} = article

    return (
        <div className="Card">
            <br/>
            <img src= {article_img_url} alt={title} className="img"></img>
            <h2>{title}</h2>
            <p>Topic: {topic}</p>
            <p>Author: {author}</p>
            <p>Created At: {created_at}</p>
            <Votes article_id={article_id}/>
            <Link to={`/articles/${article_id}`}>Read Article in Full</Link>
            <br/>
        </div>
    )
}


export function SingleArticleCard({ article }) {
    const { article_img_url, article_id, body, title, topic, author, created_at} = article

    return (
        <div className="Card">
            <br/>
            <img src= {article_img_url} alt={title} className="img"></img>
            <h2>{title}</h2>
            <p>Topic: {topic}</p>
            <p>Author: {author}</p>
            <p>{body}</p>
            <p>Created At: {created_at}</p>
            <Votes article_id={article_id}/>
            <Link to={`/articles/${article_id}/comments`}>View Comments</Link>
            <PostComment />
        </div>
    )
}