import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductPage.css';

function ProductPage({ products }) {
  const { id } = useParams();
  const product = products.find((product) => product.id == Number(id));
  return (
    <div className="product-showcase">
      <div>
        <img style={{ maxWidth: '350px' }} src={product.image} />
      </div>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div>{product.price} €</div>
      </div>
    </div>
  );
}

ProductPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default ProductPage;
