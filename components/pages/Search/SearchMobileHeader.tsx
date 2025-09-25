"use client";

import Modal from "@/components/modal/Modal";
import SearchPanel from "@/components/shared/header/search/SearchPanel";
import { ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";
import { ImSortAmountDesc } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbAdjustmentsFilled } from "react-icons/tb";
import FilterMostRelated from "./filters/FilterMostRelated";
import FilterFilter from "./filters/FilterFilter";
import FilterCategory from "./filters/category/FilterCategory";
import FilterPriceRange from "./filters/priceRange/FilterPriceRange";
import FilterSellerType from "./filters/sellerType/FilterSellerType";
import FilterBrand from "./filters/brand/FilterBrand";
import { brands, categories, sellerTypes } from "@/data/search";
import MobileNav from "@/components/shared/header/MobileNav";

type SearchMobileHeader = {
   searchQuery?: string;
};

const filtersBtns = [
   {
      modalId: "most-related",
      title: "مرتبط ترین",
      icon: <ImSortAmountDesc />,
   },
   {
      modalId: "filter",
      title: "فیلتر",
      icon: <TbAdjustmentsFilled className="rotate-z-90" />,
   },
   {
      modalId: "category",
      title: "دسته بندی",
      hasArrow: true,
   },
   {
      modalId: "brand",
      title: "برند",
      hasArrow: true,
   },
   {
      title: "ارسال سریع",
      query: "delivery=fast",
   },
   {
      title: "ارسال فروشنده",
      query: "delivery=seller",
   },
   {
      modalId: "price-range",
      title: "محدوده قیمت",
      hasArrow: true,
   },
   {
      title: "فقط کالاهای موجود",
      query: "stock=existing",
   },
   {
      title: "فقط کالاهای موجود در انبار دیجی‌کالا",
      query: "stock=existing_digikala",
   },
   {
      modalId: "seller-type",
      title: "نوع فروشنده",
      hasArrow: true,
   },
];

