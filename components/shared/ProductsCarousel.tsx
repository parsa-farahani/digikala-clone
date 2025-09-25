import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
// import Image from 'next/image';
import ProductCard from './ProductCard';


const ProductsCarousel = (
   {
      products
   }: {
      products: CProduct[];
      className?: string;
   }
) => {


  return (
    <div>
      <Carousel
         opts={{
            align: "start",
         }}
         className="w-full"
      >
         <CarouselContent
         >
            {
               products.map((product, i) => (
                  <CarouselItem key={i} className="basis-[160px] lg:basis-[200px] pl-2 border-l">
                     <ProductCard product={product} variant='carousel' />
                  </CarouselItem>
               ))
            }
         </CarouselContent>

         <CarouselPrevious className="hidden lg:flex size-10 cursor-pointer left-auto right-4 rotate-180 text-text-2 transition-opacity duration-200 disabled:opacity-0 disabled:pointer-events-none" />
         <CarouselNext className="hidden lg:flex size-10 cursor-pointer right-auto left-4 rotate-180 text-text-2 transition-opacity duration-200 disabled:opacity-0 disabled:pointer-events-none" />
      </Carousel>
    </div>
  )
}

export default ProductsCarousel