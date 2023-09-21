import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NavBar from '../components/NavBar';
import { MemoryRouter } from 'react-router-dom';

describe('NavBar component', () => {
  it('Renders headline correctly', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading').textContent).toBe(
      'Fake Elecetronics Shop'
    );
  });

  it('Renders links correctly', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    const shopLink = screen.getByText('Shop');
    const cartLink = screen.getByText('Shopping Cart');

    expect(homeLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
  });
});
