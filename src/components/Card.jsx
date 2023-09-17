import PropTypes from 'prop-types';
import { useState } from 'react';
import './Card.css';

function Card({ productName, description, price }) {
  const [amount, setAmount] = useState(0);
  return (
    <div className="card">
      <h3>{productName}</h3>
      <p>{description}</p>
      <div>{price}</div>
    </div>
  );
}

Card.propTypes = {
  productName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

Card.defaultProps = {
  productName: 'Example',
  description: 'Example Description',
  price: 1.1,
};

export default Card;
