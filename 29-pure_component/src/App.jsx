// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React,{PureComponent} from 'react'
import './App.css'
import Counter from "./Counter"

class App  extends PureComponent {
  constructor(){
    super()
    this.state = {
      count: 1
    }
  }
  render() {
    console.log("render");
    return(
      <div className='App'>
          {/* <h1>App component!~ {this.state.count}</h1> */}
          <Counter count={this.state.count}/>
          <button onClick={()=> this.setState({count: 19})}>Update</button>

      </div>
    )
  }
}

export default App