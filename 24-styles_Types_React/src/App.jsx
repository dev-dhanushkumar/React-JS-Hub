// import { useState } from '
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import "./style.css"
import style from './custom.module.css'

function App() {
  const styleItem = {color:"red", backgroundColor:"orange"}
  return (
    <div className='App'>
      <h1 style={styleItem}>Style type 1 in React js</h1>
      <h1 className='primary'>Style Type 2 in React js</h1>
      <h1 className={style.golden}>Style Type 3 in React js</h1>
    </div>
  )
}

export default App
