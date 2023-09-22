import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CalculatorButton from './CalculatorButton';
import calculate from '../logic/calculate';
import './Calculator.scss';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [calcState, setCalcState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleBtnClick = (value) => {
    const newCalcState = calculate(calcState, value);
    setCalcState(newCalcState);
    const { next, total, operation } = newCalcState;
    setInput(next || total || operation || '');
  };

  return (
    <div id="calc-wrapper" data-testid="calc-wrapper">
      <h2>Let&#39;s do some math!</h2>
      <div id="calc">
        <div className="display-calc">
          <input type="text" value={input} readOnly />
        </div>
        <div className="btn-calc">
          {[
            ['AC', '+/-', '%', '÷'],
            ['7', '8', '9', 'x'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '+'],
            ['0', '.', '='],
          ].map((row) => (
            <div key={uuidv4()} className="row-calc">
              {row.map((value) => (
                <CalculatorButton
                  key={value}
                  value={value}
                  onClick={() => handleBtnClick(value)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
