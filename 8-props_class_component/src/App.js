// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Student from './Student';

class App extends Component {
  constructor() {
    super();
    this.state ={
      name : "dhanush"
    }
  }
  render() {
    return (
      <div className="App">
        <h1>App class here!</h1>
        <Student name ={this.state.name} email="dhanush@test.com" />
        <button onClick={() => {this.setState({name:"Kumar"})}}>Update Data</button>
      </div>
    );
  }
}

export default App;
