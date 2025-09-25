"use client";

import Modal from "@/components/modal/Modal";
import Heading from "@/components/shared/Heading";
import { mobileSettingsNavlinks } from "@/data/profile";
import { useSignOutAccount } from "@/lib/react-query/api/users";
import { useAppDispatch } from "@/redux/hooks";
import { clientLogout } from "@/redux/slices/auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiBell } from "react-icons/bi";
import { GoGear } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const ProfileMobileHeader = () => {
   const [isOpenSettings, setIsOpenSettings] = useState(false);

   const openSettignsModal = () => {
      setIsOpenSettings(true);
   };

   const closeSettignsModal = () => {
      setIsOpenSettings(false);
   };

   const router = useRouter();

   const dispatch = useAppDispatch();

   const { mutateAsync } = useSignOutAccount();

   const handleLogout = async () => {
      try {
         await mutateAsync();
         dispatch(clientLogout());

         router.replace("/");
      } catch (error) {
         console.log(error);
      }
   };

   const performAction = (actionType?: string) => {
      if (!actionType) return;

      switch (actionType) {
         case "logout":
            handleLogout();
            break;

         default:
            break;
      }
   };

   return (
      <header className="h-[70px] lg:hidden bg-light-1 border-b">
         <div className="size-full px-2 flex items-center justify-between">
            <div>
               <button className="ibtn" onClick={() => openSettignsModal()}>
                  <GoGear className="text-2xl " />
               </button>
            </div>

            <div className="flex gap-0">
               <button className="ibtn">
                  <TfiHeadphoneAlt className="text-2xl rotate-y-180" />
               </button>
               <button className="ibtn">
                  <BiBell className="text-2xl " />
               </button>
            </div>
         </div>

         <Modal
            isOpen={isOpenSettings}
            onClose={() => {
               closeSettignsModal();
            }}
            fullHeight
            className=""
         >
            <div className="h-full bg-light-1 flex flex-col">
               <div className="py-3 px-4 flex items-center justify-between">
                  <Heading element="h2" variant="h3">
                     تنظیمات
                  </Heading>

                  <button
                     className="ibtn p-2"
                     onClick={() => closeSettignsModal()}
                  >
                     <IoClose className="text-2xl text-text-2" />
                  </button>
               </div>

               <nav className="px-4">
                  {mobileSettingsNavlinks.map((nl, i) => {
                     const classes = `relative block w-full lg:px-4 cursor-pointer bg-light-1 hover:bg-light-2 ${
                        i === 0
                           ? 'before:content-[""] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-[70%] before:bg-primary-500 max-lg:before:hidden'
                           : ""
                     }`;

                     const content = (
                        <span
                           className={`flex items-center py-4  ${
                              i !== mobileSettingsNavlinks.length - 1
                                 ? "border-b"
                                 : ""
                           }`}
                        >
                           <span
                              className={`text-2xl ml-4 text-text-3 ${
                                 nl?.action === "logout" ? "!text-red-500" : ""
                              }`}
                           >
                              {nl.icon}
                           </span>
                           <span
                              className={`text-text-1 text-sm lg:text-base ${
                                 nl?.action === "logout" ? "!text-red-500" : ""
                              }`}
                           >
                              {nl.title}
                           </span>

                           <span
                              className={`mr-auto text-2xl text-text-2 ${
                                 nl?.action === "logout" ? "hidden" : ""
                              }`}
                           >
                              <MdKeyboardArrowLeft />
                           </span>
                        </span>
                     );

                     if (nl.href) {
                        return (
                           <Link
                              key={i}
                              href={nl.href}
                              className={`${classes}`}
                           >
                              {content}
                           </Link>
                        );
                     }

                     return (
                        <button
                           key={i}
                           className={`${classes}`}
                           onClick={() =>
                              performAction(nl?.action ?? undefined)
                           }
                        >
                           {content}
                        </button>
                     );
                  })}
               </nav>

               <div className="mt-auto flex-center py-2">
                  <Image
                     src="/images/profile/logo.svg"
                     width={80}
                     height={60}
                     alt=""
                     className="w-[100px]"
                  />
               </div>
            </div>
         </Modal>
      </header>
   );
};

export default ProfileMobileHeader;
