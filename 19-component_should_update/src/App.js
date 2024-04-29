import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      count:0
    }
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate", this.state.count);
    if(this.state.count <5) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>Hello world ! {this.state.count}</h1>
        <button onClick={() =>this.setState({count: this.state.count +1})}>update count</button>
      </div>
    );
  }
}

export default App;
