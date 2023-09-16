import React, { useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CalculatorButton from './CalculatorButton';
import calculate from '../logic/calculate';
import QuoteComponent from './QuoteComponent';
import { reducer, initialState } from './reducer';
import './Calculator.scss';

const api = {
  Key: 'qq3TQU5AD1tRAqUt3kq5Eg==KTG05ywHFyq0JPk1',
  url: 'https://api.api-ninjas.com/v1/quotes?category=love',
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleBtnClick = (value) => {
    const newCalcState = calculate(state.calcState, value);
    dispatch({ type: 'SET_CALC_STATE', payload: newCalcState });
    const { next, total, operation } = newCalcState;
    dispatch({ type: 'SET_INPUT', payload: next || total || operation || '' });
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(api.url, {
          headers: {
            'X-Api-Key': api.Key,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        dispatch({
          type: 'SET_QUOTE_DATA',
          payload: { quote: data[0], loading: false, error: null },
        });
      } catch (error) {
        dispatch({
          type: 'SET_QUOTE_DATA',
          payload: { quote: { quote: '', author: '', category: '' }, loading: false, error: error.message },
        });
      }
    })();
  }, []);

  let quoteContent;
  if (state.quoteData.loading) {
    quoteContent = <p>Loading...</p>;
  } else if (state.quoteData.error) {
    quoteContent = (
      <p>
        Error:
        {' '}
        {state.quoteData.error}
      </p>
    );
  } else {
    const { quote } = state.quoteData;
    quoteContent = <QuoteComponent quote={quote} />;
  }

  return (
    <div id="calc">
      <div className="display-calc">
        <input type="text" value={state.input} readOnly />
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
      <div key={uuidv4()} className="quote">
        {quoteContent}
      </div>
    </div>
  );
};

export default Calculator;
