// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React,{useRef} from 'react'
import User from './User';

function App() {
  let inputRef = useRef(null);

  function updateInput() {
    inputRef.current.value =1000;
    inputRef.current.style.color ="red";
  }
  return (
    <div className='App'>
      <h1>ForwardRef in React JS</h1>
      <User   ref={inputRef} />
      <button onClick={updateInput}>Update Input</button>
    </div>
  )
}

export default App
