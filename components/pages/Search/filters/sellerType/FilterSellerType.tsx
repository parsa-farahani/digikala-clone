"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const FilterSellerType = ({ sellerTypes }: { sellerTypes: CSellerType[] }) => {
   const router = useRouter();

   const searchParams = useSearchParams();

   const [curntSellerTypes, setCurntSellerTypes] = useState<string[]>(
      searchParams.getAll("seller_type") ?? []
   );

   const addSellerType = (newQuery: string) => {
      const sParams = new URLSearchParams(searchParams.toString());

      sParams.append("seller_type", newQuery);

      router.push(`/search?${sParams.toString()}`, { scroll: false });

      setCurntSellerTypes((cq) => [...cq, newQuery]);
   };

   const removeSellerType = (query: string) => {
      const sParams = new URLSearchParams(searchParams.toString());

      const sellerTypesQ = sParams.getAll("seller_type");

      sParams.delete("seller_type");

      sellerTypesQ
         .filter((sellerType) => sellerType !== query)
         .forEach((sellerType) => {
            sParams.append("seller_type", sellerType);
         });

      router.push(`/search?${sParams.toString()}`, { scroll: false });

      setCurntSellerTypes((cq) => cq.filter((b) => b !== query));
   };

   return (
      <div className="bg-light-1 max-h-full overflow-y-auto flex flex-col">
         <ul className="grow-1 w-full text-base text-text-2 px-6">
            {sellerTypes.map((sellerType, i) => (
               <li key={i} className="">
                  <Label
                     className={`w-full flex items-center justify-between gap-2 py-3 ${
                        i === sellerTypes.length - 1 ? "border-b-0" : "border-b"
                     }`}
                  >
                     <span className="flex items-center gap-4">
                        <Checkbox
                           checked={curntSellerTypes.includes(sellerType.query)}
                           onCheckedChange={(checked) => {
                              if (checked) {
                                 addSellerType(sellerType.query);
                              } else {
                                 removeSellerType(sellerType.query);
                              }
                           }}
                        />
                        <span>{sellerType.title}</span>
                     </span>
                  </Label>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default FilterSellerType;
