import { headerNavLinks } from "@/data";
import { debounce } from "lodash-es";
import Link from 'next/link';

import React, { forwardRef, useEffect, useRef } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import CategoryMenu from "./CategoryMenu";
import CitySelect from "./CitySelect";
// import { useAppDispatch } from "@/redux/hooks";


type LinkElement =  HTMLButtonElement | HTMLAnchorElement | HTMLDivElement | null;


type HeaderNavProps = {
   isHideNav: boolean;
   isCatMenuOpen: boolean;
   isCitySelectOpen: boolean;
   navHidingDuration: number;
   toggleCategoryMenu: (state?: boolean) => void;
   toggleCitySelect: (state?: boolean) => void;
}


const HeaderNav = forwardRef<HTMLElement, HeaderNavProps>((
   {
      isHideNav,
      isCatMenuOpen,
      isCitySelectOpen,
      navHidingDuration,
      toggleCategoryMenu,
      toggleCitySelect,
   }: HeaderNavProps,
   ref
) => {



   const linksContRef = useRef<HTMLDivElement>(null);
   const linksRef = useRef<LinkElement[]>([]);
   const trackerRef = useRef<HTMLDivElement>(null);

   const trackerLastLeftRef = useRef<number>(0);
   const trackerShowRef = useRef<boolean>(false);
   const trackerActiveRef = useRef<boolean>(false);

   useEffect(() => {
      const linksCont = linksContRef.current;
      const navLinks = linksRef.current;
      const tracker = trackerRef.current;
      if (!tracker || !navLinks || navLinks?.length <= 0) return;


      let trackingStartTimeout: ReturnType<typeof setTimeout>;
      let trackingFinishTimeout: ReturnType<typeof setTimeout>;

      const controlNavlinkTrackerStart = (width: number, left: number) => {

         const delay = trackerActiveRef.current ? 300 : 0;

         if (!trackerActiveRef.current) trackerActiveRef.current = true;

         window.clearTimeout(trackingStartTimeout);
         
         trackingStartTimeout = setTimeout(() => {
            tracker.style.width = `${width ?? 0}px`;

            tracker.style.transform = `translateX(${left}px) scaleX(1)`;

            trackerLastLeftRef.current = left;
         }, delay);
      }

      const debouncedTrackerStart = debounce(controlNavlinkTrackerStart, 0);


      const handleMouseenter = (e: Event) => {
                  

         const event = e as MouseEvent;
   
         const target = event.currentTarget as LinkElement;


         const width = target?.offsetWidth ?? 0;

         let left;

         if (target?.id === 'category-btn') {
            left = target?.parentElement?.offsetLeft ?? 0;
         } else {
            left = target?.offsetLeft ?? 0;
         }
            

         debouncedTrackerStart(width, left);
      }




      const controlNavlinkTrackerFinish = (left: number) => {
         
         window.clearTimeout(trackingFinishTimeout);

         trackingFinishTimeout = setTimeout(() => {
            tracker.style.transform = `translateX(${left}px) scaleX(0)`;

            trackerShowRef.current = false;
         }, 0);
      }
      
      const debouncedTrackerFinish = debounce(controlNavlinkTrackerFinish, 0);
      
      const handleMouseleave = (e: Event) => {

         const event = e as MouseEvent;
   
         const target = event.currentTarget as LinkElement;

         const left = target?.offsetLeft ?? 0;

         debouncedTrackerFinish(left);
      }


      const controlTrackIn = () => {
         // trackerActiveRef.current = false;
      }
      
      // because I used a 'setTimout' to change the 'tracker' style, I used these timeouts after user leaved the links-cont, to ensure that the tracker becomes hidden - to catch the timeout-bugs of tracking
      const controlTrackOut = () => {
         trackerActiveRef.current = false;

         setTimeout(() => {
            if (!trackerActiveRef.current) {
               tracker.style.transform = `translateX(${trackerLastLeftRef.current}px) scaleX(0)`;
            }
         }, 100);

         setTimeout(() => {
            if (!trackerActiveRef.current) {
               tracker.style.transform = `translateX(${trackerLastLeftRef.current}px) scaleX(0)`;
            }
         }, 500);
      }


      navLinks.forEach((navLink) => {
         navLink?.addEventListener('mouseenter', handleMouseenter)
         navLink?.addEventListener('mouseleave', handleMouseleave)
      })

      linksCont?.addEventListener('mouseenter', controlTrackIn);
      linksCont?.addEventListener('mouseleave', controlTrackOut);
      
      
      return () => {
         if (!navLinks || navLinks?.length <= 0) return;

         navLinks.forEach((navLink) => {
            navLink?.removeEventListener('mouseenter', handleMouseenter)
            navLink?.removeEventListener('mouseleave', handleMouseleave)
         })  

         linksCont?.removeEventListener('mouseenter', controlTrackIn);
         linksCont?.removeEventListener('mouseleave', controlTrackOut);

         window.clearTimeout(trackingStartTimeout);
         window.clearTimeout(trackingFinishTimeout);
      }
   }, [])


   const handleOpenCatMenu = () => {
      toggleCategoryMenu(true);
   }

   const handleCloseCatMenu = () => {
      toggleCategoryMenu(false);
   }

   const handleOpenCitySelect = () => {
      toggleCitySelect(true);
   }

   // const handleCloseCitySelect = () => {
   //    toggleCitySelect(false);
   // }


   return (
      <nav
         ref={ref}
         className={`max-w-full overflow-visible relative py-0 mt-2 flex items-center justify-start lg:justify-between lg:transition-all ${navHidingDuration ? `lg:duration-[${navHidingDuration}ms]` : 'lg:duration-0'} lg:origin-top ${isHideNav ? 'lg:h-0 lg:overflow-y-clip' : 'h-10'}`}
      >
         <div
            ref={linksContRef}
            className="relative flex h-10 gap-4"
         >

            <div className="relative flex items-center"
               onMouseEnter={() => {
                  handleOpenCatMenu()
               }}
               onMouseLeave={() => {
                  if (!isCatMenuOpen) return;
                  handleCloseCatMenu();
               }}
               ref={(node) => {
                  linksRef.current.push(node);
               }}
            >
               <button
                  id="category-btn"
                  className="hidden lg:flex gap-2 items-center text-text-2 text-base xl:text-lg whitespace-nowrap"
               >
                  <RxHamburgerMenu />
                  <span>دسته بندی کالاها</span>
               </button>

               <CategoryMenu isOpen={isCatMenuOpen} />
            </div>


            <span className="hidden lg:inline-block w-px self-stretch my-3 bg-gray-300" />

            <div className="hidden lg:flex small items-center">
               {headerNavLinks.map((navLink, i) => (
                  <Link
                     ref={(node) => {
                        linksRef.current.push(node);
                     }}
                     key={i}
                     href={navLink.href ?? '#'}
                     className={`h-full px-2 text-xs xl:text-sm text-text-3 flex items-center gap-1 whitespace-nowrap ${(i === headerNavLinks.length - 1) ? 'hidden xl:flex' : ''}`}
                  >
                     <span className="text-base">{navLink.icon}</span>
                     <span>{navLink.title}</span>
                  </Link>
               ))}

               <span className="hidden lg:inline-block w-px self-stretch my-3 bg-gray-300" />
               
               <Link
                  ref={(node) => {
                     linksRef.current.push(node);
                  }}
                  href="#question"
                  className="h-full px-2 text-xs xl:text-sm text-text-3 flex items-center gap-1 whitespace-nowrap"
               >
                  <span>
                     سوالی دارید؟
                  </span>
               </Link>
               
               <Link
                  ref={(node) => {
                     linksRef.current.push(node);
                  }}
                  href="#question"
                  className="h-full px-2 text-xs xl:text-sm text-text-3 flex items-center gap-1 whitespace-nowrap"
               >
                  <span>
                     در دیجی‌کالا بفروشید!
                  </span>
               </Link>
            </div>

            <div
               id="navlink-tracker"
               ref={trackerRef}
               className="absolute bottom-0 h-[2px] left-0 w-20 bg-primary-600 origin-left transition-all duration-400 rounded-t-md pointer-events-none"
               style={{
                  transform: 'translateX(0px) scaleX(0)',
               }}
            />
         </div>

         <div>
            <button className="py-1 px-2 lg:bg-orange-400/10  rounded-full text-xs md:text-sm text-text-1 lg:text-orange-600 flex items-center gap-2 cursor-pointer whitespace-nowrap"
               onClick={handleOpenCitySelect}
            >
               <IoLocationOutline className="text-base md:text-lg" />
               <span className="text-xs">شهر خود را انتخاب کنید</span>
               <span className="text-lg md:text-2xl lg:hidden">
                  <MdKeyboardArrowLeft />
               </span>
            </button>

            {/* City select Menu  */}
            <CitySelect isOpen={isCitySelectOpen} toggleCitySelect={toggleCitySelect} />
         </div>

         
      </nav>
   );
})
HeaderNav.displayName = 'HeaderNav';

export default HeaderNav;
