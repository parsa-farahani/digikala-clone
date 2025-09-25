import React from "react";
import { FaCheck } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";

const FilterCategory = ({
   handleQueryChange,
   categories,
}: {
   handleQueryChange: (newQuey: Record<string, string | null>) => void;
   categories: CCategory[];
}) => {
   const handleQuery = (query?: string | null) => {
      console.log(query);
      handleQueryChange({ cat: query ?? null });
   };

   return (
      <div className="bg-light-1 max-h-full overflow-y-auto">
         <ul className="w-full text-sm text-text-2 px-4">
            <li>
               <button
                  className="w-full flex items-center justify-between border-b py-3"
                  onClick={() => {
                     handleQuery(null);
                  }}
               >
                  <span>همه کالاها</span>
                  <FaCheck className="text-xl text-sky-500" />
               </button>
            </li>
            {categories.map((cat, i) => (
               <li key={i} className="pr-4">
                  <button
                     className="w-full flex items-center justify-start gap-2 border-b py-3"
                     onClick={() => {
                        handleQuery(cat?.query);
                     }}
                  >
                     <span className="text-2xl">
                        <MdKeyboardArrowLeft />
                     </span>
                     <span>{cat.title}</span>
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default FilterCategory;
