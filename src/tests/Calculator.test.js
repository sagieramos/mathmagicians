import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

test('should render the calculator input correctly', () => {
  render(<Calculator />);
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});
test('should render the calculator correctly', () => {
  render(<Calculator />);
  const calculator = screen.getByTestId('calc-wrapper');
  expect(calculator).toMatchSnapshot();
});
test('should update the calculator input when the user presses a number button', () => {
  render(<Calculator />);
  const input = screen.getByRole('textbox');
  fireEvent.click(screen.getByText('1'));
  expect(input.value).toBe('1');
});
