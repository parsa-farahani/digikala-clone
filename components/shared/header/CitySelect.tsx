import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Divider from "../Divider";
import { BiSearch } from "react-icons/bi";
import Chip from "../Chip";
import Link from 'next/link';

import { MdKeyboardArrowLeft } from "react-icons/md";
import { debounce } from "lodash-es";
import LoaderDot from "../LoaderDot";

const hotCities = ["تهران", "شیراز", "رشت", "مشهد"];

const cities = [
   {
      city: "تهران",
      province: "تهران",
   },
   {
      city: "شیراز",
      province: "فارس",
   },
   {
      city: "ذشت",
      province: "گیلان",
   },
   {
      city: "مشهد",
      province: "خراسان رضوی",
   },
];


type CitySelectProps = {
   isOpen: boolean;
   toggleCitySelect: (state?: boolean) => void;
}

const CitySelect = ({ isOpen, toggleCitySelect }: CitySelectProps) => {
   const [isLoading, setIsLoading] = useState(false);
   const [searchTerm, setSearchTerm] = useState("");

   const handleSearch = async () => {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 500));

      setIsLoading(false);
   };

   const debouncedHandleSearch = debounce(handleSearch, 300);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.currentTarget.value);

      debouncedHandleSearch();
   };

   const clearSearch = () => {
      setSearchTerm("");
   };

   const closeCitySelect = () => {
      toggleCitySelect(false);
   }


   const searchResult = cities.filter((area) => {
      const { city, province } = area;
      if (city.includes(searchTerm) || province.includes(searchTerm)) {
         return area;
      }
   })

   return (
      <div
         className={`fixed z-999 left-0 right-0 w-full bottom-0 lg:right-auto lg:bottom-auto lg:left-1/2 lg:top-1/2 lg:-translate-1/2 bg-light-1 lg:w-[360px] min-h-[400px] h-auto max-h-[60vh] rounded-lg transition-transform duration-500 ${
            isOpen ? "translate-y-0" : "translate-y-full lg:hidden"
         } flex flex-col overflow-y-auto`}
      >
         <div className="sticky top-0 bg-light-1 flex flex-col pb-2  px-3 border-b border-gray-100">
            <div className="flex justify-between items-center py-2 text-sm">
               <h4>انتخاب شهر</h4>
               <button
                  type="button"
                  className={`size-6 cursor-pointer`}
                  onClick={closeCitySelect}
               >
                  <IoCloseOutline className="text-text-3 text-2xl" />
               </button>
            </div>
            <Divider className="!w-[95%] mx-auto mb-3" />
            <div className="relative w-full h-10 bg-neutral-100 rounded-lg flex">
               <span className="inline-flex items-center justify-center h-full aspect-square px-2 text-text-3 !text-lg">
                  <BiSearch className="" />
               </span>

               <input
                  // ref={searchInpRef}
                  value={searchTerm}
                  onChange={handleChange}
                  className="outline-none focus:outline-none grow-1 px-4 pr-0 text-xs text-text-3"
                  autoFocus
                  placeholder="جستجو در استاد ها و شهرهای ایران"
               />

               <button
                  type="button"
                  className={`lg:absolute lg:left-2 lg:top-1/2 lg:-translate-y-1/2 grow-0 shrink-0 lg:size-2 height-full aspect-square flex-center cursor-pointer ${
                     searchTerm ? "" : "opacity-0 pointer-events-none"
                  }`}
                  onClick={clearSearch}
               >
                  <IoCloseOutline className="lg:bg-dark-4 text-text-3 text-2xl lg:text-base lg:text-light-1 lg:rounded-full" />
               </button>
            </div>
         </div>
         <div className="grow-1 p-2 space-y-4">
            <div className="space-y-4 overflow-y-auto">
               <p className="text-text-2 text-xs">
                  برای مشاهده تخفیف‌ها و کالا‌های قابل ارسال به شهرتان، آن را
                  انتخاب کنید.
               </p>
               {isLoading ? (
                  <LoaderDot small />
               ) : (
                  (searchResult && searchResult?.length > 0)
                  ? (

                     <div className="space-y-3">
                        <h5 className="text-text-2 text-sm">شهرهای پرتکرار</h5>
                        <div className="flex gap-2">
                           {hotCities?.map((city) => (
                              <Link
                                 key={city}
                                 href={`#${city ?? ''}`}
                              >
                                 <Chip title={city} small />
                              </Link>
                           ))}
                        </div>
                        <ul>
                           {searchResult?.map(({ city, province }, i) => (
                              <li key={i}>
                                 <Link
                                    href="#"
                                    className="flex justify-between items-center border-b border-gray-300/50 py-2"
                                 >
                                    <span className="space-x-2">
                                       <span className="text-sm text-text-1">
                                          {city}
                                       </span>
                                       &nbsp;
                                       <span className="text-text-3 text-xs">
                                          {province}
                                       </span>
                                    </span>

                                    <MdKeyboardArrowLeft className={"text-base"} />
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ): (
                     <p className="text-center text-xs text-text-2">
                        شهری به نام
                        {" "}
                        «{searchTerm}»
                        {" "}
                        پیدا نکردیم
                     </p>
                  )
               )}
            </div>
         </div>
      </div>
   );
};

export default CitySelect;
