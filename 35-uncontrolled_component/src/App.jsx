import React, { useRef } from "react";
import "./App.css";

function App() {
  let nameRef = useRef(null);
  let passwordRef = useRef(null);
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Input Form 1:", nameRef.current.value);
    console.log("Input Form 2:", passwordRef.current.value);
    let email = document.getElementById('email').value;
    console.log("Input Form 3:", email);

  }
  return (
    <div className="App">
      <h1>Unconditional Component in React JS</h1>
      <form onSubmit={submitForm}>
        <input type="text" ref={nameRef} /> <br/> <br />
        <input type="text" ref={passwordRef} /> <br /> <br />
        <input type="text" id="email" /> <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
