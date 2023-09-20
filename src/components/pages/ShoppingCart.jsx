import PropTypes from 'prop-types';
import './ShoppingCart.css';
import { Link } from 'react-router-dom';
import '../buttons.css';

function ShoppingCart({ selectedProducts, setSelectedProducts }) {
  const totalPrice = selectedProducts.reduce(
    (a, b) => a + b.price * b.amount,
    0
  );

  const handleChange = (e) => {
    const id = Number(
      e.target.parentElement.parentElement.parentElement.getAttribute('id')
    );
    const newSelectedProducts = selectedProducts.map((product) => {
      if (product.id !== id) {
        return product;
      }
      return {
        ...product,
        amount: Number(e.target.value),
      };
    });
    setSelectedProducts(() => newSelectedProducts);
  };

  const handleClickRemove = (e) => {
    const id = Number(e.target.parentElement.parentElement.getAttribute('id'));
    const newSelectedProducts = selectedProducts.filter(
      (product) => product.id !== id
    );
    setSelectedProducts(() => newSelectedProducts);
  };

  if (selectedProducts.length === 0) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <p>The Shopping Cart is empty</p>
        <Link to="/Shop">
          <button className="green-button" type="button">
            Go back to the Shop
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="shopping-cart">
        <h2>Items: {selectedProducts.length}</h2>
        <div className="item-container">
          {selectedProducts.map((product) => {
            return (
              <div key={product.id} id={product.id} className="item">
                <div>
                  <img style={{ maxWidth: '150px' }} src={product.image} />
                </div>
                <div style={{ maxWidth: '400px' }}>
                  <h3>{product.title}</h3>
                  <div>
                    <label htmlFor="amount">Amount: </label>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      defaultValue={product.amount}
                      onChange={handleChange}
                    />
                  </div>
                  <div>Price: {product.amount * product.price} €</div>
                  <button className="red-button" onClick={handleClickRemove}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div>Total Price: {totalPrice} €</div>
      </div>
    </>
  );
}

ShoppingCart.propTypes = {
  selectedProducts: PropTypes.arrayOf(PropTypes.object),
  setSelectedProducts: PropTypes.func,
};

export default ShoppingCart;
