import React from 'react'
import Typography from './Typography';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineSpeakerphone } from 'react-icons/hi';


type CProduct = {
   id: string;
   image: string;
   title: string;
   price: number;
   discountPerc: number;
}

type ProductVariant = 'offers' | 'row' | 'grid' | 'carousel' | 'carousel-grid' | 'custom-product';

type ProductCardProps = {
   product: CProduct;
   variant: ProductVariant;
}


const ProductWrapper = (
   {
      product,
      children,
      variant,
   }: {
      product: CProduct;
      children: React.ReactNode;
      variant: ProductVariant;
   }
) => {

   const classes = `${variant === 'row' ? 'h-[240px] w-[150px] shrink-0 grow-0 border rounded-lg justify-start' : (variant === 'carousel-grid') ? 'h-full w-auto shrink-0 grow-0 border rounded-lg justify-start' : (variant === 'grid') ? 'h-auto py-2' : 'h-full p-2'} flex flex-col gap-2`

   switch (variant) {
      case 'grid':
      case 'carousel':
         return (
            <Link
               href={product?.id ? `/products/${product.id}` : '#'}
               className='block'
            >
               <article
                  className={classes}
               >
                  {
                     children
                  }
               </article>
            </Link>
         )
   
      default:
         return (
            <article
               className={classes}
            >
               {
                  children
               }
            </article>
         )
   }

}

const ProductCard = (
   {
      product,
      variant,
   }: ProductCardProps
) => {


   const priceInToman = Math.floor((product?.price ?? 0) / 10);

   const discountInRials = Math.floor(product?.price * (product?.discountPerc / 100))

   const finalPriceInToman = Math.floor((product?.price - discountInRials) / 10);


  return (
   <ProductWrapper
      product={product}
      variant={variant}
   >
      {
         (variant === 'custom-product')
         ? (
            <p className='flex items-center justify-between mb-2' >
               <span className='text-primary-600 font-heydari' >
                  فروش ویژه
               </span>
               <span className='text-xs text-text-3 flex items-center gap-1' >
                  سفارشی
                  <HiOutlineSpeakerphone className='text-pink-600 text-md' />
               </span>
            </p>
         ): null
      }
      <div
         className={`${variant === 'row' ? 'h-[140px] grow-0 shrink-0 bg-neutral-100 rounded-t-[inherit]' : (variant === 'carousel-grid') ? 'bg-neutral-100 rounded-t-[inherit] h-[60%]' : (variant === 'grid') ? 'h-[140px]' : 'grow-1 max-h-[50%]'} flex-center overflow-clip ${variant === 'custom-product' ? '!size-[140px] rounded-md m-auto overflow-clip' : ''}`}
      >
         <Image
            src={product?.image}
            width={100}
            height={100}
            alt={product.title}
            className={`block h-full w-full object-contain object-center ${variant === 'row' || variant === 'carousel-grid' ? 'mix-blend-multiply' : ''}`}
            loading='lazy'
         />
      </div>

      <div
         className={`grow-1 flex flex-col p-2 ${variant === 'carousel-grid' ? '!p-1 sm:p2' : ''}`}
      >
         <p
            className={`${(variant === 'grid') ? 'hidden' : (variant === 'row') ? 'mb-auto' : (variant === 'carousel-grid') ? '' : 'mt-auto'}`}
         >
            <span
               className={`${variant === 'carousel' ? 'text-text-1 mb-4 text-sm' : variant === 'carousel-grid' ? 'text-xs sm:text-base lg:text-lg mb-auto' : variant === 'row' ? 'text-text-2 text-xs' : 'text-text-1 text-sm lg:text-text-3'} line-clamp-2 `}
            >
               {
                  product.title
               }
            </span>
         </p>

            <div
               className={`flex flex-col lg:flex-row justify-between items-start ${variant === 'carousel-grid' ? 'mt-auto' : ''}`}
            >
               {
                  (product?.discountPerc > 0)
                  ? (
                     <span
                        className='flex items-center gap-2'
                     >
                        <span
                           className={`discount-badge ${variant === 'carousel-grid' ? 'text-[.7rem] leading-[.7rem]' : ''}`}
                        >
                           {
                              product.discountPerc
                           }
                           %
                        </span>
                        
                        <s
                           className={`line-through decoration-text-3 block lg:hidden ${variant === 'carousel-grid' ? 'max-sm:leading-[.5rem]' : ''}`}
                        >
                           <span
                              className={`text-text-3 text-xs lg:text-sm ${variant === 'carousel-grid' ? 'text-[.7rem] sm:text-sm' : ''}`}
                           >
                              {
                                 priceInToman
                              }
                           </span>
                        </s>
                     </span>
                  ) : (
                  null
                  )
               }

               <div
                  className={`flex flex-col ${variant === 'carousel-grid' ? 'ml-auto' : 'mr-auto'}`}
               >
                  <span>
                     <span
                        className={`text-md lg:text-lg text-text-1 ${variant === 'carousel-grid' ? 'text-sm sm:text-lg lg:text-lg' : ''}`}
                     >
                        {
                           finalPriceInToman
                        }

                     </span>
                     <span className='toman mr-1'>
                        تومان
                     </span>
                  </span>
                  {
                     (product?.discountPerc > 0)
                  ? (
                     <s
                        className='line-through decoration-text-3 hidden lg:block'
                     >
                        <Typography
                           variant='base'
                           className={`text-text-3`}
                        >
                           {
                              priceInToman
                           }
                        </Typography>
                     </s>
                  ) : (
                  null
                  )
                  }
               </div>
            </div>
      </div>

   </ProductWrapper>


  )
}

export default ProductCard