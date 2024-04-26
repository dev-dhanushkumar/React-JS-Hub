// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [data, newData] = useState(null)
  const [print, newPrint] = useState(null)
  function getData(val) {
    newData(val.target.value)
    newPrint(false)
    console.log(val.target.value)
  }

  return (
    <div className="App">{
      print?
      <h1>{data}</h1>
      : null
    }
      
      <input type="text" onChange={getData} />
      <button onClick={()=>newPrint(true)}>Print Value</button>
    </div>
  );
}

export default App;
