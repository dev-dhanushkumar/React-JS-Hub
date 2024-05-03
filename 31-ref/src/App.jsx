// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Component,createRef } from 'react'
import './App.css'
import React from 'react'

class App extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  getVal() {
    console.log(this.inputRef.current.value);
    this.inputRef.current.style.color = 'red';
    this.inputRef.current.style.backgroundColor = "Black"
  }

  componentDidMount() {
    // console.log(this.inputRef.current.value = 1000);
  }
  render() {
    return(
      <div className='App'>
        <h1>Ref in React</h1> 
        <input type='text' ref={this.inputRef} />
        <button onClick={()=>this.getVal()}>Check Ref</button>
      </div>
    )
  }
}

export default App
