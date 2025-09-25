import Divider from '@/components/shared/Divider'
import React from 'react'
import ProductComments from '../comments/ProductComments'
import ProductQuestions from '../comments/ProductQuestions'
import MobileDivider from '@/components/shared/MobileDivider'
import { Models } from 'appwrite'

const userImages = [
   '/images/products/cards/shoe-1.jpg',
   '/images/products/cards/shoe-2.jpg',
   '/images/products/cards/shoe-3.jpg',
   '/images/products/cards/shoe-4.jpg',
   '/images/products/cards/shoe-5.jpg',
]

const UsersFeedbacks = (
   {
      product,
   }: {
      product: Models.Document;
   }
) => {

  return (
    <section
   >
      <div>
         <ProductComments 
            product={product}
            userImages={userImages}
         />

         <MobileDivider className='my-4' />

         <Divider className='!h-[3px] my-6 hidden lg:block' />

         <ProductQuestions 
            product={product}
         />
      </div>
   </section>
  )
}

export default UsersFeedbacks;