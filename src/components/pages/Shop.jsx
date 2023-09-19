import PropTypes from 'prop-types';
import Card from '../Card';
import './Shop.css';

function Shop({ products }) {
  return (
    <>
      <div className="products">
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

Shop.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default Shop;
