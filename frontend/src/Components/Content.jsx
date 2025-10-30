import React from 'react'
import { Route, Routes } from 'react-router'
import { AllTopics } from './Topics'
import { GetArticles, ArticleById } from './Articles'
import { CommentsByArticleId } from './Comments'
import { Home } from './Home'
import { ErrorComponent } from './Error'



export default function Content() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/topics" element={<AllTopics />} />
                <Route path="/articles" element={<GetArticles />} />
                <Route path="/articles/:article_id" element={<ArticleById />} />
                <Route path="/articles/:article_id/comments" element={<CommentsByArticleId />} />
                <Route path="/error" element={<ErrorComponent />} />
            </Routes>
        </div>
    )
}