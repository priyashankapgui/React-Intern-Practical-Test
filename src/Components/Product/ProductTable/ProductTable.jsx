import { useState, useEffect } from 'react';
import TableWithPagi from '../../Table/TableWithPagination';
import { ProductColumns } from '../../Table/Columns';
import DefaultButton from '../../../Components/Button/DefaultButton';
import InputField from '../../InputField/InputField';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ProductTable = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products);
        setFilteredData(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);
  

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredData(
      products.filter((products) =>
        products.id.toLowerCase().includes(value)
      )
    );
  };

  const handleClear = () => {
    setSearch('');
    setFilteredData(products);
  };

  const handleAddProduct = () => {
    navigate('/add-product');
  };

  return (
    <>
      <div className='flex justify-between mb-2'>
        <h3 className="flex items-center font-semibold font-inter">Product List</h3>
        <DefaultButton handleClick={handleAddProduct} btnLabel="Add Product" className="w-64" />
      </div>

      <div className="flex justify-between mb-2">
        <div className="flex gap-1 mb-4">
          <InputField
            id="search"
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
        </div>

        <div className='flex gap-4 mb-4'>
          <DefaultButton handleClick={handleClear} btnLabel='Clear' />
          <DefaultButton handleClick={handleSearch} btnLabel='Search' />

        </div>
      </div>

      <TableWithPagi
        columns={ProductColumns}
        data={filteredData}  // Pass filteredData directly, not wrapped in an array
        itemsPerPage={10}
        getRowId={(row) => row.id}  // Ensure the correct ID field is used
      />
    </>
  );
};
