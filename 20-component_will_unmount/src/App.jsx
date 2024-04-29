// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { Component } from 'react';
import './App.css'
import Student from './Student';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: true
    }
  }
  render() {
    return (
      <>
        {
          this.state.count ? <Student /> : <h1>App Component</h1>
        }
        <button onClick={() => this.setState({ count: false })}>unmount Component</button>
        {/* <h1> Student Component </h1> */}
      </>
    )
  }
}

export default App
