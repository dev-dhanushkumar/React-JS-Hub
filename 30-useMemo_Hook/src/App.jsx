// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useState,useMemo } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(5)


  const multiMemo = useMemo(
    function multiCount() {
      console.log("MultiCount");
      return count*2 
    },[count])

  return (
    <div className='App'>
      <h1>UseMemo Hook in React {count}</h1>
      <h2>Multi count : {multiMemo}</h2>
      <h2>Itemm Value: {item}</h2>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setItem(item+1)}>Update Item</button>
    </div>
  )
}

export default App
