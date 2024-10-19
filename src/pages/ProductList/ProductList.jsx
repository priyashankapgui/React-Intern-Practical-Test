import React from 'react'
import Layout from '@/Components/Layout/Layout'
import { ProductTable } from '@/Components/Product/ProductTable/ProductTable'

const ProductList = () => {
  return (
    <Layout>
        <div className='p-9'>
            <ProductTable/>
        </div>
    </Layout>
  )
}

export default ProductList
