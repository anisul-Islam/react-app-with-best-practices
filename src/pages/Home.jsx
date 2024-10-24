import React, { useContext } from 'react';

import Products from '../components/products/Products';


const Home = () => {
  const { isLoading, error, products } = useContext(ProductContext);

  if (isLoading) {
    return <h2>Products are loading...</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <Products />
    </div>
  );
};

export default Home;
