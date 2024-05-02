// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import User from './User'

function App() {
  function getName() {
    alert(name)
  }

  return(
    <div className='App'>
      <h1>Lifting  State Up</h1>
      <User getData={getName}/>
    </div>
  )
  
}

export default App
