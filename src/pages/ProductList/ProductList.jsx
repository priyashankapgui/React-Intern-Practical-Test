import React from 'react'
import Layout from '@/Components/Layout/Layout'
import { ProductTable } from '@/Components/Product/ProductTable/ProductTable'

const ProductList = () => {
  return (
    <Layout>
        <div>
            <ProductTable/>
        </div>
    </Layout>
  )
}

export default ProductList
