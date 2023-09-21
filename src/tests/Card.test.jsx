import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from '../components/Card';
import { MemoryRouter } from 'react-router-dom';

describe('Card component', () => {
  it('Renders card correctly', () => {
    const product = {
      id: 1,
      title: 'Test Product 1',
      price: 100,
      category: 'Electronics',
      description: 'Test product 1 is very good',
      image: '',
    };
    const { container } = render(
      <MemoryRouter>
        <Card product={product} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
