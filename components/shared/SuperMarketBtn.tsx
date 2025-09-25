import Link from "next/link";
import React from "react";
import { RiShoppingBasketFill } from "react-icons/ri";

const SuperMarketBtn = () => {
   return (
      <Link
         href="#"
         type="button"
         className="fixed z-[10] left-1/2 lg:left-8 bottom-[60px] lg:bottom-8 py-2.5 px-2 -translate-x-1/2 lg:translate-x-0 rounded-full bg-green-500 text-light-1 flex items-center gap-1 whitespace-nowrap text-sm lg:text-base"
      >
         <span className="block">سوپرمارکت</span>

         <span className="block pipe mx-1 !my-auto bg-light-1/50 h-[1rem]" />

         <span className="block">تنوع بالا و پرتخفیف</span>
         <span className="block">
            <RiShoppingBasketFill className="text-2xl mx-1" />
         </span>
      </Link>
   );
};

export default SuperMarketBtn;
