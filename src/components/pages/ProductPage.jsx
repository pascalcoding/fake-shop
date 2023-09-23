import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../buttons.css';
import './ProductPage.css';
import { useRef } from 'react';

function ProductPage({ products, selectedProducts, setSelectedProducts }) {
  const amountRef = useRef(null);
  const { id } = useParams();
  const product = products.find((product) => product.id == Number(id));

  const handleClick = () => {
    const amount = amountRef.current.value;
    if (amount === 0) {
      return;
    }
    const newSelectedProducts = selectedProducts.filter(
      (currentProduct) => currentProduct.id !== product.id
    );
    newSelectedProducts.push({ ...product, amount: amount });
    setSelectedProducts(() => newSelectedProducts);
  };

  return (
    <div className="product-showcase">
      <div>
        <img style={{ maxWidth: '350px' }} src={product.image} />
      </div>
      <div className="description">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div>{product.price} €</div>
        <div>
          <label htmlFor="amount">Amount: </label>
          <input
            type="number"
            name="amount"
            id="amount"
            data-testid="amount-input"
            ref={amountRef}
          />
        </div>
        <button className="green-button" type="Button" onClick={handleClick}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

ProductPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  selectedProducts: PropTypes.arrayOf(PropTypes.object),
  setSelectedProducts: PropTypes.func,
};

export default ProductPage;
