import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/LoginPage/LoginPage';
import AddNewPage from '@/pages/AddNewPage/AddNewPage';
import SingleProductPage from '@/pages/SingleProductPage/SingleProductPage';
import ProductList from '@/pages/ProductList/ProductList';
import Tespage from '@/pages/Tespage/Tespage';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/product-list' element={<ProductList/>}/>
        <Route path='/add-new' element={<AddNewPage />} />
        <Route path='/product/:id' element={<SingleProductPage />} />
        <Route path='/test' element={<Tespage/>} />
      </Routes>
    </div>
  )
}

export default Routers
