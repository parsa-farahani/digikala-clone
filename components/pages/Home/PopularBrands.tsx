import React from "react";
import { popularBrands } from "@/data";
import Link from "next/link";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import Heading from "@/components/shared/Heading";
import { LuStar } from "react-icons/lu";
import Image from "next/image";

const PopularBrands = () => {
   return (
      <div className="lg:p-4 rounded-xl lg:border border-border-1 space-y-6">
         <Heading
            element="h2"
            variant="h2"
            className="w-full flex items-center gap-2 lg:justify-center px-2"
         >
            <span className="">
               <LuStar className="lg:text-yellow-500" />
            </span>
            <span>محبوب‌ترین برند‌ها</span>
         </Heading>

         <div>
            {/* Mobile  */}
            <div className="flex lg:hidden gap-2  max-w-full overflow-x-auto hidden-scroll px-2">
               {popularBrands.map((brand, i) => (
                  <Link
                     key={i}
                     href={brand.href ?? "#"}
                     className="h-[140px] w-[100px] shrink-0 grow-0 flex flex-col items-center border border-border-1 rounded-lg"
                  >
                     <div className="w-full grow-1 bg-neutral-100 flex-center rounded-t-[inherit]">
                        <Image
                           src={brand.image}
                           width={80}
                           height={80}
                           alt={brand.title}
                           className="mix-blend-multiply"
                        />
                     </div>

                     <p className="h-[2rem] flex items-center text-sm text-text-2">
                        {brand.title}
                     </p>
                  </Link>
               ))}
            </div>

            {/* Desktop  */}
            <div className="hidden lg:block">
               <Carousel
                  opts={{
                     align: "start",
                  }}
                  className="w-full"
               >
                  <CarouselContent>
                     {popularBrands.map((brand, i) => (
                        <CarouselItem key={i} className="basis-[140px] !pl-0">
                           <Link
                              href={brand.href ?? "#"}
                              className="w-full aspect-square shrink-0 grow-0 flex flex-col items-center border-l border-border-1"
                           >
                              <div className="w-full grow-1 flex-center">
                                 <Image
                                    src={brand.image}
                                    width={80}
                                    height={80}
                                    alt={brand.title}
                                    className="block w-[100px] mix-blend-multiply"
                                 />
                              </div>
                           </Link>
                        </CarouselItem>
                     ))}
                  </CarouselContent>
                  <CarouselPrevious className="size-10 cursor-pointer left-auto right-4 rotate-180 text-text-2 transition-opacity duration-200 disabled:opacity-0 disabled:pointer-events-none" />
                  <CarouselNext className="size-10 cursor-pointer right-auto left-4 rotate-180 text-text-2 transition-opacity duration-200 disabled:opacity-0 disabled:pointer-events-none" />
               </Carousel>
            </div>
         </div>
      </div>
   );
};

export default PopularBrands;
