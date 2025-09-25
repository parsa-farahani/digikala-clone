import ProductCard from '@/components/shared/ProductCard'
import React from 'react'
import { discountsGridProducts } from '@/data'

const CustomProduct = () => {
  return (
    <section className='border rounded-lg mb-4' >
      <h2 className='sr-only'>
         کالاهای سفارشی
      </h2>
      <ProductCard
         product={discountsGridProducts[0]}
         variant='custom-product'
      />
    </section>
  )
}

export default CustomProduct