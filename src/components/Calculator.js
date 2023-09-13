import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import { v4 as uuidv4 } from 'uuid';
import CalculatorButton from './button';
import './Calculator.scss';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [performCalc, setPerformCalc] = useState(false);

  const handleAction = (value) => {
    if (value === '=') {
      try {
        const valueToEvalue = input.replace(/÷|x/g, (match) => (match === '÷' ? '/' : '*'));
        const result = evaluate(valueToEvalue);
        setInput(result.toString() || 'Error');
      } catch (error) {
        setInput('NaN');
      }
      setPerformCalc(true);
    } else if (value === '+/-') {
      setInput((prevInput) => {
        if (!prevInput) {
          return prevInput;
        }
        if (prevInput.startsWith('-')) {
          return prevInput.substring(1);
        }
        return `-${prevInput}`;
      });
    } else if (value === 'AC') {
      setInput('');
    } else {
      if (performCalc) {
        setInput('');
        setPerformCalc(false);
      }
      const operators = ['%', '÷', 'x', '-', '+'];
      if (operators.includes(value) && operators.includes(input[input.length - 1])) {
        setInput((prevInput) => prevInput.slice(0, -1) + value);
      } else setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div id="calc">
      <div className="display-calc">
        <input type="text" value={input} readOnly />
      </div>
      <div className="btn-calc">
        <div className="row-calc">
          {['AC', '+/-', '%', '÷'].map((value) => (
            <CalculatorButton key={uuidv4()} value={value} onClick={handleAction} />
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
                onClick={handleAction}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
