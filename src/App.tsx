import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Analysis from './pages/Analysis/Analysis';
import AppLayout from './layouts/AppLayout/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/analysis/:screenName' element={<Analysis/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
