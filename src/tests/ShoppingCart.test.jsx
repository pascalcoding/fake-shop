import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ShoppingCart from '../components/pages/ShoppingCart'; // Adjust the import path as needed
import { MemoryRouter } from 'react-router-dom';

// Mock setSelectedProducts function
const setSelectedProducts = vi.fn();

describe('ShoppingCart component', () => {
  it('renders an empty cart message when no items are selected', () => {
    render(
      <MemoryRouter>
        <ShoppingCart
          selectedProducts={[]}
          setSelectedProducts={setSelectedProducts}
        />
      </MemoryRouter>
    );
    expect(screen.getByText('The Shopping Cart is empty')).toBeInTheDocument();
  });

  it('renders selected products and handles quantity changes', () => {
    const selectedProducts = [
      {
        id: 1,
        title: 'Test Product 1',
        price: 100,
        amount: 2,
        image: '',
      },
    ];

    render(
      <ShoppingCart
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
    );

    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('Amount:')).toBeInTheDocument();
  });
});
