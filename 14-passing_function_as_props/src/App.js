// import logo from './logo.svg';
import './App.css';
import User from "./User";

function App() {
  function getData() {
    alert("hello from app component");
  }
  return (
    <div className="App">
      <User data={getData} />
    </div>
  );
}

export default App;
