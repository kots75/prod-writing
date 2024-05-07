import React from 'react';
import { Routes,Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Signup from './pages/Signup';
// import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Editor from './pages/Editor';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/editor' element={<Editor/>}/>
    </Routes>
    </>
  )
}

export default App