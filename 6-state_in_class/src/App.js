// import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';

class App extends Component{
  constructor() {
    super();
    this.state = {
      data: 1
    }
  }

  test() {
    this.setState({
      data: this.state.data + 1
    })
  }
  render(){
  return (
    <div className="App">
      <h1>Current Number: {this.state.data}</h1>
      <button onClick={()=> this.test()}>Update Data</button>
    </div>
  );
}
}

export default App;
