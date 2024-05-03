import React,{useState} from 'react'
import './App.css'

function App() {
  let [val,setVal] = useState("");

  return (
    <div className='App'>
      <h1>Controlled Component</h1>
      <input type='text' value={val} onChange={(e)=>setVal(e.target.value)}/>
      <h1>Above Text: {val}</h1>
    </div>
  )
}

export default App
