'use client';

import React from "react";
import { BiSearch } from "react-icons/bi";
import { TbCameraSearch } from "react-icons/tb";
import SearchPanel from "./SearchPanel";
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


type SearchProps = {
   isOpen: boolean;
   toggleSearch: (state?: boolean) => void;
   searchQuery?: string;
}

const Search = (
   {
      isOpen,
      toggleSearch,
      searchQuery,
   }: SearchProps
) => {


   const handleOpenSearchModal = () => {
      toggleSearch(true);
   }
 

   // const handleCloseSearchModal = () => {
   //    toggleSearch(false);
   // }
 
   return (
      <div className="relative z-[999999] grow-1 flex items-center justify-between lg:max-w-[600px] bg-light-2 rounded-sm">
         <button className="h-full grow-1 rounded-[inherit] px-4 text-light-3 text-xs md:text-base whitespace-nowrap"
            onClick={handleOpenSearchModal}
         >
            <span className="h-full flex items-center gap-4">
               <span className="inline-block text-2xl flex-center">
                  <BiSearch />
               </span>
               <span className="leading-10">
                  {
                     (searchQuery)
                     ? (
                        <span className="text-text-1" >
                           {
                              searchQuery
                           }
                        </span>
                     ): (
                        <span>جستجو</span>
                     )
                  }
                  <span className="lg:hidden">در</span>
                  &nbsp;
                  <span className="lg:hidden text-xs md:text-xl text-primary-600 font-bold font-heydari">
                     دیجی‌کالا
                  </span>
               </span>
            </span>
         </button>
         <button className="bg-neutral-500 lg:hidden absolute z-2 left-1 top-1/2 p-2  -translate-y-1/2 cursor-pointer">
            <TbCameraSearch className="text-purple text-2xl" />
         </button>

         <SearchPanel
            searchQuery={searchQuery}
            isOpen={isOpen}
            toggleSearch={toggleSearch}
         />
      </div>
   );
};

export default Search;
