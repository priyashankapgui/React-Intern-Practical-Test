import Layout from '@/Components/Layout/Layout'
import AddNewProductForm from '@/section/ProductForm/AddNewProductForm'
import React from 'react'

function AddNewPage() {
  return (
    <Layout>
      <div className="flex items-center justify-center p-9">
      <AddNewProductForm />
      </div>
    </Layout>
  )
}

export default AddNewPage