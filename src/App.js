import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { NavBar } from './components/navbar';
import { Home } from './components/home';
import { HumanGame } from './components/humanGame';
import { CompGame } from './components/compGame';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/humangame' element={<HumanGame />} />
            <Route path='/computergame' element={<CompGame />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

