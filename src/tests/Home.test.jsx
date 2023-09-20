import { render, screen } from '@testing-library/react';
import Home from '../components/pages/Home';
import { describe, expect, it } from 'vitest';

describe('Home component', () => {
  it('renders heading correctly', () => {
    render(<Home />);
    expect(screen.getByRole('heading').textContent).toBe(
      'Your Tech Haven - Elevate Your Electronics Experience'
    );
  });

  it('renders paragraph correctly', () => {
    render(<Home />);
    const paragraphText = screen.getByTestId('welcome-paragraph');
    expect(paragraphText).toBeInTheDocument();
    expect(paragraphText).toHaveTextContent('cutting-edge tech');
    expect(paragraphText).toHaveTextContent('top brands');
    expect(paragraphText).toHaveTextContent('future of tech shopping');
  });
});
