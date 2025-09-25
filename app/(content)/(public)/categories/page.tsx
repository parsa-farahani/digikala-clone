'use client';
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from 'next/link';
import { primaryCategories, subCategories, leafCategories } from '@/data/header';
import Header from "@/components/shared/header/Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { BiCategoryAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";

// primaryCategory -> subCategory -> leafCategory
//                                -> leafCategory
//                 -> subCategory -> leafCategory

const Categories = () => {
   
   const [activePrimCatId, setActivePrimCatId] = useState(1);
   
   const currentPrimCat = primaryCategories.find((cat) => cat.id === activePrimCatId)

   const currentSubCats = subCategories.filter((cat) => cat.parentId === activePrimCatId)
   
   const router = useRouter();

   useEffect(() => {
      const checkMobile = () => {
         if (window.innerWidth > 768) { // define your breakpoint for "mobile"
         router.replace('/'); // redirect to home page
         }
      };

      checkMobile();
      window.addEventListener('resize', checkMobile);

      return () => window.removeEventListener('resize', checkMobile);
   }, [router]);

   return (
      <>
         <Header isCategoryPage />
         <div
            className="pt-[65px] w-full h-[100svh] max-h-[100svh]"
         >
            <nav
               aria-label="منوی دسته بندی ها"
               className={` bg-light-1 w-full h-full flex`}
            >
               <ul
               role="menu"
                  aria-label="دسته بندی های اولیه"
                  className="grow-0 shrink-0 w-[90px] bg-neutral-200 flex flex-col text-sm border-l border-dark-4/10 h-full max-h-full overflow-y-auto hidden-scroll pb-[100px]"
               >
                  {
                     primaryCategories.map((cat) => (
                        <li
                           role="none"
                           key={cat.id}
                           className="w-full border-b border-dark-4/10"
                        >
                           <button
                              role="menuitem"
                              aria-haspopup="true"
                              aria-expanded={activePrimCatId === cat.id}
                              className={`w-full py-3.5 px-2 flex flex-col gap-2 items-center justify-start ${(activePrimCatId === cat.id) ? 'text-primary-500 bg-light-1 shadow-xs' : 'text-text-2'} cursor-pointer`}
                              onMouseEnter={() => setActivePrimCatId(cat.id)}
                           >
                              {
                                 cat.icon
                              }
                              <span>
                                 {
                                    cat.name
                                 }
                              </span>
                           </button>
                        </li>
                     ))
                  }
               </ul>

               <div
                  className="grow-[1] bg-light-1 pt-0 px-4 h-full max-h-full pb-[80px]"
               >
                  <Link
                     href={`/categories?q=${currentPrimCat?.query ?? 'all'}`}
                     className="text-sm text-secondary-500 h-[80px] flex items-center gap-2"
                  >
                     <span>
                        همه محصولات
                        {" "}
                        {
                           currentPrimCat?.name
                        }
                     </span>
                     <MdKeyboardArrowLeft />
                  </Link>
                     <ul
                        role="menu"
                        aria-label={`زیردسته بندی های ${currentPrimCat?.name ?? 'همه'}`}
                        className="w-full flex flex-col h-[calc(100%-80px)] max-h-[calc(100%-80px)] content-start overflow-y-auto hidden-scroll gap-4"
                     >
                     {
                        currentSubCats?.map((subCat) => (
                           <Accordion key={subCat.id} type="multiple" className="w-full" defaultValue={[]}>
                           <li
                              role="none"
                              key={subCat.id}
                              className="w-full gow-0 shrink-0"
                           >
                              <AccordionItem value="item-1">
                                 <AccordionTrigger className="text-black border-b py-0 rounded-none">
                                    <span
                                       role="menuitem"
                                       aria-label={subCat?.name}
                                       className="relative pr-2 text-text-1 text-xs flex items-center mb-4"
                                    >
                                       <span>
                                          {
                                             subCat.name
                                          }
                                       </span>
                                    </span>
                                 </AccordionTrigger>
                                 <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <ul
                                       role="menu"
                                       aria-label={`زیردسته های ‍${subCat?.name}`}
                                       className="flex flex-wrap gap-3 p-2"
                                    >
                                       {
                                          leafCategories
                                          ?.filter((leafCat) => leafCat.parentId === subCat.id)
                                          ?.map((leafCat) => (
                                             <li
                                                role="none"
                                                key={leafCat.id}
                                             >
                                                <Link
                                                   role="menuitem"
                                                   href={`/categories?q=${leafCat.query ?? 'all'}`}
                                                   className="text-text-2 text-[.75rem] flex flex-col items-center gap-3"
                                                >
                                                   <Image
                                                      src="/images/products/headphones/h2/img-1.jpg"
                                                      width={200}
                                                      height={200}
                                                      className="rounded-full border size-[60px]"
                                                      alt={leafCat.name}
                                                   />
                                                   {
                                                      leafCat.name
                                                   }
                                                </Link>
                                             </li>
                                          ))
                                       }
                                       <li
                                          role="none"
                                          key={1000}
                                       >
                                          <Link
                                             role="menuitem"
                                             href={`/categories?q=${'all'}`}
                                             className="text-text-2 text-[.75rem] flex flex-col items-center gap-3"
                                          >
                                             <span
                                                className="rounded-full size-[60px] flex-center bg-neutral-100"
                                             >
                                                <BiCategoryAlt className="text-2xl" />
                                             </span>
                                             {
                                                "همه کالاها"
                                             }
                                          </Link>
                                       </li>
                                    </ul>
                                 </AccordionContent>
                              </AccordionItem>
                           </li>
                           </Accordion>
                        ))
                     }
                     </ul>
                     
               </div>
            </nav>
         </div>
      </>
   );
};

export default Categories;
