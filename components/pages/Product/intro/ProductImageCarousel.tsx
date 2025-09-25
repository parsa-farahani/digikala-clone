import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";
import { useEffect, useState } from "react";



const ProductImageCarousel = (
  {
    images,
    showButtons,
    showDots,
    variant,
    onSlideChange,
    activeIndex,
  }: {
    images: string[];
    showButtons?: boolean;
    showDots?: boolean;
    variant?: 'modal';
    onSlideChange?: (index: number) => void;
    activeIndex?: number;
  }
) => {

  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined);

  useEffect(() => {
    if (!api) return;

    onSlideChange?.(api.selectedScrollSnap());

    api.on("select", () => {
      onSlideChange?.(api.selectedScrollSnap());
    });
  }, [api, onSlideChange]);

  useEffect(() => {
    if (api && typeof activeIndex === 'number') {
      api.scrollTo(activeIndex);
    }
  }, [activeIndex, api])

  return (
    <Carousel className="size-full"
      opts={{
        align: 'start',
      }}
      setApi={setApi}
    >
      <CarouselContent
         className={`size-full ${variant === 'modal' ? '' : ''}`}
      >
        {images.map((image, index) => (
          <CarouselItem
            className="size-full !pl-0"
            key={index}
          >
            <div
               className={`w-full h-full  ${variant === 'modal' ? 'bg-transparent' : 'bg-neutral-100 lg:bg-light-1'}`}
            >
               <Image
                src={image}
                width={400}
                height={400}
                alt=""
                className={`block h-full object-cover mx-auto mix-blend-multiply ${variant === 'modal' ? 'w-full h-auto' : ''}`}
                priority={index === 0}
               />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

       <CarouselPrevious className={`size-10 cursor-pointer left-auto right-4 rotate-180 text-text-2 transition-opacity duration-200 disabled:opacity-0 disabled:pointer-events-none ${showButtons ? 'hidden lg:flex' : '!hidden'}`} />
      <CarouselNext className={`size-10 cursor-pointer right-auto left-4 rotate-180 text-text-2 transition-opacity duration-200 disabled:opacity-0 disabled:pointer-events-none ${showButtons ? 'hidden lg:flex' : '!hidden'}`} />

      {
        (showDots)
        ? (
          <div
            className="absolute bottom-2 left-2 w-[60px] bg-dark-2/50 py-2 px-2 rounded-full"
          >
            <CarouselDots />
          </div>
        ): null
      }
    </Carousel>
  )
}

export default ProductImageCarousel