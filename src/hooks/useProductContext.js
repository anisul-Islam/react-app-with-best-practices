import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

export const useProductContext = () => {
  return useContext(ProductContext);
};
