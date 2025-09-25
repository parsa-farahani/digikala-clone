import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import Heading from "@/components/shared/Heading";
import Image from "next/image";


export default function StoryCarousel() {
   return (
      <>
         <Heading
            element="h2"
            hidden
         >
            استوری ها
         </Heading>
            <Carousel
            opts={{
               align: "start",
            }}
            className="w-full"
         >
            <CarouselContent>
               {Array.from({ length: 30 }).map((_, index) => (
                  <CarouselItem
                     key={index}
                     className="basis-[100px] lg:basis-[100px]"
                  >
                     <article className="p-1">
                        <Card className="py-0 border-0 shadow-none">
                           <CardContent className="flex flex-col aspect-square items-start justify-center h-[140px] gap-3 p-0 ">
                              <div className="aspect-square w-full shrink-0 grow-0 bg-gradient-to-br from-purple to-pink-500 rounded-full p-[2px]">
                                 <div className="size-full border-3 border-light-1 rounded-full overflow-clip">
                                    <Image
                                       src="https://placehold.co/600x400/png"
                                       width={100}
                                       height={100}
                                       alt="story"
                                       className="block size-full object-center object-cover"
                                       loading="lazy"
                                    />
                                 </div>
                              </div>
                              <p className="w-full line-clamp-2 text-xs leading-5">
                                 هدفون گیمینگ بیسیم عالی من شسی
                              </p>
                           </CardContent>
                        </Card>
                     </article>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious className="size-10 cursor-pointer left-auto right-4 rotate-180 text-text-2 transition-opacity duration-200 disabled:opacity-0 disabled:pointer-events-none hidden lg:flex" />
            <CarouselNext className="size-10 cursor-pointer right-auto left-4 rotate-180 text-text-2 transition-opacity duration-200 disabled:opacity-0 disabled:pointer-events-none hidden lg:flex" />
         </Carousel>
      </>
   );
}
