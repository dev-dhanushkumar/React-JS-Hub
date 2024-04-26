// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Student from './Student';

function App() {

  const [name, setName] = useState("Dhanush");
  return (
    <div className="App">
      <h1>Props in React</h1>
      <Student name = {name} details = {{age:19}}/>
      <button onClick={()=> {setName("Kumar")}}>Update Data</button>
    </div>
  );
}

export default App;
