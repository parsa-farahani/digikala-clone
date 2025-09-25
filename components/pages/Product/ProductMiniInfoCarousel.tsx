"use client";
import {
   Carousel,
   CarouselApi,
   CarouselContent,
   CarouselItem,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";

const productMiniInfo = [
   {
      title: "+500 نفر به این کالا علاقه دارند",
      emoji: "❤️",
   },
   {
      title: "در سبد خرید +100 نفر",
      emoji: "🛒",
   },
   {
      title: "+100 بازدید در 24 ساعت اخیر",
      emoji: "👀",
   },
];

const AUTOPLAY_INTERVAL = 5000;

const ProductMiniInfoCarousel = ({
   data,
   className,
}: // isShowButtons,
{
   data?: ProductMiniInfo[];
   className?: string;
   // isShowButtons?: boolean;
}) => {
   data = data ?? productMiniInfo;

   const [api, setApi] = useState<CarouselApi | null>(null);

   useEffect(() => {
      if (!api) return;

      const autoplay = () => {
         if (api.canScrollNext()) {
            api.scrollNext();
         } else {
            api.scrollTo(0); // loop back to start
         }
      };

      const intervalId = setInterval(autoplay, AUTOPLAY_INTERVAL);

      return () => clearInterval(intervalId);
   }, [api]);

   return (
      <Carousel
         className="w-full !h-[30px]"
         setApi={setApi}
         // onMouseEnter={showButtons}
         // onMouseLeave={hideButtons}
         orientation="vertical"
         opts={{
            align: "center",
            loop: true,
         }}
      >
         <CarouselContent className="!h-full">
            {data.map(({ title, emoji }, i) => (
               <CarouselItem
                  key={i}
                  className="!h-full md:pl-0 basis-[85%] md:basis-full"
               >
                  <p
                     className={`flex gap-2 text-xs items-center bg-dark-2/50 backdrop-blur-md rounded-full p-0.5 max-lg:text-light-1 lg:font-bold ${
                        i === 0 ? "text-red-700" : "text-teal-800"
                     } ${className}`}
                  >
                     <span className="flex-center size-[22px] shrink-0 grow-0 bg-light-1 lg:bg-transparent rounded-full leading-[22px] font-geist">
                        {emoji}
                     </span>
                     <span>{title}</span>
                  </p>
               </CarouselItem>
            ))}
         </CarouselContent>
      </Carousel>
   );
};

export default ProductMiniInfoCarousel;
