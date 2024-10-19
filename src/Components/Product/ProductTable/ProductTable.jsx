import { useState, useEffect } from 'react';
import TableWithPagi from '../../Table/TableWithPagination';
import { ProductColumns } from '../../Table/Columns';
import DefaultButton from '../../../Components/Button/DefaultButton';
import SearchBar from '../../Searchbar/Searchbar';
import { useNavigate } from 'react-router-dom';
import { GoPlus } from "react-icons/go";
import { getAllProduct } from '@/apis/ProductApis/Apis';

export const ProductTable = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');
  const [searchInitiated, setSearchInitiated] = useState(false);
  const navigate = useNavigate();

  // Fetch products data
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

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSelectedSuggestion('');
  };

  // Handle suggestion selection
  const handleSuggestionSelect = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setSearchQuery(suggestion);
  };

  // Handle search click
  const handleSearchClick = () => {
    setSearchInitiated(true);

    if (selectedSuggestion) {
      const [id] = selectedSuggestion.split(' ');
      const filtered = products.filter((product) =>
        product.id.toString() === id
      );
      setFilteredData(filtered);
    } else if (searchQuery) {
      const filtered = products.filter((product) =>
        `${product.id} ${product.name}`.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(products);
    }
  };

  // Clear the search query and reset the table
  const handleClear = () => {
    setSearchQuery('');
    setSelectedSuggestion('');
    setSearchInitiated(false);
    setFilteredData(products);
  };

  // Handle adding a new product
  const handleAddProduct = () => {
    navigate('/add-product');
  };

  // Handle row click and navigate to single product page
  const handleRowClick = (row) => {
    navigate(`/product/${row.id}`);  // Replace `/product/` with your actual route if different
  };

  return (
    <>
      <div className="flex justify-between mb-2">
        <h3 className="flex items-center text-xl font-semibold font-inter">Product List</h3>
        <DefaultButton
          handleClick={handleAddProduct}
          btnLabel="New"
          className="w-24 text-purple-500 from-white to-white hover:from-purple-50 hover:to-purple-50"
          Icon={<GoPlus />}
        />
      </div>

      <div className="flex justify-between mb-2">
        <div className="flex gap-1 mb-4">
          <SearchBar
            id="branch"
            width="w-[400px]"
            value={searchQuery}
            placeholder="Search by Product ID or Name"
            onChange={handleSearchChange}
            suggestions={products.map((product) => `${product.id} ${product.title}`)}
            onSuggestionSelect={handleSuggestionSelect}
          />
        </div>

        <div className="flex gap-4 mb-4">
          <DefaultButton
            handleClick={handleClear}
            btnLabel="Clear"
            className="w-24 text-red-500 from-white to-white hover:from-red-200 hover:to-red-200"
          />
          <DefaultButton
            handleClick={handleSearchClick}
            btnLabel="Search"
            className="w-24"
          />
        </div>
      </div>

      <TableWithPagi
        columns={ProductColumns}
        data={searchInitiated ? filteredData : products}
        itemsPerPage={10}
        getRowId={(row) => row.id}
        onRowClick={handleRowClick}  // Add the row click handler
      />
    </>
  );
};
