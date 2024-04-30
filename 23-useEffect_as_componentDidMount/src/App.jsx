import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import User from './User'

function App() {
  const [count, setCount] = useState(0)
    const [data, setData]= useState(0)

  
  return (
    <div className='App'>
    <User count={count} data={data}/>
      <button onClick={()=> setCount(count+ 1)}>Update Count</button>
      <button onClick={()=> setData(data+ 1)}>Update Data</button>
    </div>
  )
}

export default App
