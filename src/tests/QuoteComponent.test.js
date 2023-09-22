import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import QuoteComponent from '../components/QuoteComponent';

fetchMock.enableMocks();

test('QuoteComponent renders a random quote', async () => {
  fetchMock.mockResolvedValueOnce({
    json: async () => ({
      quote: '',
      author: '',
      category: '',
    }),
  });

  render(<QuoteComponent />);

  await waitFor(() => {
    expect(screen.queryByText('Loading...')).toBeNull();
  });
});
