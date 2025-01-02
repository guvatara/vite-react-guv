// src/app/App.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { default as App } from './App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  test('renders Vite and React logos', () => {
    render(<App />);
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  test('renders Vite + React heading', () => {
    render(<App />);
    const heading = screen.getByText(/Vite \+ React/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders initial count', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });

  test('increments count on button click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
  });

  test('renders edit instructions', () => {
    render(<App />);
    const editInstructions = screen.getByText(/Edit src\/App.tsx and save to test HMR/i);
    expect(editInstructions).toBeInTheDocument();
  });

  test('renders read the docs text', () => {
    render(<App />);
    const readTheDocs = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(readTheDocs).toBeInTheDocument();
  });
});