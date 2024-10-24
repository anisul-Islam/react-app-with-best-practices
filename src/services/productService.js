import axios from 'axios';

export const getAllProducts = async () => {
  const res = await axios('https://fakestoreapi.com/products');
  return res.data;
};

export const getSingleProduct = async (id) => {
  const res = await axios(`https://fakestoreapi.com/products/${id}`);
  return res.data;
};
