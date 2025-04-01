import './App.css'
import Header from './Components/Header'
import { Route, Routes } from 'react-router'
import React from 'react'
import { AllArticles } from './Components/Articles'


function App() {

  return (
    <div>
      <Header />
      <p>Hello World</p>
      {<Routes>
        {/* <Route path="/" element ={<Home />}/> */}
        <Route path="/articles" element={<AllArticles />} />
        {/* <Route/> */}
      </Routes>}
    </div>
  )
}

export default App
