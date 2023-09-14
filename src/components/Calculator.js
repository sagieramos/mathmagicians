import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CalculatorButton from './button';
import calculate from '../logic/calculate';
import QuoteComponent from './QuoteComponent';
import './Calculator.scss';

const api = {
  Key: 'qq3TQU5AD1tRAqUt3kq5Eg==KTG05ywHFyq0JPk1',
  url: 'https://api.api-ninjas.com/v1/quotes?category=happiness',
};

const Calculator = () => {
  const [input, setInput] = useState('');
  const [calcState, setCalcState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const [quoteData, setQuoteData] = useState({
    quote: {
      quote: '',
      author: '',
      category: '',
    },
    loading: true,
    error: null,
  });

  const handleBtnClick = (value) => {
    const newCalcState = calculate(calcState, value);
    setCalcState(newCalcState);
    const { next, total, operation } = newCalcState;
    setInput(next || total || operation || '');
  };

  useEffect(() => {
    const fetchQuote = async () => {
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
        setQuoteData({ quote: data[0], loading: false, error: null });
        console.log(data);
      } catch (error) {
        setQuoteData({ quote: { quote: '', author: '', category: '' }, loading: false, error: error.message });
      }
    };

    fetchQuote();
  }, []);

  let quoteContent;
  if (quoteData.loading) {
    quoteContent = <p>Loading...</p>;
  } else if (quoteData.error) {
    quoteContent = (
      <p>
        Error:
        {' '}
        {quoteData.error}
      </p>
    );
  } else {
    const { quote } = quoteData;
    quoteContent = <QuoteComponent quote={quote} />;
  }

  return (
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
      <div key={uuidv4()} className="quote">
        {quoteContent}
      </div>
    </div>
  );
};

export default Calculator;
