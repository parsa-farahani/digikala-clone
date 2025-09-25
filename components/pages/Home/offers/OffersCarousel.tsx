import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from '@/components/shared/ProductCard';
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from 'next/link';

import { ArrowLeft } from "lucide-react";
import Timer from "@/components/shared/Timer";
import Image from "next/image";



const OffersTitle = (
   {
      timerDate
   }: {
      timerDate: string;
   }
) => {

   return (
      <div
         className='w-full lg:h-full grow-0 shrink-0 flex lg:flex-col justify-between lg:items-center gap-2 pr-2 pl-4 lg:px-0'
      >
         <div
            className='w-[30px] lg:hidden flex flex-col justify-evenly items-center gap-2'
         >
            <Image
               src="/images/home/offers/percent-lg.svg"
               width={200}
               height={100}
               alt=''
               className='block h-full object-scale-down object-center'
            />
         </div>

         <div
            className='w-[100px] flex flex-col justify-evenly items-center gap-2 lg:hidden'
         >
            <Image
               src="/images/home/offers/title.svg"
               width={200}
               height={100}
               alt=''
               className='block h-full object-scale-down object-center'
            />
         </div>

         <div
            className='hidden w-[80px] lg:flex flex-col justify-evenly items-center gap-2'
         >
            <Image
               src="/images/home/offers/title-lg.svg"
               width={200}
               height={100}
               alt=''
               className='block h-full object-scale-down object-center'
            />
         </div>
         
         <div
         className="mr-3 lg:mr-0 lg:mb-auto"
         >
         <Timer dateISO={timerDate} />
         </div>

         <div
             className='grow-1 w-[60px] hidden lg:flex flex-col justify-evenly items-center gap-2'
         >
             <Image
                src="/images/home/offers/percent-lg.svg"
                width={200}
                height={100}
                alt=''
                className='block h-full object-scale-down object-center '
             />
          </div>

         <Link
            href="#"
            className='lg:h-auto text-sm flex gap-2 items-center mr-auto lg:mr-0 lg:mt-auto'
         >
            <span className='lg:hidden' >
               همه   
            </span>
            <span className='hidden lg:block' >
               مشاهده همه
            </span>
            <MdKeyboardArrowLeft />
         </Link>
      </div>
   )
}


const OffersCarousel = (
   {
      products,
      timerDate,
      className,
   }: {
      products: {
         id: string;
         title: string;
         image: string;
         price: number;
         discountPerc: number;
      }[];
      timerDate: string;
      className?: string;
   }
) => {


   return (
      <div className={`w-full h-[300px] py-4 lg:rounded-xl bg-gradient-to-tr from-[#EF5561] to-[#D32C4E] text-light-1 flex gap-4 max-w-full ${className ?? ''}`}>
         {/* Desktop Scroller  */}
         <div className="hidden lg:block w-full h-full">
            <Carousel
               opts={{
                  align: "start",
               }}
               className="h-full w-full pr-4"
            >
               <CarouselContent className="h-full ml-4">
                  <CarouselItem key={0} className="basis-[150px]">
                     <OffersTitle timerDate={timerDate} />
                  </CarouselItem>
                  {products.map((product, index) => (
                     <CarouselItem
                        key={index + 1}
                        className="basis-[180px] pl-1"
                     >
                        <div
                           className={`bg-light-1 h-full w-full grow-0 shrink-0 ${
                              index === 0 ? "rounded-r-md" : ""
                           }`}
                        >
                           <ProductCard product={product} variant="offers" />
                        </div>
                     </CarouselItem>
                  ))}
                  <CarouselItem
                     key={products.length + 1}
                     className="basis-[180px] pl-1"
                  >
                     <div
                        className={`h-full bg-light-1 w-full grow-0 shrink-0 rounded-l-md flex-center`}
                     >
                        <Link
                           href="#"
                           className="text-lg flex flex-col justify-center items-center gap-4"
                        >
                           <span className="size-15 rounded-full border border-secondary-500 flex-center">
                              <ArrowLeft className="text-secondary-500 size-[30px]" />
                           </span>
                           <span className="text-text-2">مشاهده همه</span>
                        </Link>
                     </div>
                  </CarouselItem>
               </CarouselContent>
               <CarouselPrevious className="size-10 cursor-pointer left-auto right-4 rotate-180 text-text-2 transition-opacity duration-200 disabled:opacity-0 disabled:pointer-events-none" />
               <CarouselNext className="size-10 cursor-pointer right-auto left-4 rotate-180 text-text-2 transition-opacity duration-200 disabled:opacity-0 disabled:pointer-events-none" />
            </Carousel>
         </div>

         {/* Mobile Scroller  */}
         <div className="w-full flex flex-col h-full max-w-full gap-4 lg:hidden">
            <OffersTitle timerDate={timerDate} />

            <div className="grow-1 flex text-text-1 gap-0.5 overflow-auto hidden-scroll px-2">
               {products.map((product, index) => (
                  <div key={index} className="bg-light-1 w-[120px] grow-0 shrink-0 first:rounded-r-xl last:rounded-l-md">
                     <ProductCard product={product} variant="offers" />
                  </div>
               ))}
               <div className="h-full bg-light-1 w-[120px] grow-0 shrink-0 first:rounded-r-xl last:rounded-l-md">
                  <Link
                     href="#"
                     className="h-full text-lg flex flex-col justify-center items-center gap-4"
                  >
                     <span className="size-12 rounded-full border-2 border-text-2 flex-center">
                        <ArrowLeft className="text-text-2 size-[30px]" />
                     </span>
                     <span className="text-text-2 text-sm">مشاهده همه</span>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OffersCarousel;
