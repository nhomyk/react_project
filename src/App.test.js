import { render, screen } from '@testing-library/react';
import App from './App';

test('renders link', () => {
  render(<App />);
  const linkElement = screen.getByText(/CHATBOT/i);
  expect(linkElement).toBeInTheDocument();
});