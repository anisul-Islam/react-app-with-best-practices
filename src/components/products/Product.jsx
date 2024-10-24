import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import Price from '../Price';
import { Button } from 'react-bootstrap';
import { useProductContext } from '../../hooks/useProductContext';


  // const { products, setProducts } = useContext(ProductContext);

const Product = ({ product }) => {
  const { products, setProducts } = useProductContext();
  const handleDeleteProduct = (id) => {
    const filterProducts = products.filter((product) => product.id !== id);
    setProducts(filterProducts);
  };
  return (
    <article key={product.id}>
      <Title title={product.title} />
      <Price price={product.price} />
      <Button variant="primary" onClick={() => handleDeleteProduct(product.id)}>
        Delete
      </Button>{' '}
    </article>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }),
};

export default Product;
