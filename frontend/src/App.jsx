import './index.css'
import React from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import Nav from './Components/Nav'


function App() {

  return (
    <div className='min-h-full bg-gray-100 dark:bg-gray-600 font-serif'>
      <Header />
      <Nav />
      <Content />
    </div>
  )
}

export default App
