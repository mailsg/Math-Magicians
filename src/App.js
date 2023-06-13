import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import HitTheApi from './components/hittheapi';
import './components/calculator.css';
import Home from './components/Home';
import Navigation from './components/Navigation';

const App = () => (
  <div className="App">
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/hittheapi" element={<HitTheApi />} />
    </Routes>
  </div>
);

export default App;
