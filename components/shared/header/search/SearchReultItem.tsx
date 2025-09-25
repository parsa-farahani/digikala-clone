import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { GoArrowUpRight } from 'react-icons/go';


const SearchResultItem = (
   {
      name,
      category,
      inCategory,
   }: {
      name: string;
      category?: string;
      inCategory?: boolean;
   }
) => {
   
   return (
      <span className="flex items-start gap-4">
         <span className="inline-block flex-center text-text-3 text-2xl">
            <BiSearch />
         </span>
         <span className="inline-flex flex-col gap-2">
            <span className="text-base ">
               {
                  name
               }
            </span>
            {
               (inCategory)
               ? (
                  <span className="text-text-3 text-base">
                     در دسته 
                     {" "}
                     <span className="text-secondary-500">
                        {category ?? "متفرقه"}
                     </span>
                  </span>
               ) : (
                  null
               )
            }
         </span>
         {
            (!inCategory)
            ? (
               <span className="text-text-3 text-2xl mr-auto">
                  <GoArrowUpRight />
               </span>
            ): null
         }
      </span>
   );
};


export default SearchResultItem