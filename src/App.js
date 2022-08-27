import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route, useParams } from 'react-router-dom';
import Detail from './components/Detail';
import Login from './components/Login';
function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:uid' element={<Detail />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
