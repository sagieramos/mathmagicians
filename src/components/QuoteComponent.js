import React from 'react';
import PropTypes from 'prop-types';

const QuoteComponent = ({ quote }) => (
  <>
    <p>{quote.quote}</p>
    <span>
      —
      {quote.author}
    </span>
  </>
);

QuoteComponent.propTypes = {
  quote: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuoteComponent;
