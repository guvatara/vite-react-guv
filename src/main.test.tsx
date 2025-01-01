// FILE: src/main.test.tsx

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import App from './App';

test('renders App component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headingElement = screen.getByText(/Vite \+ React/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders Vite logo', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const viteLogo = screen.getByAltText(/Vite logo/i);
  expect(viteLogo).toBeInTheDocument();
});

test('renders React logo', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const reactLogo = screen.getByAltText(/React logo/i);
  expect(reactLogo).toBeInTheDocument();
});

test('renders count button', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const countButton = screen.getByRole('button', { name: /count is/i });
  expect(countButton).toBeInTheDocument();
});