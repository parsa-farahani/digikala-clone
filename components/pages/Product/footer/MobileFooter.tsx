"use client";

import React from "react";
import toast from "react-hot-toast";
import { MdContentCopy } from "react-icons/md";

const MobileFooter = () => {

   const copyId = (id: string) => {
      navigator.clipboard.writeText(String(id));
      toast(
            (t) => (
               <span>
                  شناسه کپی شد.
                  <button
                     onClick={() => toast.dismiss(t.id)}
                     style={{
                        cursor: 'pointer',
                        marginRight: '.75rem',
                        color: '#19bfd3',
                     }}
                  >
                     باشه
                  </button>
               </span>
            ),
         );
   };

   return (
      <footer className="relative z-3 lg:hidden pb-2 bg-light-1">
         <p className="flex gap-2 items-center justify-center text-sm text-text-2">
            <span>شناسه این کالا</span>
            <button
               className="cursor-pointer py-2 px-4 bg-neutral-100 rounded-full flex items-center gap-2"
               onClick={() => copyId('000000')}
            >
               <span className="text-xs">DKP-000000</span>
               <span>
                  <MdContentCopy className="text- rotate-y-180" />
               </span>
            </button>
         </p>
      </footer>
   );
};

export default MobileFooter;
