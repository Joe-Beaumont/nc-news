import './App.css'
import Header from './Components/Header'
import { Route, Routes } from 'react-router'
import React from 'react'
import { AllArticles, ArticleById } from './Components/Articles'


function App() {

  return (
    <div>
      <Header />
      <p>Welcome to NC-News</p>
      {<Routes>
        {/* <Route path="/" element ={<Home />}/> */}
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/:article_id" element={<ArticleById />} />
        <Route path="/articles/:article_id/comments" element={<CommentsByArticleId />} />
      </Routes>}
    </div>
  )
}

export default App
