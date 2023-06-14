import React, { useState } from 'react';
import './calculator.css';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonValue) => {
    const updatedState = calculate(calculatorState, buttonValue);
    setCalculatorState(updatedState);
  };

  return (
    <div className="container">
      <h2>Let`s do some math!</h2>
      <div className="calculator">
        <div className="screen">
          <input type="text" value={calculatorState.next || calculatorState.total || '0'} readOnly className="screen-color" />
        </div>
        <div className="buttons">
          <div className="row-one">
            <Button value="AC" className="" handleButtonClick={handleButtonClick} />
            <Button value="+/-" className="" handleButtonClick={handleButtonClick} />
            <Button value="%" className="" handleButtonClick={handleButtonClick} />
            <Button value="÷" className="orange-color" handleButtonClick={handleButtonClick} />
          </div>
          <div className="row-two">
            <Button value="7" className="" handleButtonClick={handleButtonClick} />
            <Button value="8" className="" handleButtonClick={handleButtonClick} />
            <Button value="9" className="" handleButtonClick={handleButtonClick} />
            <Button value="x" className="orange-color" handleButtonClick={handleButtonClick} />
          </div>
          <div className="row-three">
            <Button value="4" className="" handleButtonClick={handleButtonClick} />
            <Button value="5" className="" handleButtonClick={handleButtonClick} />
            <Button value="6" className="" handleButtonClick={handleButtonClick} />
            <Button value="-" className="orange-color" handleButtonClick={handleButtonClick} />
          </div>
          <div className="row-four">
            <Button value="1" className="" handleButtonClick={handleButtonClick} />
            <Button value="2" className="" handleButtonClick={handleButtonClick} />
            <Button value="3" className="" handleButtonClick={handleButtonClick} />
            <Button value="+" className="orange-color" handleButtonClick={handleButtonClick} />
          </div>
          <div className="row-five">
            <Button value="0" className="big" handleButtonClick={handleButtonClick} />
            <Button value="." className="" handleButtonClick={handleButtonClick} />
            <Button value="=" className="orange-color" handleButtonClick={handleButtonClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Button = ({ value, className, handleButtonClick }) => (
  <input
    type="button"
    value={value}
    className={className}
    onClick={() => handleButtonClick(value)}
  />
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default Calculator;
