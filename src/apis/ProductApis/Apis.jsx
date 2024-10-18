import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com/', 
});

// Get all products
export const getAllProduct = async () => {
  try {
    const response = await api.get('/products');
    const products = response.data.products;  
    console.log('products:', products);  
    return products;  
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;  
  }
};

export default api;
