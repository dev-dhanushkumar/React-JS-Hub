// import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {
  const [name,setName] = useState(null);
  const [intrest,setIntrest] = useState(null);
  const [TdC,setTdC] = useState(false);
  function handleData(e) {
    e.preventDefault();
    let result = {
      name: name,
      intrest: intrest,
      TdC: TdC
    }
    console.log(result);
  }
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <form onSubmit={handleData}>
        <input type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/> <br /> <br />
        <select onChange={(e) => setIntrest(e.target.value)}>
          <option>Marval</option>
          <option>DC</option>
        </select>
        <br /> <br />
        <input type='checkbox' onChange={(e) => setTdC(e.target.checked)}/><span>Agree with terms and condition</span><br /><br />
        <button type='="submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
