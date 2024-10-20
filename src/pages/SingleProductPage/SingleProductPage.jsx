import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../Components/Product/ProductCard/ProductCard';
import Layout from '@/Components/Layout/Layout';

const SingleProductPage = () => {
  const { id } = useParams();

  return (
    <Layout>
      <ProductCard id={id} />
    </Layout>
  );
};

export default SingleProductPage;
