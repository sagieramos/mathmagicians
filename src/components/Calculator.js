import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import { v4 as uuidv4 } from 'uuid';

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
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <div className="row">
          {['AC', '+/-', '%', '+'].map((value) => (
            <button key={uuidv4()} onClick={() => handleAction(value)} type="button">
              {value}
            </button>
          ))}
        </div>
        {[
          ['7', '8', '9', '*'],
          ['4', '5', '6', '-'],
          ['1', '2', '3', '+'],
          ['0', '='],
        ].map((row) => (
          <div key={uuidv4()} className="row">
            {row.map((value) => (
              <button key={uuidv4()} onClick={() => handleAction(value)} type="button">
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
