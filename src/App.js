import React from 'react';
import Calculator from './components/calculator';
import HitTheApi from './components/hittheapi';
import './components/calculator.css';

const App = () => (
  <div className="App">
    <div className="header">
      <HitTheApi />
    </div>

    <div className="sub-header">
      <Calculator />
    </div>

  </div>
);

export default App;
