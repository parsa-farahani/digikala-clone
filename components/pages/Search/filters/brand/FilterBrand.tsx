"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const FilterBrand = ({
   brands,
}: // handleQueryChange,
{
   // handleQueryChange: (newQuey: Record<string, string | null>) => void;
   brands: CBrand[];
}) => {
   const router = useRouter();

   const searchParams = useSearchParams();

   const [curntBrandsQueries, setCurntBrandsQueries] = useState<string[]>(
      searchParams.getAll("brand") ?? []
   );

   const [searchTerm, setSearchTerm] = useState("");

   const curntBrandsToShow = brands.filter(
      (b) => b.title.fa.includes(searchTerm) || b.title.en.includes(searchTerm)
   );

   const addBrandQuery = (newQuery: string) => {
      const sParams = new URLSearchParams(searchParams.toString());

      sParams.append("brand", newQuery);

      router.push(`/search?${sParams.toString()}`, { scroll: false });
      setCurntBrandsQueries((cq) => [...cq, newQuery]);
   };

   const removeBrandQuery = (query: string) => {
      const sParams = new URLSearchParams(searchParams.toString());

      const brandsQ = sParams.getAll("brand");

      sParams.delete("brand");

      brandsQ
         .filter((b) => b !== query)
         .forEach((b) => sParams.append("brand", b));

      router.push(`/search?${sParams.toString()}`, { scroll: false });

      setCurntBrandsQueries((cq) => cq.filter((b) => b !== query));
   };

   return (
      <div className="bg-light-1 max-h-full overflow-y-auto flex flex-col lg:p-2">
         <div className="px-4 mb-4 lg:px-0">
            <div className="h-[50px] border rounded-md flex items-center">
               <div className="inline-block h-full flex-center px-4 lg:px-2 text-2xl">
                  <BiSearch />
               </div>
               <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.currentTarget.value)}
                  placeholder="جستجو برند..."
                  className="h-full lg:w-full lg:max-w-full grow-1 text-sm outline-0"
               />
            </div>
         </div>

         <ul className="grow-1 w-full text-sm text-text-2 px-4 lg:px-0">
            {curntBrandsToShow.map((brand, i) => (
               <li key={i} className="pr-4 lg:pr-0">
                  <Label className="w-full flex items-center justify-between gap-2 border-b py-3">
                     <span className="flex items-center gap-4">
                        <Checkbox
                           checked={curntBrandsQueries.includes(brand.query!)}
                           onCheckedChange={(checked) => {
                              if (checked) {
                                 addBrandQuery(brand.query!);
                              } else {
                                 removeBrandQuery(brand.query!);
                              }
                           }}
                        />
                        <span>{brand.title.fa}</span>
                     </span>
                     <span className="text-xs text-text-3">
                        {brand.title.en}
                     </span>
                  </Label>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default FilterBrand;
