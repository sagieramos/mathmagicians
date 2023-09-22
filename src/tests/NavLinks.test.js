import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavLinks from '../components/NavLinks';
import '@testing-library/jest-dom';

test('renders NavLinks component correctly', () => {
  const { getByText, getByRole } = render(
    <MemoryRouter>
      <NavLinks />
    </MemoryRouter>,
  );

  expect(getByText('Math Magicians')).toBeInTheDocument();

  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Calculator')).toBeInTheDocument();
  expect(getByText('Quote')).toBeInTheDocument();

  const listElement = getByRole('list');
  expect(listElement).toBeInTheDocument();

  const listItems = listElement.querySelectorAll('li');
  expect(listItems.length).toBe(3);
});
