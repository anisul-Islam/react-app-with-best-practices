import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

import Product from './product';
import { useProductContext } from '../../hooks/useProductContext';

const Products = () => {
  const { products } = useProductContext();

  if (products.length === 0) {
    <p>No products available</p>;
  }
  return (
    <Container>
      <Row className="">
        {products.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
