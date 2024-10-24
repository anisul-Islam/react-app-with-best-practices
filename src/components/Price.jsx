import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ price }) => {
  return <p>{price}</p>;
};

Price.propTypes = {
  price: PropTypes.number,
};

export default Price;
