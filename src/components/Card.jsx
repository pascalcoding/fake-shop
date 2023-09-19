import PropTypes from 'prop-types';
import { useState } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ product }) {
  const [amount, setAmount] = useState(0);

  const handleClick = () => {};

  return (
    <Link className="card" to={`/Shop/product/${product.id}`}>
      <h3>{product.title}</h3>
      <img
        src={product.image}
        style={{ maxWidth: '150px', maxHeight: '100px' }}
      />
      <div>{product.price} €</div>
    </Link>
  );
}

Card.propTypes = {
  product: PropTypes.object,
};

export default Card;
