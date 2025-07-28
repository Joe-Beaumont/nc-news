import './App.css'
import React from 'react'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Content from './Components/Content'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <div className='Heading'>
      <Header />
      <div className='Nav'>
      <img src='src/Images/News Logo.jpg' alt="W3Schools.com" width="142" height="142"/>
      <Nav />
      </div>
      </div>
      <Content />
    </div>
  )
}

export default App
