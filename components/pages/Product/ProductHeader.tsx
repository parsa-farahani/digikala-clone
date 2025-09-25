"use client";

import Modal from "@/components/modal/Modal";
import Breadcrumb from "@/components/shared/Breadcrumb";
import MiniCart from "@/components/shared/header/miniCart/MiniCart";
import SearchPanel from "@/components/shared/header/search/SearchPanel";
import { useActiveSection } from "@/hooks/useActiveSection";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { debounce } from "lodash-es";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
   BiDotsVerticalRounded,
   BiSearch,
} from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

type LinkElement = HTMLAnchorElement | HTMLButtonElement | null;

const breadCrumbs = [
   {
      title: "دیجی‌کالا",
      href: "/",
   },
   {
      title: "دسته بندی",
      href: "/search?c=کفش",
   },
];

const ProductHeader = ({ navlinks }: { navlinks: PNavLink[] }) => {
   const [showSearch, setShowSearch] = useState(false);
   // const [searchTerm, setSearchTerm] = useState("");

   const navlinksRef = useRef<LinkElement[]>([]);
   const [activeNavlinkIdx, setActiveNavlinkIdx] = useState(0);

   const [showNavlinks, setShowNavlinks] = useState(false);

   //   const lastScroll = useRef(0);

   const linksContRef = useRef<HTMLDivElement>(null);
   const trackerRef = useRef<HTMLDivElement>(null);

   const trackerLastLeftRef = useRef<number>(0);
   const trackerActiveRef = useRef<boolean>(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.innerWidth > 1024) return;

         if (window.scrollY < 300) {
            setShowNavlinks(false);
         } else {
            setShowNavlinks(true);
         }
      };

      handleScroll();

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   // To control navlinks 'tracker'
   useEffect(() => {
      //   const linksCont = linksContRef.current;
      const navLinks = navlinksRef.current;
      const tracker = trackerRef.current;
      if (!tracker || !navLinks || navLinks?.length <= 0) return;

      let trackingStartTimeout: ReturnType<typeof setTimeout>;

      const controlNavlinkTrackerStart = (width: number, left: number) => {
         const delay = trackerActiveRef.current ? 300 : 0;

         if (!trackerActiveRef.current) trackerActiveRef.current = true;

         window.clearTimeout(trackingStartTimeout);

         trackingStartTimeout = setTimeout(() => {
            tracker.style.width = `${width ?? 0}px`;

            tracker.style.transform = `translateX(${left}px) scaleX(1)`;

            trackerLastLeftRef.current = left;
         }, delay);
      };

      const element = navLinks[activeNavlinkIdx];

      const width = element?.offsetWidth ?? 0;

      const left = element?.offsetLeft ?? 0;

      const debouncedTrackerStart = debounce(controlNavlinkTrackerStart, 0);

      debouncedTrackerStart(width, left);
   }, [activeNavlinkIdx]);

   // To control activity of current 'navlink', based on the section which is in the view:
   useActiveSection(navlinks, setActiveNavlinkIdx);

   const openSearch = () => {
      if (showSearch) return;
      setShowSearch(true);
      disableBodyScroll(document.documentElement);
   };

   const closeSearch = () => {
      if (!showSearch) return;
      setShowSearch(false);
      enableBodyScroll(document.documentElement);
   };

   const handleNavigation = (index: number) => {
      setActiveNavlinkIdx(index);

      const sectionId = (navlinks[index]?.href).slice(1);

      const section = document.getElementById(sectionId);

      navlinksRef.current[index]?.scrollIntoView({
         behavior: "smooth",
         inline: "center",
      });

      const top = section?.getBoundingClientRect()?.top ?? 0;

      window.scrollBy({
         behavior: "smooth",
         top: top - 100,
      });
   };

   return (
      <header className="lg:hidden bg-light-1 fixed z-10 top-0 left-0 w-full">
         <div className="bg-light-1 border-b">
            <div className="h-[50px] flex items-center justify-between px-2 py-1 ">
               <div className="h-full">
                  <Link href="/" className="h-full ibtn text-2xl px-0">
                     <IoCloseOutline />
                  </Link>
               </div>

               <div className="h-full flex items-center gap-4">
                  <button
                     className="ibtn text-2xl"
                     onClick={() => {
                        openSearch();
                     }}
                  >
                     <BiSearch />
                  </button>

                  <MiniCart isMobile className="!block" />

                  <button className="ibtn text-2xl">
                     <BiDotsVerticalRounded />
                  </button>
               </div>
            </div>

            {/* Bottom Row */}
            <div className="h-[50px] grid grid-cols-1 items-center">
               <div className="col-start-1 col-end-2 row-start-1 row-end-2 h-full max-w-full overflow-auto hidden-scroll flex items-center px-4">
                  <Breadcrumb navlinks={breadCrumbs} />
               </div>

               <nav
                  className={`h-full col-start-1 col-end-2 row-start-1 row-end-2 transition-opacity duration-200 max-w-full overflow-x-auto hidden-scroll ${
                     showNavlinks
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none "
                  }`}
               >
                  <div
                     ref={linksContRef}
                     className="h-full w-fit flex gap-8 items-center bg-light-1 relative px-4"
                  >
                     {navlinks.map(({ title, href }, i) => (
                        <button
                           key={i}
                           ref={(node) => {
                              navlinksRef.current.push(node!);
                           }}
                           onClick={() => {
                              handleNavigation(i);
                           }}
                           className={`whitespace-nowrap text-sm ${
                              activeNavlinkIdx === i
                                 ? "text-text-1"
                                 : "text-text-3"
                           }`}
                        >
                           {title}
                        </button>
                     ))}

                     <div
                        id="navlinks-tracker"
                        ref={trackerRef}
                        className="h-[4px] w-[60px] rounded-t-full bg-dark-1 absolute bottom-0 left-0 transition-all duration-300 pointer-events-none"
                     />
                  </div>
               </nav>
            </div>
         </div>

         <Modal
            isOpen={showSearch}
            onClose={() => {
               closeSearch();
            }}
            className="bottom-auto top-0 !h-fit"
         >
            <SearchPanel
               isOpen={showSearch}
               toggleSearch={() => {
                  setShowSearch((ss) => !ss);
               }}
               variant="product-mobile"
            />
         </Modal>
      </header>
   );
};

export default ProductHeader;
