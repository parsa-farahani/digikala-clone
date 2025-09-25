"use client";

import React from "react";
import { navlinks } from "@/data/profile";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { useSignOutAccount } from "@/lib/react-query/api/users";
import { useAppDispatch } from "@/redux/hooks";
import { clientLogout } from "@/redux/slices/auth/authSlice";

const ProfileSidebarNav = () => {
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

   const pathname = usePathname();

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
      <nav>
         {navlinks.map((nl, i) => {
            const isActive =
               nl?.href && nl.href !== "#" && pathname === nl.href;

            const classes = `relative block w-full lg:px-4 cursor-pointer bg-light-1 hover:bg-light-2 ${
               isActive
                  ? 'before:content-[""] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-[70%] before:bg-primary-500 max-lg:before:hidden'
                  : ""
            }`;

            const content = (
               <span
                  className={`flex items-center py-4  ${
                     i !== navlinks.length - 1 ? "border-b" : ""
                  }`}
               >
                  <span className="text-text-1 text-2xl ml-4">{nl.icon}</span>
                  <span className="text-text-2 text-sm lg:text-base">
                     {nl.title}
                  </span>

                  <span className="lg:hidden mr-auto text-2xl text-text-3">
                     <MdKeyboardArrowLeft />
                  </span>
               </span>
            );

            if (nl.href) {
               return (
                  <Link key={i} href={nl.href} className={`${classes}`}>
                     {content}
                  </Link>
               );
            }

            return (
               <button
                  key={i}
                  className={`${classes}`}
                  onClick={() => performAction(nl?.action ?? undefined)}
               >
                  {content}
               </button>
            );
         })}
      </nav>
   );
};

export default ProfileSidebarNav;
