import { data } from "autoprefixer";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8070",
});

// Add a product
export const addProduct = async (product) => {
  try {
    const response = await api.post("/products/add", product);
    const products = response.data;
    console.log("products:", products);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

// Get all products
export const getAllProduct = async () => {
  try {
    const response = await api.get("/products");
    const products = response.data;
    console.log("products:", products);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

//Delete product
export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/${id}`);
    console.log("Product deleted:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export default api;
