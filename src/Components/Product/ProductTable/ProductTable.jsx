import { useState, useEffect } from 'react';
import TableWithPagi from '../../Table/TableWithPagination';
import { ProductColumns } from '../../Table/Columns';
import DefaultButton from '../../../Components/Button/DefaultButton';
import InputField from '../../InputField/InputField';
import { useNavigate } from 'react-router-dom';
import { GoPlus } from "react-icons/go";
import { getAllProduct } from '@/apis/ProductApis/Apis';
import axios from 'axios';

export const ProductTable = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  //get the products data
  useEffect(() => {
    getAllProduct()
      .then((data) => {
        setProducts(data);  
        setFilteredData(data);  
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
        <h3 className="flex items-center text-xl font-semibold font-inter">Product List</h3>
        <DefaultButton handleClick={handleAddProduct} btnLabel="New" className="w-24 text-purple-500 from-white to-white hover:from-purple-50 hover:to-purple-50 "   Icon={<GoPlus/>}/>
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
          <DefaultButton handleClick={handleClear} btnLabel='Clear' className='w-24 text-red-500 from-white to-white hover:from-red-200 hover:to-red-200 ' />
          <DefaultButton handleClick={handleSearch} btnLabel='Search' className='w-24' />

        </div>
      </div>

      <TableWithPagi
        columns={ProductColumns}
        data={filteredData} 
        itemsPerPage={10}
        getRowId={(row) => row.id}  
      />
    </>
  );
};
