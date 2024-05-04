import React from 'react'
import './App.css'
import {BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <Router>
        <Link to="/">Home</Link><br /> <br/>
        <Link to="/about">About</Link><br /> <br/>
        <Link to="/login">login</Link><br /> <br/>

        {/* <Switch> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        {/* </Switch> */}
      </Router>
    </div>
  
  )
}


function Home() {
  return(
    <div>
      <h1>This is Home Page</h1>
    </div>
  )
}

function About() {
  return(
    <div>
      <h1>This is About Page</h1>
    </div>
  )
}

function PageNotFound() {
  return(
    <div>
      <h1>404 Page Not Found</h1>
    </div>
  )
}
export default App
