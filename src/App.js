import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componentes/login';

import Home from "./pages/Home";
import React, { useState } from 'react';

function App() {

  return (

      <Router>
    
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/home" element={ <Home /> } />
        </Routes>
      </Router>
    
  );
}

export default App;
