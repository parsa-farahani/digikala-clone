import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Image from 'next/image';

type CProduct = {
   image?: string;
   title?: string;
   price?: number;
   discountPerc?: number;
}

type CProductChunk = {
   products: [
      CProduct,
      CProduct,
      CProduct,
   ];
   startIndex: number;
}

type TripleProductsCarouselProps = {
   products: CProduct[];
}


const ProductsChunk = (
   {
      chunk,
   }: {
      chunk: CProductChunk;
   }
) => {

   return (
      <div
         className='w-full flex flex-col gap-2 lg:gap-0'
      >
         {
            chunk?.products.map(({ image, title }, i) => (
               <article
                  key={i}
                  className='relative w-full shrink-0 grow-0 flex gap-4 items-center lg:py-4 border rounded-lg lg:border-0 lg:rounded-none'
               >
                  <div
                     className='shrink-0 grow-0 h-full aspect-square bg-neutral-100 rounded-lg'
                  >
                     <Image
                        src={image ?? ''}
                        width={80}
                        height={80}
                        alt={title ?? ''}
                        className='block mix-blend-multiply'
                     />
                  </div>
                  
                  <span
                     className='block text-base lg:text-3xl shrink-0 grow-0 !size-[1.5rem] bg-primary-600 text-light-1 rounded-full lg:bg-transparent lg:text-secondary-500 font-bold flex-center'
                  >
                     {
                        chunk.startIndex + i
                     }
                  </span>

                  <p className='text-text-2 text-sm leading-8 line-clamp-2' >
                     {
                        title
                     }
                  </p>

                  <div className='absolute top-full left-0 w-[50%] h-px lg:bg-border-1/50' />
               </article>
            ))
         }
      </div>
   )
}


const TripleProductsCarousel = (
   {
      products
   }: TripleProductsCarouselProps
) => {


   const chunks: CProductChunk[] = [];

   for(let i = 0; i < products.length; i+=3) {
      chunks.push(
         {
            products: [
               products[i],
               products[i + 1],
               products[i + 2],
            ],
            startIndex: i + 1,
         }
      )
   }


  return (
   <>
      <div
         className='max-w-full overflow-x-auto hidden-scroll scroll-snap-x px-2 ml-2'
      >
         <div
            className='lg:hidden flex gap-2'
         >
            {
               chunks.map((chunk, i) => (
                  <div
                     key={i}
                     className='basis-[300px] grow-0 shrink-0 snap-start'
                  >
                     <ProductsChunk chunk={chunk} />
                  </div>
               ))
            }
         </div>
      </div>

      <div
         className='hidden lg:block'
      >
         <Carousel
            opts={{
               align: "start",
            }}
            className="w-full"
         >
            <CarouselContent>
               {
                  chunks.map((chunk, i) => (
                     <CarouselItem key={i} className="basis-[300px] pl-2">
                        <ProductsChunk chunk={chunk} />
                     </CarouselItem>
                  ))
               }
            </CarouselContent>

            <CarouselPrevious className="size-10 cursor-pointer left-auto right-4 rotate-180 text-text-2 transition-opacity duration-200 disabled:opacity-0 disabled:pointer-events-none" />
            <CarouselNext className="size-10 cursor-pointer right-auto left-4 rotate-180 text-text-2 transition-opacity duration-200 disabled:opacity-0 disabled:pointer-events-none" />
         </Carousel>
      </div>
   </>
  )
}

export default TripleProductsCarousel