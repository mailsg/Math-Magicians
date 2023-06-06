import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => (
  <div className="container">
    <div className="calculator">
      <div className="screen">
        <input type="text" value="0" readOnly className="screen-color" />
      </div>
      <Button />
    </div>
  </div>
);

const Button = () => (
  <div className="buttons">
    <div className="row-one">
      <input type="button" value="AC" />
      <input type="button" value="+/-" />
      <input type="button" value="%" />
      <input type="button" value="/" className="orange-color" />
    </div>
    <div className="row-two">
      <input type="button" value="7" />
      <input type="button" value="8" />
      <input type="button" value="9" />
      <input type="button" value="*" className="orange-color" />
    </div>
    <div className="row-three">
      <input type="button" value="4" />
      <input type="button" value="5" />
      <input type="button" value="6" />
      <input type="button" value="-" className="orange-color" />
    </div>
    <div className="row-four">
      <input type="button" value="1" />
      <input type="button" value="2" />
      <input type="button" value="3" />
      <input type="button" value="+" className="orange-color" />
    </div>
    <div className="row-five">
      <input type="button" value="0" className="big" />
      <input type="button" value="." />
      <input type="button" value="=" className="orange-color" />
    </div>
  </div>
);

export default Calculator;
