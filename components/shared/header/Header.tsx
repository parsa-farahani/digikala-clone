"use client";

import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import { HiOutlineLogin } from "react-icons/hi";
import Link from 'next/link';

import { BiBell } from "react-icons/bi";
import Search from "./search/Search";
import MobileNav from "./MobileNav";
import { clientLogout, selectIsAuth, selectUser } from "@/redux/slices/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import HeaderNav from "./HeaderNav";
import MiniCart from "./miniCart/MiniCart";
import ModalOverlay from "./ModalOverlay";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import ProfileMenu from "./profile/ProfileMenu";
import { debounce } from "lodash-es";
import Image from "next/image";
import { headerNavCollapsed, headerNavExpanded } from "@/redux/slices/ui/uiSlice";
import { useSignOutAccount } from "@/lib/react-query/api/users";

type HeaderProps = {
   searchQuery?: string;
   className?: string;
   isCategoryPage?: boolean;
   containerClassName?: string;
}


const Header = (
   {
      searchQuery,
      containerClassName,
      isCategoryPage,
      className,
   }: HeaderProps
) => {

   const isAuth = useAppSelector(selectIsAuth);
   const clientUser = useAppSelector(selectUser);

   const user = clientUser ?? {
      name: 'username',
      email: 'user@gmail.com',
   }

   const dispatch = useAppDispatch();

   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
   const [isCitySelectOpen, setIsCitySelectOpen] = useState(false);
   const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

   const [isHideNav, setIsHideNav] = useState(false);


   const toggleSearch = (state?: boolean) => {
      if (state != undefined) {
         if (state) {
            setIsSearchOpen(true);
            disableBodyScroll(document.documentElement);
         } else {
            setIsSearchOpen(false);
            enableBodyScroll(document.documentElement);
         }

         return;
      }

      setIsSearchOpen((io) => {
         if (io === true) {
            enableBodyScroll(document.documentElement);
            return false;
         }
         disableBodyScroll(document.documentElement);
         return true;
      });
   };

   const toggleCategoryMenu = (state?: boolean) => {
      if (state != undefined) {
         if (state) {
            setIsCategoryMenuOpen(true);
            disableBodyScroll(document.documentElement);
         } else {
            setIsCategoryMenuOpen(false);
            enableBodyScroll(document.documentElement);
         }

         return;
      }

      setIsCategoryMenuOpen((io) => {
         if (io === true) {
            enableBodyScroll(document.documentElement);
            return false;
         }
         disableBodyScroll(document.documentElement);
         return true;
      });
   };

   const toggleCitySelect = (state?: boolean) => {
      if (state != undefined) {
         if (state) {
            closeSearchModal();
            setIsCitySelectOpen(true);
            disableBodyScroll(document.documentElement);
         } else {
            setIsCitySelectOpen(false);
            enableBodyScroll(document.documentElement);
         }

         return;
      }

      setIsCitySelectOpen((io) => {
         if (io === true) {
            enableBodyScroll(document.documentElement);
            return false;
         }
          closeSearchModal();
         disableBodyScroll(document.documentElement);
         return true;
      });
   };


   const closeSearchModal = () => {

      if (isSearchOpen) {
        toggleSearch(false);
      }
   }

   const closeCategoryModal = () => {

      if (isCategoryMenuOpen) {
        toggleCategoryMenu(false);
      }
   }

   const closeCityModal = () => {

      if (isCitySelectOpen) {
        toggleCitySelect(false);
      }
   }


   const {
      mutateAsync,
   } = useSignOutAccount();

   const handleLogout = async () => {
      try {
         await mutateAsync();
         dispatch(
            clientLogout()
         )
      } catch (error) {
         console.log(error);
      }
   }

   const navElRef = useRef<HTMLElement | null>(null);
   const lastScroll = useRef(0);
   const isAnimatingNav = useRef(false);
   
   const navHidingDuration = 300;

   useEffect(() => {

      const controlNavHiding = () => {

         const dir = window.scrollY - lastScroll.current;
         
         if (dir < 0) {
            setIsHideNav(false);
            dispatch(headerNavExpanded());
         } else {
            setIsHideNav(true);
            dispatch(headerNavCollapsed());
         }
         
         lastScroll.current = window.scrollY;

         isAnimatingNav.current = true;

         setTimeout(() => {
            isAnimatingNav.current = false;
         }, navHidingDuration);
      }

      const debouncedControlNavHiding = debounce(controlNavHiding, 50);

      const handleScroll = () => {

         if (window.innerWidth < 1024) return;
         if (isAnimatingNav.current) return;
         
         if (window.scrollY < 300) {
            
            setIsHideNav(false);
            dispatch(headerNavExpanded());
            
         } else {
            
            debouncedControlNavHiding();
         }
      }

      window.addEventListener('scroll', handleScroll);
      
      return () => {
         window.removeEventListener('scroll', handleScroll);
         debouncedControlNavHiding.cancel();
      }
   }, [dispatch])
   

   return (
      <header
         className={` ${className}`}
         style={{
            display: "contents",
         }}
      >
         <div
            className={`"bg-light-1 z-50 w-full border-b border-border-1 bg-light-1 sticky top-0 shadow-md shadow-gray-300/10 ${containerClassName} ${isCategoryPage ? '!fixed top-0 left-0 w-full' : ''}`}
         >
            <div className={`container pt-3 max-lg:!px-4 flex flex-col h-auto !max-w-[1700px] ${isCategoryPage ? 'pb-3' : ''}`}>
               {/* top bar (cart, login, search-input, logo) */}
               <div className="flex items-center gap-4 justify-between">
                  <div className="h-10 grow-1 flex items-stretch gap-4">
                     <div className="h-full hidden lg:block">
                        <Link
                           href="/"
                           className="h-full w-[200px] flex items-center gap-2 text-xl text-primary-600"
                        >
                           <Image
                              src="/images/logo/digikala-logo.svg"
                              width={100}
                              height={100}
                              alt="digicommrece logo"
                              className="w-full"
                              priority
                           />
                        </Link>
                     </div>

                     <Search
                        searchQuery={searchQuery}
                        isOpen={isSearchOpen}
                        toggleSearch={toggleSearch}
                     />
                  </div>

                  <div className="h-10 flex items-center gap-4">
                     <button className="ibtn flex-center !p-0 !h-full w-10 !aspect-square shrink-0 grow-0 max-lg:bg-neutral-500 rounded-md">
                        <BiBell className="text-2xl text-gray-700" />
                     </button>

                     {
                        isAuth? (
                           <div className="hidden lg:block" >
                              <ProfileMenu
                                 email={user.email!}
                                 onLogout={handleLogout}
                                 setIsProfileMenuOpen={setIsProfileMenuOpen}
                              />
                           </div>
                        ): (
                           <Button
                              small
                              white
                              href="/login"
                              className="!hidden lg:!inline-flex"
                              icon={<HiOutlineLogin className="text-xl" />}
                           >
                              ورود | ثبت نام
                           </Button>
                        )
                     }

                     <span className="hidden lg:inline-block w-px self-stretch my-2 bg-gray-300" />

                     <MiniCart/>
                  </div>
               </div>

               {/* bottom bar (nav links) */}
               {
                  (!isCategoryPage)
                  ? (
                     <HeaderNav
                        ref={navElRef}
                        navHidingDuration={navHidingDuration}
                        isHideNav={isHideNav}
                        isCatMenuOpen={isCategoryMenuOpen}
                        isCitySelectOpen={isCitySelectOpen}
                        toggleCitySelect={toggleCitySelect}
                        toggleCategoryMenu={toggleCategoryMenu}
                    />
                  ): null
               }
            </div>
         </div>

         <MobileNav />

         <ModalOverlay
            isOpen={isSearchOpen}
            onClose={closeSearchModal}
            z={1000}
         />

         <ModalOverlay
            isOpen={isCategoryMenuOpen}
            onClose={closeCategoryModal}
            z={1}
         />

         <ModalOverlay
            isOpen={isCitySelectOpen}
            onClose={closeCityModal}
            z={2000}
         />
      </header>
   );
};

export default Header;
