import ProductsCarousel from '@/components/shared/ProductsCarousel'
import React from 'react'
import { discountsGridProducts as similarProducts } from '@/data';
import Heading from '@/components/shared/Heading';

const SimilarProducts = () => {
  return (

      <div
        className='border border-b-4 rounded-lg'
      >
        <Heading
          element='h3'
          variant='h3'
          className='py-6 px-3 mb-6'
          style="underline"
        >
          کالاهای مشابه
        </Heading>
        <ProductsCarousel
          products={similarProducts}
        />
      </div>
      
  )
}

export default SimilarProducts