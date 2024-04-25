// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [data, upData] = useState("Dhanush");
  function updateData(){
    upData("Kumaralingam");
  }
  return (
    <div className="App">
     <h1>{data}</h1>
     <button onClick={updateData}>Update</button>
    </div>
  );
}

export default App;
