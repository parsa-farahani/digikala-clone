import { Models } from 'appwrite'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { LuPackage2 } from 'react-icons/lu'

const SearchResultProduct = ((
   {
      product
   }: {
      product: Models.Document | CProduct;
   }
) => {


   const priceInToman = Math.floor((product?.price ?? 0) / 10).toLocaleString('US');

   const discountInRials = Math.floor(product?.price * (product?.discountPerc / 100))

   const finalPriceInToman = Math.floor((product?.price - discountInRials) / 10).toLocaleString('US');


   const isActualData = '$id' in product;


  return (
    <Link
         className='shadow-grid-product'
         href={isActualData ? `/products/${product.$id}` :'#'}
      >
         <article
            className='relative flex gap-4 md:flex-col p-4'
         >
            <div className='w-[140px] md:w-full md:max-w-[240px] mx-auto shrink-0 grow-0' >
            <Image
               src={isActualData ? (product.imageUrls![0]) : product.image}
               width={200}
               height={200}
               alt={isActualData ? product.name : product.title}
               className='block size-full object-cover object-center'
            />
            </div>

            <div className='pt-8 grow-1' >
            <p className='h-[40px] text-xs md:text-sm text-text-2 line-clamp-2 leading-5 max-w-full overflow-clip' >
               {
                  product.title
               }
            </p>
            <div className='text-[.6rem] lg:text-[.8rem] flex items-center justify-between' >
               <p className='w-full flex items-center gap-1' >
                  <LuPackage2 className='text-sky-300 text-sm lg:text-base' />
                  <span className='text-text-3 line-clamp-1' >
                  موجود در انبار دیجی‌کالا
                  </span>
               </p>
               <p>
                  <span className='flex items-center gap-1' >
                  4.5
                  <FaStar className='text-xs text-yellow-500' />
                  </span>
               </p>
            </div>

            <p className='w-full flex flex-col' >
               <span className='w-full flex items-center justify-between' >
                  {
                     (product.discountPerc > 0)
                     ? (
                        <span className='discount-badge text-xs' >
                           %
                           {
                              product.discountPerc
                           }
                        </span>
                     ): null
                  }
                  <span className='mr-auto' >
                     <span
                        className='text-sm md:text-lg'
                     >
                        {
                           finalPriceInToman
                        }
                     </span>
                     {" "}
                     <span className='toman' >
                        تومان
                     </span>
                  </span>
               </span>

               {
                  (product.discountPerc > 0)
                  ? (
                     <s className='line-through text-text-3 text-[.6rem] lg:text-[.8rem] w-full text-left leading-3 px-4' >
                        {
                           priceInToman
                        }
                     </s>
                  ): null
               }
            </p>
            </div>

            {/* sample colors  */}
            <div className='absolute left-auto right-[10%] bottom-0 md:right-auto md:left-0 md:top-[10%] flex md:flex-col gap-2 p-2' >
               <div className='size-[5px] aspect-square shrink-0 grow-0 rounded-full bg-blue-500' />
               <div className='size-[5px] aspect-square shrink-0 grow-0 rounded-full bg-pink-500' />
               <div className='size-[5px] aspect-square shrink-0 grow-0 rounded-full bg-indigo-500' />
            </div>
         </article>
      </Link>
  )
})

export default SearchResultProduct