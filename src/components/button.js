import React from 'react';
import PropTypes from 'prop-types';

const CalculatorButton = ({ value, onClick }) => (
  <button onClick={() => onClick(value)} type="button">
    {value}
  </button>
);

CalculatorButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CalculatorButton;
