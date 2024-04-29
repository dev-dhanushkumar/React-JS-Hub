import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    console.log("Constructor");
    this.state = {
      count : 0
    }
  }

  componentDidUpdate() {
    console.log("component Did Mount");
  }
  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>Hello World !{this.state.count}</h1>
        <button onClick={()=> {this.setState({count:6})}}>update</button>
      </div>
    );
  }
}

export default App;
