import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let a =0;
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.warn("UseEffect calling !");
  })
  return (
    <div className='App'>
      <h1>UseEffect in React js {count}</h1>
      <button onClick={()=>setCount(count+1)}>Update Count </button>
    </div>
  )
}

export default App
