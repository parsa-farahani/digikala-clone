import Section from '../../../shared/Section';
import React from 'react'
import CartContent from '../primaryCartPanel/CartContent';
import ProductsCarousel from '@/components/shared/ProductsCarousel';
import { discountsGridProducts } from '@/data';
import Heading from '@/components/shared/Heading';
import MobileDivider from '@/components/shared/MobileDivider';
import ExtraStuff from '../primaryCartPanel/ExtraStuff';

const PrimaryCartPanel = () => {
  return (
    <div>

      <div className='lg:hidden p-4' >
        <ExtraStuff />
      </div>
      
      {/* cart items & pricing */}
      <Section containerClassName='px-0' >
        <CartContent />
      </Section>


      {/* Related Products  */}
      <Section
        sectionClassName="border rounded-md lg:mt-8 pt-2"
        containerClassName='px-0'
      >
        <Heading
          element='h2'
          variant='h3'
          style='underline-always'
          className='mx-2 py-4 mb-4 max-lg:text-base'
        >
          خریداران این محصولات، محصولات زیر را هم خریده‌اند
        </Heading>
        <ProductsCarousel
          products={discountsGridProducts}
        />
      </Section>

      <MobileDivider />

      {/* Recent visits  */}
      <Section
        sectionClassName="border rounded-md lg:mt-8 pt-2"
        containerClassName='px-0'
      >
        <Heading
          element='h2'
          variant='h3'
          style='underline-always'
          className='mx-2 py-4 mb-4 max-lg:text-base'
        >
          بازدیدهای اخیر
        </Heading>
        <ProductsCarousel
          products={discountsGridProducts}
        />
      </Section>

    </div>
  )
}

export default PrimaryCartPanel