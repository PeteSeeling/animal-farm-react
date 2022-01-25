import { render, screen } from '@testing-library/react';
import App from './App';

test('Pete Seeling', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pete Seeling/i);
  expect(linkElement).toBeInTheDocument();
});
