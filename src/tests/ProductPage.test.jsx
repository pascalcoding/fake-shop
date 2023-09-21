import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductPage from '../components/pages/ProductPage';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const products = [
  {
    id: 1,
    title: 'Test Product',
    price: 100,
    category: 'Electronics',
    description: 'Test product is very good',
    image: '',
  },
];

const selectedProducts = [];
const setSelectedProducts = vi.fn();

describe('ProductPage component', () => {
  it('ProductPage renders correctly', () => {
    vi.mock('react-router-dom', async () => {
      const mod = await vi.importActual('react-router-dom');
      return {
        ...mod,
        useParams: () => ({ id: 1 }),
      };
    });

    render(
      <MemoryRouter>
        <ProductPage
          products={products}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test product is very good')).toBeInTheDocument();
    expect(screen.getByText('100 €')).toBeInTheDocument();

    expect(screen.getByText('Add to cart')).toBeInTheDocument();
  });

  it('Adding product to the cart works accordingly', async () => {
    const user = userEvent.setup();
    vi.mock('react-router-dom', async () => {
      const mod = await vi.importActual('react-router-dom');
      return {
        ...mod,
        useParams: () => ({ id: 1 }),
      };
    });

    render(
      <MemoryRouter>
        <ProductPage
          products={products}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      </MemoryRouter>
    );
    const amountInput = screen.getByTestId('amount-input');
    const button = screen.getByRole('button', { name: 'Add to cart' });

    await user.type(amountInput, '3');
    await user.click(button);
    expect(setSelectedProducts).toBeCalled();
  });
});
