import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import React from "react";
import SearchMobileHeader from "../../../../components/pages/Search/SearchMobileHeader";
import Divider from "@/components/shared/Divider";
import FilterMostRelated from "@/components/pages/Search/filters/FilterMostRelated";
import MoreAccurateResults from "@/components/pages/Search/moreAccurateResults/MoreAccurateResults";
import FilterFilter from "@/components/pages/Search/filters/FilterFilter";
import RelatedSearches from "@/components/pages/Search/RelatedSearches";
import CustomProduct from "@/components/pages/Search/CustomProduct";
import SearchResult from "@/components/pages/Search/SearchResult";

const SearchProducts = async ({
   searchParams,
}: {
   searchParams?: Promise<{
      q?: string;
      // page?: string;
   }>;
}) => {
   const sp = await searchParams;
   const q = sp?.q ?? "";

   return (
      <div className="" >
         <Header searchQuery={q} className="max-lg:!hidden" />

         <SearchMobileHeader searchQuery={q} />

         <Divider className="lg:hidden !bg-border-1/20" />

         <main
            className="w-full"
         >
            <div
               className="w-full max-w-[1680px] mx-auto lg:p-6"
            >
               {q ? (
                  /*  more accurate results  */
                  <MoreAccurateResults />
               ) : null}

               {/* results & filters  */}
               <div className="lg:flex lg:gap-x-4">
                  {/* filters bar */}
                  <div className="hidden lg:self-stretch lg:flex lg:flex-col w-[260px] shrink-0 grow-0 ">
                     {/* related searches  */}
                     {q ? (
                        <RelatedSearches />
                     ) : null}

                     {/* custom prodcts */}
                     {q ? (
                        <CustomProduct />
                     ) : null}

                     {/* filters  */}
                     <div className="sticky top-[120px]" >
                        <FilterFilter />
                     </div>
                  </div>

                  {/* results   */}
                  <section className="lg:grow-1">
                     {/* Sort Filters Row  */}
                     <div className="hidden lg:block">
                        <FilterMostRelated />
                     </div>

                     {/* Results Content  */}
                     <SearchResult
                        searchQuery={q}
                     />
                  </section>
               </div>
            </div>
         </main>

         <Footer />
      </div>
   );
};

export default SearchProducts;
