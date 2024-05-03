import React from 'react'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import './App.css'

function Home() {
  return(
    <div>
      <h1>Home Page</h1>
      <p>This is Home page</p>
    </div>
  )
}

function  About() {
  return(
    <div>
      <h1>About Page</h1>
      <p>This is About page</p>
    </div>
  )
}

function App() {

  return (
    <div className='App'>
      <Router>
        <Link to="/home">Home</Link>
        <br /> <br />
        <Link to="/about">About</Link>
        <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  )
}


export default App
