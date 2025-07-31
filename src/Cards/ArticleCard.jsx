import React from "react"
import { Votes } from "../Votes/Votes"
import { Link } from 'react-router'
import { PostComment } from "../Components/Comments"


export function ArticleCard({ article }) {

    const { article_img_url, article_id, title, topic, author, created_at} = article

    return (
        <div className="flex-1 min-w-[250px] max-w-[1080px] bg-white text-black p-5 border border-black rounded">
            <img
                src= {article_img_url}
                alt={title}
                className="mx-auto mb-4 max-2-[600px] rounded"
            />
            <div>
            <h2 className="flex justify-center text-2xl font-semibold mb-1">{title}</h2>
            <p className="flex justify-center text-sm text-gray-600 mb-1">Topic: {topic}</p>
            <p className="flex justify-center text-sm text-gray-600 mb-1">Author: {author}</p>
            <p className="flex justify-center text-sm text-gray-600 mb-3">Created At: {created_at}</p>
            <Votes article_id={article_id}/>
            <Link
                to={`/articles/${article_id}`}
                className="flex justify-center text-blue-600 hover:underline pt-4"
            >Read Article in Full</Link>
            </div>
        </div>
    )
}


export function SingleArticleCard({ article }) {
    const { article_img_url, article_id, body, title, topic, author, created_at} = article

    return (
        <div className="flex-1 min-w-[250px] max-w-[1080px] bg-white text-black p-5 border border-black rounded">
            <img
                src= {article_img_url}
                alt={title}
                className="mx-auto mb-4 max-2-[600px] rounded"
            />
            <h2 className="flex justify-center text-2xl font-semibold mb-1">{title}</h2>
            <p className="flex justify-center text-sm text-gray-600 mb-1">Topic: {topic}</p>
            <p className="flex justify-center text-sm text-gray-600 mb-1">Author: {author}</p>
            <p>{body}</p>
            <p className="flex justify-center text-sm text-gray-600 mb-3">Created At: {created_at}</p>
            <Votes article_id={article_id}/>
            <Link
                to={`/articles/${article_id}/comments`}
                className="flex justify-center  text-blue-600 hover:underline pt-4"
            >View Comments</Link>
            <PostComment />
        </div>
    )
}