import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/LoginPage/LoginPage';
import AddNewPage from '@/pages/AddNewPage/AddNewPage';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/add-new' element={<AddNewPage />} />
      </Routes>
    </div>
  )
}

export default Routers
