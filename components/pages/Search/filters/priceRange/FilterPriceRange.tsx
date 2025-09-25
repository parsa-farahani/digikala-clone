"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { useSearchParams } from "next/navigation";

const MIN_PRICE = 0;
const MAX_PRICE = 283_080_000_000;

const FilterPriceRange = ({
   handleQueryChange,
}: {
   handleQueryChange: (newQuey: Record<string, string | null>) => void;
}) => {
   const searchParams = useSearchParams();
   const priceMinQ = Number(searchParams.get("price_min") ?? MIN_PRICE);
   const priceMaxQ = Number(searchParams.get("price_max") ?? MAX_PRICE);

   // Initial prices range [min, max] (Rials)
   const [range, setRange] = React.useState<number[]>([priceMinQ, priceMaxQ]);

   const minPriceToman = Math.floor(range[0] / 10);
   const maxPriceToman = Math.floor(range[1] / 10);

   const formattedMinPriceToman = minPriceToman.toLocaleString("US");
   const formattedMaxPriceToman = maxPriceToman.toLocaleString("US");

   const parsePrice = (price: string) => {
      // converts: '1,000' -> 1000

      return parseInt(price.replace(/,/g, ""), 10) || 0;
   };

   const handlePriceMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parsePrice(e.target.value);

      let minPrice = Math.min(value * 10, range[1]);

      minPrice = minPrice <= MIN_PRICE ? MIN_PRICE : minPrice;

      handleQueryChange({
         price_min: String(minPrice),
      });

      setRange((pr) => {
         return [minPrice, pr[1]];
      });
   };

   const handlePriceMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parsePrice(e.target.value);

      let maxPrice = Math.max(value * 10, range[0]);

      maxPrice = maxPrice >= MAX_PRICE ? MAX_PRICE : maxPrice;

      handleQueryChange({
         price_max: String(maxPrice),
      });

      setRange((pr) => {
         return [pr[0], maxPrice];
      });
   };

   const handlePriceSliderChange = ([min, max]: [number, number]) => {
      setRange([min, max]);

      handleQueryChange({
         price_min: String(min),
         price_max: String(max),
      });
   };

   return (
      <div className="w-full bg-light-1 py-4 px-8 lg:px-0">
         <div className="mb-10">
            <div className="w-full flex items-center gap-2 justify-between mb-4">
               <span className="block text-text-3 text-sm">از</span>
               <input
                  value={formattedMinPriceToman}
                  onChange={handlePriceMinChange}
                  dir="ltr"
                  className="block w-full grow-1 border-b text-2xl font-bold text-text-2 outline-0 py-2"
               />
               <span className="block toman">تومان</span>
            </div>
            <div className="w-full flex items-center gap-2 justify-between">
               <span className="block text-text-3 text-sm">تا</span>
               <input
                  value={formattedMaxPriceToman}
                  onChange={handlePriceMaxChange}
                  dir="ltr"
                  className="block w-full grow-1 border-b text-2xl font-bold text-text-2 outline-0 py-2"
               />
               <span className="block toman">تومان</span>
            </div>
         </div>

         <div>
            <Slider
               dir="rtl"
               defaultValue={range}
               value={range}
               onValueChange={handlePriceSliderChange}
               min={0}
               max={283_080_000_000}
               step={100_000} // step: 100,000 Rials === 10,000 Toman
               className="w-full"
            />

            <p className="relative h-[40px] flex justify-between text-xs text-text-3 mx-2">
               <span className="relative top-[15px] right-[-5px]">
                  ارزانترین
               </span>
               <span className="relative top-[15px] left-[-5px]">گرانترین</span>

               <span className="inline-block pipe absolute top-0 h-[5px] w-[2px] left-[0%]" />
               <span className="inline-block pipe absolute top-0 h-[5px] w-[2px] left-[20%]" />
               <span className="inline-block pipe absolute top-0 h-[5px] w-[2px] left-[40%]" />
               <span className="inline-block pipe absolute top-0 h-[5px] w-[2px] left-[60%]" />
               <span className="inline-block pipe absolute top-0 h-[5px] w-[2px] left-[80%]" />
               <span className="inline-block pipe absolute top-0 h-[5px] w-[2px] left-[100%]" />
            </p>
         </div>
      </div>
   );
};

export default FilterPriceRange;
