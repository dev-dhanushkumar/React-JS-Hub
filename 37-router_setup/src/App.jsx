import React from "react";
import "./App.css";
import Home from "./Home"
import About from "./About"
import Nav from "./Nav"
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
