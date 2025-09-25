import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from 'next/link';

import { primaryCategories, subCategories, leafCategories } from '@/data/header';



// primaryCategory -> subCategory -> leafCategory
//                                -> leafCategory
//                 -> subCategory -> leafCategory



type CategoryMenuProps = {
      isOpen: boolean;
   }


const CategoryMenu = (
   {
      isOpen
   }: CategoryMenuProps
) => {

   // const isOpen = true;
   
   const [activePrimCatId, setActivePrimCatId] = useState(1);
   
   const currentPrimCat = primaryCategories.find((cat) => cat.id === activePrimCatId)

   const currentSubCats = subCategories.filter((cat) => cat.parentId === activePrimCatId)
   

   return (
      <nav
         aria-label="منوی دسته بندی ها"
         className={`hidden absolute z-99999 top-full bg-light-1 w-fit max-w-[80vw] h-[600px] max-h-[60vh] ${
            isOpen ? "lg:flex" : "lg:hidden"
         } `}
      >
         <ul
         role="menu"
            aria-label="دسته بندی های اولیه"
            className="grow-0 shrink-0 w-[200px] bg-neutral-200 overflow-y-auto flex flex-col text-sm"
         >
            {
               primaryCategories.map((cat) => (
                  <li
                     role="none"
                     key={cat.id}
                     className="w-full"
                  >
                     <button
                        role="menuitem"
                        aria-haspopup="true"
                        aria-expanded={activePrimCatId === cat.id}
                        className={`w-full py-3.5 px-2 flex gap-2 items-center justify-start ${(activePrimCatId === cat.id) ? 'text-primary-500 bg-light-1 shadow-xs' : 'text-text-2'} cursor-pointer`}
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
            className="w-max min-w-fit bg-light-1 py-6 px-4 max-h-full overflow-y-auto"
         >
            <Link
               href={`/categories?q=${currentPrimCat?.query ?? 'all'}`}
               className="text-sm text-secondary-500 mb-8 flex items-center gap-2"
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
               className="w-fit flex flex-col max-h-full flex-wrap content-start gap-4"
            >
               {
                  currentSubCats?.map((subCat) => (
                     <li
                        role="none"
                        key={subCat.id}
                        className="w-[200px] gow-0 shrink-0"
                     >
                        <Link
                           role="menuitem"
                           aria-label={subCat?.name}
                           href={`/categories?q=${subCat.query ?? 'all'}`}
                           className="relative pr-2 text-text-1 text-base flex items-center mb-4 before:content-[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-[60%] before:w-px before:bg-primary-600"
                        >
                           <span>
                              {
                                 subCat.name
                              }
                           </span>
                           <MdKeyboardArrowLeft className="text-base text-text-2" />
                        </Link>

                        <ul
                           role="menu"
                           aria-label={`زیردسته های ‍${subCat?.name}`}
                           className="flex flex-col gap-2"
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
                                       className="text-sm text-text-3"
                                    >
                                       {
                                          leafCat.name
                                       }
                                    </Link>
                                 </li>
                              ))
                           }
                        </ul>
                     </li>
                  ))
               }
            </ul>
         </div>
      </nav>
   );
};

export default CategoryMenu;
