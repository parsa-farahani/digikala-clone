'use client';

import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import HotSearches from "./HotSearches";
import { debounce } from "lodash-es";
import { BiCategory, BiSearch } from "react-icons/bi";
import SearchItemSkeleton from "./SearchItemSkeleton";
import { GoArrowUpRight } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

type SearchPanelProps = {
   isOpen: boolean;
   toggleSearch: (state?: boolean) => void;
   onClearCallback?: () => void;
   onSubmitCallback?: () => void;
   variant?: 'product-mobile';
   searchQuery?: string;
};

const Divider = () => {

   return (
      <div
         className="border-0 h-px w-full bg-gray-500/30"
      />
   )
}

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

const SearchPanel = (
   {
      isOpen,
      toggleSearch,
      onClearCallback,
      onSubmitCallback,
      variant,
      searchQuery,
   }: SearchPanelProps
) => {

   const router = useRouter();
   const pathname = usePathname();


   const [searchTerm, setSearchTerm] = useState(searchQuery ?? "");

   const [isSearching, setIsSearching] = useState(false);

   const searchInpRef = useRef<HTMLInputElement>(null);

   const clearSearch = () => {
      setSearchTerm("");
      router.replace(pathname);
      toggleSearch(false);


      if (onClearCallback) {
         onClearCallback()
      }
   }


   const handleSearch = async () => {
      setIsSearching(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSearching(false);
   };

   const debouncedHandleSearch = debounce(handleSearch, 500);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;

      setSearchTerm(value);

      debouncedHandleSearch();
   };


   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push(`/search?q=${searchTerm}`);
      toggleSearch(false);

      if (onSubmitCallback) {
         onSubmitCallback();
      }
   }


   const handleClose = () => {
      toggleSearch(false);
   };

   useEffect(() => {
      const searchInp = searchInpRef.current;
      if (!searchInp) return;

      if (isOpen) {
         searchInp.focus();
      } else {
         searchInp.blur();
      }
   }, [isOpen])

   return (
      <div
         className={`fixed z-[99999] top-0 left-0 right-0 w-full  bg-light-1 space-y-10 lg:space-y-4 duration-500 lg:absolute lg:left-0 lg:top-0 lg:w-full lg:rounded-md lg:shadow-sm transition-all ${isOpen ? 'lg:opacity-100' : 'opacity-0 pointer-events-none'} ${
            isOpen ? "translate-y-0" : `${variant === 'product-mobile' ? 'max-lg:-translate-y-[80px]' : 'max-lg:translate-y-[100svh]'}`
         } ${variant === 'product-mobile' ? `${(searchTerm) ? 'h-screen' : 'h-[80px]'} flex flex-col items-center p-4` : 'h-svh lg:h-fit p-5 lg:pt-1 '}`}

         style={{
            zIndex: '999999',
            // transition: 'height 0s, opacity 500ms, transform 500ms'
         }}
      >
         <form
            onSubmit={handleSubmit}
         className={`relative w-full h-12 lg:h-10 bg-neutral-100 lg:bg-light-1 flex ${variant === 'product-mobile' ? 'rounded-full' : 'rounded-lg lg:rounded-sm'}`}
         >
            <button
               type="button"
               className="lg:!hidden grow-0 shrink-0 height-full aspect-square flex-center cursor-pointer px-4"
               onClick={handleClose}
            >
               <FaArrowRight className="text-text-3 text-xl" />
            </button>

            <input
               ref={searchInpRef}
               value={searchTerm}
               onChange={handleChange}
               className={`block w-auto min-w-none outline-none focus:outline-none grow-1 px-4 lg:border-b lg:border-border-1 lg:border-b-secondary-500 lg:rounded-[inherit] lg:caret-secondary-500 lg:text-sm lg:text-text-3 lg:pt-2 ${variant === 'product-mobile' ? 'h-[50px]' : ''}`}
               autoFocus
               placeholder={variant === 'product-mobile' ? 'جستجو در کالاهای دیجی‌کالا' : ''}
            />

            <button
               type="button"
               className={`absolute left-0 top-1/2 -translate-y-1/2 grow-0 shrink-0 height-full aspect-square flex-center cursor-pointer px-4 ${(searchTerm ? '' : 'opacity-0 pointer-events-none')}`}
               onClick={clearSearch}
            >
               <IoCloseOutline className="lg:bg-dark-4 text-text-3 text-2xl lg:text-base lg:text-light-1 lg:rounded-full" />
            </button>
         </form>

         <div
            className={`w-full text-text-2 transition-opacity duration-200 delay-400 overflow-clip ${variant === 'product-mobile' ? `${searchTerm ? 'opacity-100' : 'opacity-0 pointer-events-none'}` : ``}`}
         >
            {!searchTerm ? (
               (variant === 'product-mobile')
               ? (
                  null
               ): (
                  <HotSearches />
               )
            ) : (
               <div>
                  <p className="lg:hidden flex items-center gap-6 mb-6">
                     <span className="inline-block flex-center text-text-3 text-2xl">
                        <BiSearch />
                     </span>
                     <span className="text-lg">جستجوی «{searchTerm}»</span>
                  </p>
                  {isSearching ? (
                     <div className="flex flex-col gap-6">
                        {Array(3)
                           .fill(null)
                           .map((_, i) => (
                              <SearchItemSkeleton key={i} />
                           ))}
                     </div>
                  ) : (
                     <div className="space-y-6">
                        <h4 className="flex items-center gap-4 text-lg">
                           <span className="text-2xl text-text-3">
                              <BiCategory />
                           </span>
                           <span>همه کالاهای این دسته بندی</span>
                        </h4>
                        <ul className="space-y-6" >
                           {
                              [
                                 {
                                    name: 'کالای 1',
                                    category: 'دسته بندی'
                                 },
                                 {
                                    name: 'کالای 2',
                                    category: 'دسته بندی'
                                 },
                                 {
                                    name: 'کالای 3',
                                    category: 'دسته بندی'
                                 },
                              ].map((item ,i) => (
                                 <li key={i}>
                                    <SearchResultItem
                                       name={item.name}
                                       category={item.category}
                                       inCategory
                                    />
                                 </li>
                              ))

                           }
                        </ul>
                        <Divider />
                        <ul className="space-y-6" >
                           {
                              [
                                 {
                                    name: 'کالای 1',
                                 },
                                 {
                                    name: 'کالای 2',
                                 },
                                 {
                                    name: 'کالای 3',
                                 },
                              ].map((item, i) => (
                                 <li key={i}>
                                    <SearchResultItem
                                       name={item.name}
                                    />
                                 </li>
                              ))

                           }
                        </ul>
                     </div>
                  )}
               </div>
            )}
         </div>
      </div>
   );
};

export default SearchPanel;
