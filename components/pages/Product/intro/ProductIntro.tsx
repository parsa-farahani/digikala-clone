'use client';

import React, { useState } from 'react'
import Breadcrumb from '@/components/shared/Breadcrumb'
import Link from 'next/link';
import MobileDivider from '@/components/shared/MobileDivider';
import Heading from '@/components/shared/Heading';
import { FaShop } from 'react-icons/fa6';
import IntroImages from './IntroImages';
import IntroDescriptions from './IntroDescriptions';
import IntroSeller from './IntroSeller';
import Rules from './Rules';
import { Models } from 'appwrite';
import { CATEGORIES } from '@/lib/utils';
import { productMiniInfo } from '@/data/product';
// import { useProduct } from '@/app/(content)/(public)/products/[productId]/ProductsProvider';





const sizes = [
   {
      id: '1',
      value: 41,
      title: '41',
   },
   {
      id: '2',
      value: 44,
      title: '44',
   },
   {
      id: '3',
      value: 46,
      title: '46',
   },
]

const colors = [
   {
      id: '1',
      value: 'black',
      title: 'مشکی',
      color: '#000000',
   },
   {
      id: '2',
      value: 'white',
      title: 'سفید',
      color: '#ffffff',
   },
   {
      id: '3',
      value: 'blue',
      title: 'آبی',
      color: '#208bf7',
   },
]

const properties = [
   {
      title: 'نوع کفش ورزشی مردانه',
      value: 'پیاده روی',
   },
   {
      title: 'نحوه بسته شدن کفش',
      value: 'بندی',
   },
   {
      title: 'جنس زیره',
      value: 'پی‌وی‌سی',
   },
   {
      title: 'ویژگی‌های تخصصی کفش',
      value: 'کاهش فشار‌های وارده',
   },
]

const ProductIntro = (
   {
      product,
   }: {
      product?: Models.Document;
   }
) => {

   // const product = useProduct();

   const breadCrumbs = [
      {
         title: 'دیجی‌کالا',
         href: '/',
      },
      {
         title: CATEGORIES[product?.category] ?? 'نام دسته بندی',
         href: `/search?c=${product?.category ?? 'دسته_بندی'}`,
      },
   ]

   const descBreadcrumbs = [
      {
         title: CATEGORIES[product?.category] ?? 'نام دسته بندی',
         href: `/search?c=${product?.category ?? 'دسته_بندی'}`,
      },
      {
         title: product?.tag ?? 'نام محصول',
         href: `/search?q=${product?.tag ?? 'نام محصول'}`,
      }
   ]


   const [selectedSizeId, setSelectedSizeId] = useState('1');
   const [selectedColorId, setSelectedColorId] = useState('1');

  return (
   <>
      <div className="hidden lg:flex items-center py-8 justify-between" >
         <div >
            <Breadcrumb navlinks={breadCrumbs} />
         </div>
         <div>
            <Link
               href="#"
               className='flex items-center gap-2 text-sm text-text-3'
            >
               فروش در دیجی کالا
               <span>
                  <FaShop/>
               </span>
            </Link>
         </div>
      </div>
      <article
      >

         <div
            className='flex flex-col lg:flex-row lg:gap-4'
         >

            {/* images  */}
            <IntroImages
               imageUrls={product?.imageUrls}
            />

            {/* title & description  */}
            <div
               className='relative z-5 lg:z-0 lg:grow-1 flex flex-col bg-light-1 max-lg:mt-[400px]'
            >
               <div className='h-fit hidden lg:block pb-4' >
                  <Breadcrumb linkClassName="lg:text-lg lg:!text-secondary-500 !h-fit" className='!h-fit' navlinks={descBreadcrumbs} />
                  <Heading
                     element='h1'
                     variant='h3'
                  >
                     {
                        product?.name ?? 'نام محصول'
                     }
                  </Heading>
               </div>

               <div
                  className='grow-1 lg:flex lg:gap-4 lg:justify-between'
               >
                  {/* Descriptions  */}
                  <IntroDescriptions
                     product={product!}
                     descBreadcrumbs={descBreadcrumbs}
                     sizes={sizes}
                     selectedSizeId={selectedSizeId}
                     setSelectedSizeId={setSelectedSizeId}
                     colors={colors}
                     selectedColorId={selectedColorId}
                     setSelectedColorId={setSelectedColorId}
                     properties={properties}
                  />

                  <div className='relative z-2 lg:hidden bg-light-1 py-6' >
                     <MobileDivider className='' />
                  </div>

                  {/* Seller Info  */}
                  <div>

                     <div className='lg:sticky lg:top-[110px]' >
                        <IntroSeller
                           product={product!}
                           seller={product?.seller ?? 'نام فروشنده'}
                           productMiniInfo={productMiniInfo}
                        />
                     
                        <div className='relative z-2 lg:hidden bg-light-1 pb-6' >
                           <MobileDivider className='' />
                        </div>

                        <Rules />
                        
                        <div className='relative z-2 lg:hidden bg-light-1 py-6' >
                           <MobileDivider className='' />
                        </div>
                     </div>
                  </div>

               </div>
            </div>

         </div>

      </article>
   </>
  )
}

export default ProductIntro