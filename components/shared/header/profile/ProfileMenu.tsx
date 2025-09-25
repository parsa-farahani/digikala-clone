'use client';

import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaRegUser } from "react-icons/fa6";
import { MdArrowDropDown, MdKeyboardArrowLeft } from "react-icons/md";
import Link from 'next/link';

import { profileMenuItems, type ProfileMenuItem } from "@/data";
import { IoLogOutOutline } from "react-icons/io5";
import React, { SetStateAction } from "react";

type ProfileMenuProps = {
   email: string;
   onLogout: () => void;
   setIsProfileMenuOpen: React.Dispatch<SetStateAction<boolean>>;
};

const ProfileMenu = (
   { 
      email,
      onLogout,
      setIsProfileMenuOpen,
   }: ProfileMenuProps) => {


   return (
      <DropdownMenu dir="rtl" 
         onOpenChange={(open) => setIsProfileMenuOpen(open)}
      >
         <DropdownMenuTrigger asChild
            className="relative outline-none"
         >
            <Button
               variant="outline"
               className="relative py-2 px-1.5 flex items-start justify-center -gap-2 border-0  outline-none !font-yekan"
            >
               <span>
                  <FaRegUser />
               </span>
               <span>
                  <MdArrowDropDown />
               </span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent
            className="absolute !left-[-2rem] w-56 p-0"
            align="start"
         >
            <DropdownMenuItem className="p-0">
               <Link
                  href="/profile"
                  className="w-full font-sans py-4 px-3 bg-light-1 hover:bg-neutral-200/50 flex justify-between items-center text-xs transition-colors duration-200"
               >
                  <span>{email}</span>
                  <span>
                     <MdKeyboardArrowLeft />
                  </span>
               </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator className="w-[95%] mx-auto my-0" />

            {profileMenuItems.map((item: ProfileMenuItem, i: number) => (
               <React.Fragment key={i}>
                  <DropdownMenuItem className="p-0">
                     <Link
                        href={item.href ?? '#'}
                        className="w-full h-10 py-2 px-2.5 bg-light-1 hover:bg-neutral-200/50 transition-colors duration-200 !font-yekan text-text-2 flex justify-between items-center whitespace-nowrap"
                     >
                        <span className="w-full flex items-center justify-start gap-3">
                           <span>{item.icon}</span>
                           <span>{item.title}</span>
                        </span>
                        {item.helper ? (
                           <span className="text-xs flex gap-1 items-center whitespace-nowrap">
                              {item.helper}
                           </span>
                        ) : null}
                     </Link>
                  </DropdownMenuItem>

                  {i !== profileMenuItems.length - 1 ? (
                     <DropdownMenuSeparator className="w-[95%] mx-auto my-0" />
                  ) : null}
               </React.Fragment>
            ))}

            <DropdownMenuItem className="p-0">
               <button
                  className="w-full h-10 py-2 px-2.5 bg-light-1 hover:bg-neutral-200/50 transition-colors duration-200 !font-yekan text-text-2 flex justify-between items-center whitespace-nowrap cursor-pointer"
                  onClick={() => onLogout()}
               >
                  <span className="w-full flex items-center justify-start gap-3">
                     <span>
                        {
                           <IoLogOutOutline className="text-text-2" />
                        }
                     </span>
                     <span>
                        خروج از حساب کاربری
                     </span>
                  </span>
               </button>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
};

export default ProfileMenu;
