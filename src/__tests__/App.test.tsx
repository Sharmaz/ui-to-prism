import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('render', () => {
  test('should render', () => {
    render(<App />);
    const text = screen.getByText('Hello Assessment!!');
    expect(text).toBeInTheDocument();
  });
});
