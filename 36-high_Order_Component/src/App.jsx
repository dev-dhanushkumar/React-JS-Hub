import React,{useState} from 'react';
import './App.css'

function App() {
  
  return (
    <div className='App'>
      <h1>HOC</h1>
      <HOCRed cmp={Counter} />
      <HOCYellow cmp={Counter} />
      <HOCGreen cmp={Counter} />
      
    </div>
  )
}

const HOCRed = (props) => {
  return <h2 style={{backgroundColor:'red'}}>Red<props.cmp /></h2>
}
const HOCYellow = (props) => {
  return <h2 style={{backgroundColor:'yellow'}}>Yellow<props.cmp /></h2>
}
const HOCGreen = (props) => {
  return <h2 style={{backgroundColor:'green'}}>Green<props.cmp /></h2>
}

function Counter() {
  const [count, setCount] = useState(0)
  return(
    <div>
      <h3>{count}</h3>
      <button onClick={()=> setCount(count+1)}>Update</button>
    </div>
  )
  
}

export default App
