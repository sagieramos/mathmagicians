import React from 'react';
import PropTypes from 'prop-types';

const QuoteComponent = ({ quote }) => (
  <div>
    <p>{quote.quote}</p>
    <span>
      —
      {quote.author}
    </span>
  </div>
);

QuoteComponent.propTypes = {
  quote: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuoteComponent;