const SearchMobileHeader = ({ searchQuery }: SearchMobileHeader) => {
   const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
   const [curntModalId, setCurntModalId] = useState<string | null>(null);

   const router = useRouter();

   // const pathname = usePathname();
   const searchParams = useSearchParams();
   const query = searchParams.get("q") || "";

   const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

   const handleQueryChange = useCallback((newQuey: Record<string, string | null>) => {

      const curntParams = new URLSearchParams(searchParams.toString())

      Object.entries(newQuey).forEach(([key, value]) => {
      if (value === null || value === "") {
         curntParams.delete(key);
      } else {
         curntParams.set(key, value);
      }
      })

      router.push(`/search?${curntParams.toString()}`, { scroll: false });
   }, [router, searchParams])

   const toggleFilterQuery = (query: { key: string; value: string | null }) => {
      if (searchParams.get(query.key) === query.value) {
         handleQueryChange(
            {
               [query.key]: null
            }
         )
      } else {
         handleQueryChange(
            {
               [query.key]: query.value
            }
         )
      }
   }

   const clearSearch = () => {
      router.replace(`/search`);
   };

   const closeSearchModal = () => {
      setIsSearchModalOpen(false);
   };

   const openSearchModal = () => {
      setIsSearchModalOpen(true);
   };

   const handleBack = () => {
      router.back();
   };

   const openFiltersModal = (modalId: string) => {
      setCurntModalId(modalId);
      setIsFiltersModalOpen(true);
   };

   const closeFiltersModal = () => {
      setCurntModalId(null);
      setIsFiltersModalOpen(false);
   };

   // the content to be shown in 'filters modal' - in 'mobile' size (each filter-button has its own modalId -> modalContent)
   let filtersModalContent;

   switch (curntModalId) {
      case "most-related":
         filtersModalContent = (
            <FilterMostRelated onClose={closeFiltersModal} />
         );
         break;
      case "filter":
         filtersModalContent = <FilterFilter onClose={closeFiltersModal} />;

         break;
      case "category":
         filtersModalContent = <FilterCategory
            handleQueryChange={handleQueryChange}
            categories={categories}
         />;

         break;
      case "brand":
         filtersModalContent = <FilterBrand brands={brands} />;

         break;
      case "price-range":
         filtersModalContent = <FilterPriceRange
            handleQueryChange={handleQueryChange}
         />;

         break;
      case "seller-type":
         filtersModalContent = <FilterSellerType
            sellerTypes={sellerTypes}
         />;

         break;
      default:
         filtersModalContent = null;
         break;
   }

   return (
      <header className="lg:hidden bg-light-1 sticky z-[999] top-0">
         <div className="p-4">
            <div className="w-full h-full grow-1 px-4 text-light-3 text-xs md:text-base whitespace-nowrap bg-neutral-100 rounded-lg">
               <span className="h-full flex items-center gap-4">
                  <button
                     className="inline-block text-2xl flex-center"
                     onClick={() => handleBack()}
                  >
                     <ArrowRight />
                  </button>
                  <button
                     className="leading-10 text-base grow-1 text-right"
                     onClick={openSearchModal}
                  >
                     {query ? (
                        <span className="text-text-1">{query}</span>
                     ) : (
                        <span className="text-l">جستجو</span>
                     )}
                  </button>
                  {searchQuery ? (
                     <button
                        className="inline-block text-2xl flex-center mr-auto"
                        onClick={clearSearch}
                     >
                        <IoClose />
                     </button>
                  ) : null}
               </span>
            </div>
         </div>

         <div className="h-[50px] w-full max-w-full overflow-x-auto hidden-scroll bg-light-1">
            <div className="flex w-fit px-4 gap-2 whitespace-nowrap text-xs text-text-2">
               {filtersBtns.map((filter, i) => {
                  const classes = `py-2 px-3 border rounded-full flex gap-1 items-center`;

                  return (
                     <button
                        key={i}
                        onClick={() => {

                           if (filter?.query) {
                              toggleFilterQuery({
                                 key: filter.query.split('=')[0],
                                 value: filter.query.split('=')[1]
                              })
                           }

                           if (!filter?.modalId) return;
                           openFiltersModal(filter.modalId);
                        }}
                        className={
                           `
                           ${classes}
                           ${filter?.query ? searchParams.get(filter.query.split('=')[0]) === filter.query.split('=')[1] ? 'bg-primary-600/10 text-primary-500 border-0' : '' : ''}
                           `
                        }
                     >
                        {filter?.icon ? (
                           <span className="text-sm">{filter.icon}</span>
                        ) : null}
                        {filter.title}
                        {filter?.hasArrow ? (
                           <span>
                              <MdKeyboardArrowDown className="text-lg" />
                           </span>
                        ) : null}
                     </button>
                  );
                  
               })}
            </div>
         </div>

         {/* mobile navigation bar (fixed bottom ) */}
         <MobileNav
            
         />

         {/* Searching Modal  */}
         <Modal
            isOpen={isSearchModalOpen}
            onClose={() => {
               closeSearchModal();
            }}
            className="bottom-auto top-0 !h-fit"
         >
            <SearchPanel
               isOpen={isSearchModalOpen}
               toggleSearch={() => {
                  setIsSearchModalOpen((io) => !io);
               }}
               onClearCallback={closeSearchModal}
               onSubmitCallback={closeSearchModal}
            />
         </Modal>

         {/* Filters Modal  */}
         <Modal
            isOpen={isFiltersModalOpen}
            onClose={() => closeFiltersModal()}
            fullHeight={curntModalId === "filter"}
            mobileOnly
            className={`bg-light-1 rounded-none max-lg:!overflow-y-hidden lg:hidden transition-transform duration-[600ms] ${
               isFiltersModalOpen ? "translate-y-0" : "translate-y-full"
            }`}
         >
            {filtersModalContent}
         </Modal>
      </header>
   );
};

export default SearchMobileHeader;
