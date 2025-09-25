'use client';

import { useEffect, useState } from "react";

import {
   Carousel,
   CarouselContent,
   CarouselDots,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
   type CarouselApi,
} from "@/components/ui/carousel";
import Link from "next/link";

import { eventsCarouselSlides } from "@/data";
import Heading from "@/components/shared/Heading";
import Image from "next/image";

const AUTOPLAY_INTERVAL = 5000;

const EventsCarousel = () => {
   const [isShowButtons, setisShowButtons] = useState(false);

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

   const showButtons = () => {
      setisShowButtons(true);
   };

   const hideButtons = () => {
      setisShowButtons(false);
   };

   return (
      <>
         <Heading element="h2" hidden>
            آخرین رویدادها
         </Heading>
         <Carousel
            className="w-full !h-full"
            setApi={setApi}
            onMouseEnter={showButtons}
            onMouseLeave={hideButtons}
            opts={{
               align: "center",
               containScroll: "trimSnaps",
            }}
         >
            <CarouselContent className="!h-full">
               {eventsCarouselSlides.map(({ href, image }, i) => (
                  <CarouselItem
                     key={i}
                     className="!h-full md:pl-0 basis-[85%] md:basis-full"
                  >
                     <Link
                        href={href ?? "#"}
                        className="w-full !h-full bg-light-1 flex-center p-0 m-0 rounded-xl md:rounded-none overflow-clip"
                     >
                        <Image
                           src={image}
                           width={900}
                           height={200}
                           alt="slide image"
                           className="w-full h-full object-cover object-center"
                           unoptimized
                           loading="lazy"
                        />
                     </Link>
                  </CarouselItem>
               ))}
            </CarouselContent>

            <div
               className={`w-fit absolute right-[40px] bottom-[20px] gap-[10px] transition-opacity duration-400 hidden md:flex ${
                  isShowButtons
                     ? "opacity-100"
                     : "opacity-0 pointer-events-none"
               }`}
            >
               <CarouselPrevious className="relative size-10" />
               <CarouselNext className="relative size-10" />
            </div>

            <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 p-1 px-2 rounded-full bg-dark-3/50 md:bg-transparent flex items-center">
               <CarouselDots />
            </div>
         </Carousel>
      </>
   );
};

export default EventsCarousel;
