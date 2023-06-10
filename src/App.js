import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componentes/login';

import Home from "./pages/Home";
import React, { useState } from 'react';
import Ventas from './pages/Ventas';

function App() {

  return (

      <Router>
    
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/ventas" element={ <Ventas /> } />
        </Routes>
      </Router>
    
  );
}

export default App;
