import React, { Component } from 'react';
// import logo from './logo.svg';
import User from "./User";
import './App.css';
// import React,{useState} from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name : "user"
    }
  }
  render() {
    return(
    <div className='App'>
      <User name={this.state.name} />
      <button onClick={()=> {this.setState({name:"Admin"})}}>update button</button>
    </div>
    );
  }
}

export default App;
