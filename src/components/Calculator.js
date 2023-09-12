import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import { v4 as uuidv4 } from 'uuid';
import './Calculator.scss';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleAction = (value) => {
    if (value === '=') {
      try {
        const result = evaluate(input);
        setInput(result.toString() || 'Error');
      } catch (error) {
        setInput('Error');
      }
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
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div id="calc">
      <div className="display-calc">
        <input type="text" value={input} readOnly />
      </div>
      <div className="btn-calc">
        <div className="row-calc">
          {['AC', '+/-', '%', '+'].map((value) => (
            <button key={uuidv4()} onClick={() => handleAction(value)} type="button">
              {value}
            </button>
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
              <button key={uuidv4()} onClick={() => handleAction(value === 'x' ? '*' : value)} type="button">
                {value}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;