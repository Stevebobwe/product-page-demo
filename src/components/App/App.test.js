import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
  const element = screen.getByText(/Premium Furniture Company/i);
  expect(element).toBeInTheDocument();
});
