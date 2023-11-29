import { render, screen } from '@testing-library/react';
import App from '../App';

describe('render', () => {
  test('should render', () => {
    render(<App />);
    const text = screen.getByText('Tables');
    expect(text).toBeInTheDocument();
  });
});
