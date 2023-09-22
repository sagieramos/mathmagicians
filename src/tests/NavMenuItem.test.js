// Import necessary dependencies
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import NavMenuItem from '../components/NavMenuItem';

test('renders NavMenuItem component correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <NavMenuItem to="/calculator">Example</NavMenuItem>
    </MemoryRouter>,
  );
  expect(container).toMatchSnapshot();
});
