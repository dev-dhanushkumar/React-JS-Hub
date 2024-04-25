// import logo from './logo.svg';
import './App.css';

function App() {
  let data = "Dhanush Kumar";
  function test() {
    data = "Kumaralingam";
    alert(data);
  }
  return (
    <div className="App">
     <h1>{data}</h1>
     <button onClick={test}>Click me</button>
    </div>
  );
}

export default App;
