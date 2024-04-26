// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {
        show?<h1>Hello React JS</h1>: null
      }
      {/* <button onClick={() => setShow(true)}>Show</button> */}
      {/* <button onClick={() => setShow(false)}>Hide</button> */}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default App;
