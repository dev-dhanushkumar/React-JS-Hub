import React from 'react';
// import logo from './logo.svg';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  );
}

export default App;
