import React from "react"
import { ArticleVotes } from "../Votes/Votes"
import { Link } from 'react-router'
import { PostComment } from "../Components/Comments"


export function ArticleCard({ article }) {

    const { article_img_url, article_id, title, topic, author, created_at} = article

    return (
        <div className="flex flex-col justify-between h-full bg-white text-black dark:bg-gray-800 dark:text-white text-l md:text-xl lg:text-2xl p-5 border border-black rounded">
            <img
                src= {article_img_url}
                alt={title}
                className="mx-auto mb-4 max-2-[600px] rounded"
            />
            <div className="flex flex-col gap-1">
            <h2 className="justify-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-1 line-clamp-2">{title}</h2>
            <p className="flex justify-start text-gray-600 dark:text-gray-200 mb-1">Topic: {topic}</p>
            <p className="flex justify-start text-gray-600 dark:text-gray-200 mb-1">Author: {author}</p>
            <p className="flex justify-start text-gray-600 dark:text-gray-200 mb-3">Created At: {created_at}</p>
            <ArticleVotes article_id={article_id}/>
            <Link
                to={`/articles/${article_id}`}
                className="flex justify-center text-gray-600 dark:text-gray-200 hover:underline pt-4"
            >Read Article in Full</Link>
            </div>
        </div>
    )
}


export function SingleArticleCard({ article }) {
    const { article_img_url, article_id, body, title, topic, author, created_at} = article

    return (
        <div className="flex-1 bg-white text-black dark:bg-gray-800 dark:text-white text-l md:text-xl lg:text-2xl p-5 border border-black rounded">
            <img
                src= {article_img_url}
                alt={title}
                className="mx-auto mb-4 max-2-[600px] rounded"
            />
            <h2 className="flex justify-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-1">{title}</h2>
            <p className="flex justify-start text-gray-600 dark:text-gray-200 mb-1">Topic: {topic}</p>
            <p className="flex justify-start text-gray-600 dark:text-gray-200 mb-1">Author: {author}</p>
            <p>{body}</p>
            <p className="flex justify-start text-gray-600 dark:text-gray-200 mb-3">Created At: {created_at}</p>
            <ArticleVotes article_id={article_id}/>
            <Link
                to={`/articles/${article_id}/comments`}
                className="flex justify-center  text-gray-600 dark:text-gray-200 hover:underline pt-4"
            >View Comments</Link>
            <PostComment />
        </div>
    )
}