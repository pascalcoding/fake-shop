import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Shop from '../components/pages/Shop';
import { MemoryRouter } from 'react-router-dom';

describe('Shop component', () => {
  it('Component renders correctly', () => {
    const products = [
      {
        id: 1,
        title: 'Test Product 1',
        price: 100,
        category: 'Electronics',
        description: 'Test product 1 is very good',
        image: '',
      },
      {
        id: 2,
        title: 'Test Product 2',
        price: 150,
        category: 'Electronics',
        description: 'Test product 2 is very bad',
        image: '',
      },
    ];

    const { container } = render(
      <MemoryRouter>
        <Shop products={products} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
