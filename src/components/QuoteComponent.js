import React, { useState, useEffect } from 'react';

const api = {
  Key: 'qq3TQU5AD1tRAqUt3kq5Eg==KTG05ywHFyq0JPk1',
  url: 'https://api.api-ninjas.com/v1/quotes?category=love',
};

const QuoteComponent = () => {
  const [quoteData, setQuoteData] = useState({
    quote: {
      quote: '',
      author: '',
      category: '',
    },
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted

    const fetchData = async () => {
      try {
        const response = await fetch(api.url, {
          headers: {
            'X-Api-Key': api.Key,
          },
        });

        if (!isMounted) {
          return; // Abort if component is unmounted
        }

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (isMounted) {
          setQuoteData({
            quote: data[0],
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        if (isMounted) {
          setQuoteData({
            quote: { quote: '', author: '', category: '' },
            loading: false,
            error: error.message,
          });
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      isMounted = false; // Set isMounted to false when the component unmounts
    };
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
    quoteContent = (
      <div className="quote">
        <p>{quoteData.quote.quote}</p>
        <span>
          —
          {quoteData.quote.author}
        </span>
      </div>
    );
  }

  return quoteContent;
};

export default QuoteComponent;
