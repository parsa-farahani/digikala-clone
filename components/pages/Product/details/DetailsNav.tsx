'use client';

import { useAppSelector } from "@/redux/hooks";
import { selectIsHeaderNavCollapsed } from "@/redux/slices/ui/uiSlice";
import { debounce } from "lodash-es";
import React, { useEffect, useRef, useState } from "react";

type DetailsNavProps = {
   navlinks: PNavLink[];
   handleNavigation: (index: number) => void;
   activeNavlinkIdx: number;
}


const DetailsNav = (
   {
      navlinks,
      handleNavigation,
      activeNavlinkIdx,
   }: DetailsNavProps
) => {

   const [headerHeight, setHeaderHeight] = useState(0);

   const isHeaderNavCollapsed = useAppSelector(selectIsHeaderNavCollapsed);

   const calcHeaderHTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
   
   
   useEffect(() => {

      if (calcHeaderHTimeout.current) {
         clearTimeout(calcHeaderHTimeout.current);
      }
      
      const calcHeaderHeight = () => {
         
         if (calcHeaderHTimeout.current) {
            clearTimeout(calcHeaderHTimeout.current);
         }
         
         if (window.innerWidth < 1024) return;

         const headerCont: HTMLDivElement | null = document.querySelector('header div');
         setHeaderHeight(headerCont?.offsetHeight ?? 0);
      }

      const debouncedCalcHeaderHeight = debounce(calcHeaderHeight, 50);

      
      document.addEventListener('scroll', debouncedCalcHeaderHeight);
      
      calcHeaderHTimeout.current = setTimeout(() => {
         if (window.innerWidth < 1024) return;
         calcHeaderHeight();
      }, 200);
      
      return () => {
         document.removeEventListener('scroll', debouncedCalcHeaderHeight);
      }
   }, [isHeaderNavCollapsed])

   return (
      <nav 
         className={`max-lg:hidden border-b mb-8 sticky z-10 bg-light-1 transition-all duration-200`}
         style={{
            top: `${headerHeight}px`
         }}
      >
         <ul className="flex">
            {navlinks.map(({ title }, i) => (
               <li key={i}>
                  <button
                     className={`block py-3 px-4 text-sm cursor-pointer ${
                        activeNavlinkIdx === i
                           ? "text-primary-500 border-b-4 border-primary-500 rounded-b-[3px]"
                           : "text-text-3"
                     }`}
                     onClick={() => handleNavigation(i)}
                  >
                     {title}
                  </button>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default DetailsNav;
