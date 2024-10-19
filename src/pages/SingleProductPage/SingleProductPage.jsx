import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../Components/Product/ProductCard/ProductCard';

const SingleProductPage = () => {
  const { id } = useParams();

  return (
    <div>
      <ProductCard id={id} />
    </div>
  );
};

export default SingleProductPage;
