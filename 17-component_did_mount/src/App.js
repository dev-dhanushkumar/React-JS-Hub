import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      email : "dhanush@gmail.com"
    }
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  render() {
    console.log("render");
    return (
     <div>
     <h1>Welcome {this.state.email}</h1> 
     <button onClick={() =>{this.setState({email:"kumar@gmail.com"})}}>update Button</button>
     </div>
     
    );
  }
}

export default App;
