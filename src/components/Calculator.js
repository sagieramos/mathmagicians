import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CalculatorButton from './button';
import calculate from '../logic/calculate';
import './Calculator.scss';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [calcState, setCalcState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (value) => {
    const newCalcState = calculate(calcState, value);
    setCalcState(newCalcState);
    setInput(newCalcState.next || newCalcState.total || newCalcState.operation || '');
  };

  return (
    <div id="calc">
      <div className="display-calc">
        <input type="text" value={input} readOnly />
      </div>
      <div className="btn-calc">
        <div className="row-calc">
          {['AC', '+/-', '%', '÷'].map((value) => (
            <CalculatorButton
              key={uuidv4()}
              value={value}
              onClick={() => handleClick(value)}
            />
          ))}
        </div>
        {[
          ['7', '8', '9', 'x'],
          ['4', '5', '6', '-'],
          ['1', '2', '3', '+'],
          ['0', '.', '='],
        ].map((row) => (
          <div key={uuidv4()} className="row-calc">
            {row.map((value) => (
              <CalculatorButton
                key={uuidv4()}
                value={value}
                onClick={() => handleClick(value)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
