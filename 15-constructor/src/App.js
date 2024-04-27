// import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    // Binding event handlers
    // this.handleClick = this.handleClick.bind(this);
    console.log("Constructor Calling...")
  }

  handleClick() {
    // Updating state when the button is clicked
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log("render Calling...")
    return (
      <div className='App'>
        <p>Count: {this.state.count}</p>
        <button onClick={() =>this.handleClick()}>Increment</button>
      </div>
    );
  }
}

export default App;
