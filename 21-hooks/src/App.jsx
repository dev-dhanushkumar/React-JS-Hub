import React,{useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Hooks Concept Bro !</h1>
      <h4>User Count: {count}</h4>
      <button onClick={()=> setCount(count+1)}>update</button>
    </>
  )
}

export default App
