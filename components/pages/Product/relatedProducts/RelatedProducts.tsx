'use client';

import Heading from '@/components/shared/Heading'
import ProductsCarousel from '@/components/shared/ProductsCarousel'
import React, { useEffect, useRef, useState } from 'react'
import { discountsGridProducts as relatedProducts } from '@/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel"
import ProductCard from '@/components/shared/ProductCard';

type ButtonEl = HTMLButtonElement | null;

const RelatedProducts = () => {

   const [activeNavlinkIdx, setActiveNavlinkIdx] = useState
   (0);
   const [api, setApi] = useState<CarouselApi | null>(null);

   const buttonsRef = useRef<ButtonEl[]>([]);

   const handleNavigation = (i: number) => {
      setActiveNavlinkIdx(i);
      if (api) {
         api.scrollTo(i)
      }
   }

   useEffect(() => {
      if (!api) return;
      const handleSelect = () => {
         setActiveNavlinkIdx(api.selectedScrollSnap());
         // buttonsRef.current[api.selectedScrollSnap()]?.scrollIntoView({
         //    behavior: 'smooth',
         //    inline: 'center',
         //    block: 'start',
         // })
      };
      api.on("select", handleSelect);
      return () => {
         api.off("select", handleSelect);
      };
   }, [api]);

  return (
    <div
      id="recommendation"
      className="relative z-3 bg-light-1"
    >

      <Heading
         element='h3'
         variant='h3'
         className='pt-3 mb-2 px-3 text-text-2 flex items-center gap-2 lg:hidden'
      >
         پیشنهاد ما
      </Heading>

      <div>
         {/* Desktop - only  */}
         <div className='hidden lg:block border border-b-4 rounded-xl pt-6 pb-4' >
            <Heading
               element='h3'
               variant='h3'
               className='mb-6 px-3 hidden lg:block'
               style='underline'
            >
               در کنارش خریداری شده
            </Heading>
            <ProductsCarousel products={relatedProducts} />
         </div>

         {/* Mobile - only */}
         <div className='lg:hidden' >
            {/* Navigation buttons  */}
            <div
               className='sticky z-[999] top-[100px] bg-light-1 py-4 '
            >
               <div className="w-full max-w-full overflow-x-auto hidden-scroll px-4" >
                  <div className='flex w-fit gap-2 items-center justify-start' >
                     <button
                        ref={(node) => {
                           buttonsRef.current.push(node)
                        }}
                        className={`py-1 px-2 rounded-full whitespace-nowrap text-sm ${activeNavlinkIdx === 0 ? 'bg-gray-700 text-light-2' : 'bg-neutral-100 text-text-2'}`}
                        onClick={() => handleNavigation(0)}
                     >
                        کالاهای مشابه
                     </button>
                  
                     <button
                        ref={(node) => {
                           buttonsRef.current.push(node)
                        }}
                        className={`py-1 px-2 rounded-full whitespace-nowrap text-sm ${activeNavlinkIdx === 1 ? 'bg-gray-700 text-light-2' : 'bg-neutral-100 text-text-2'}`}
                        onClick={() => handleNavigation(1)}
                     >
                        درکنارش خریداری شده
                     </button>
                  
                     <button
                        ref={(node) => {
                           buttonsRef.current.push(node)
                        }}
                        className={`py-1 px-2 rounded-full whitespace-nowrap text-sm ${activeNavlinkIdx === 2 ? 'bg-gray-700 text-light-2' : 'bg-neutral-100 text-text-2'}`}
                        onClick={() => handleNavigation(2)}
                     >
                        مشابه از لحاظ نام
                     </button>
                  
                     <button
                        ref={(node) => {
                           buttonsRef.current.push(node)
                        }}
                        className={`py-1 px-2 rounded-full whitespace-nowrap text-sm ${activeNavlinkIdx === 3 ? 'bg-gray-700 text-light-2' : 'bg-neutral-100 text-text-2'}`}
                        onClick={() => handleNavigation(3)}
                     >
                        مشابه از لحاظ قیمت
                     </button>
                  
                  </div>
               </div>
            </div>

            {/* Carousel of Related Products  */}
            <div className='' >
                  <Carousel className="w-full max-w-full"
                     setApi={setApi}
                  >
                     <CarouselContent
                        className='w-full'
                     >
                     {Array.from({ length: 4 }).map((_, index) => (
                        <CarouselItem key={index}
                           className='w-full !pl-0'
                        >
                           <div
                               className='w-full grid gap-2 p-2 grid-cols-2 justify-items-center items-center'
                           >

                              {
                                 relatedProducts.map((product, i) => (
                                    <div
                                       key={i}
                                       className='w-full aspect-[8/10] overflow-clip'
                                    >
                                    <ProductCard product={product} variant='carousel-grid' />
                                   </div>
                                 ))
                              }
                           </div>
                        </CarouselItem>
                     ))}
                     </CarouselContent>
                  </Carousel>
            </div>
         </div>
      </div>
    </div>
  )
}

export default RelatedProducts