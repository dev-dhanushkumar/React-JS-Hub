// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React,{useRef} from 'react'

function App() {
  let inputRef =  useRef(null);
  function controlItem () {
    inputRef.current.value = "Dhanush";
    inputRef.current.style.color = 'white';
    inputRef.current.focus(); //focus the table increase outline color
  }

  return (
    <div className='App'>
      <h1>useRef Hook in React js</h1>
      <input type='text' ref={inputRef} />
      <button onClick={controlItem}>Handle Item</button>
    </div>
  )
}

export default App
