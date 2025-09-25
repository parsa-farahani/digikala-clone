import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { PiStarFourBold } from "react-icons/pi";

const DeliveryServices = () => {
   return (
      <div className="relative border rounded-lg p-2 max-lg:flex max-lg:gap-2">
         <div className="lg:!hidden bg-neutral-200 p-2 rounded-full flex-center text-lg text-purple h-fit">
            <PiStarFourBold />
         </div>
         <div>
            <h3 className="text-text-2 lg:text-purple flex items-center gap-2">
               <span className="text-xl max-lg:hidden">
                  <PiStarFourBold />
               </span>
               <span>ارسال رایگان سفارش‌ها برای اعضای پلاس</span>
            </h3>
            <ul className="mx-2 text-xs  text-text-3 lg:border-r-3 lg:border-purple/10">
               <li className='relative py-1 lg:pr-4  before:content-[""] before:absolute before:right-[-4px] before:top-1/2 before:-translate-y-1/2 before:size-[5px] lg:before:bg-purple-600 before:rounded-full'>
                  ۴ ارسال رایگان عادی
               </li>
               <li className='relative py-1 lg:pr-4 before:content-[""] before:absolute before:right-[-4px] before:top-1/2 before:-translate-y-1/2 before:size-[5px] lg:before:bg-purple-600 before:rounded-full'>
                  ۲ ارسال سوپرمارکت
               </li>
               <li className='relative py-1 lg:pr-4 before:content-[""] before:absolute before:right-[-4px] before:top-1/2 before:-translate-y-1/2 before:size-[5px] lg:before:bg-purple-600 before:rounded-full'>
                  ۴ ارسال رایگان ۴۵ دقیقه‌ای
               </li>
               <li className='relative py-1 lg:pr-4 before:content-[""] before:absolute before:right-[-4px] before:top-1/2 before:-translate-y-1/2 before:size-[5px] lg:before:bg-purple-600 before:rounded-full'>
                  پشتیبانی اختصاصی
               </li>
            </ul>
            <Link
               href="#"
               className="text-sm lg:text-lg text-purple lg:text-secondary-500 flex items-center gap-1 mt-3 px-4 mb-4 max-lg:border max-lg:border-purple rounded-full max-lg:w-fit max-lg:py-1"
            >
               <span className="hidden lg:block">خرید اشتراک</span>
               <span className="lg:hidden">خرید اشتراک پلاس</span>
               <MdKeyboardArrowLeft />
            </Link>
         </div>

         <div className="hidden lg:block absolute bottom-0 left-0 w-[100px]">
            <Image
               src="/images/common/free-delivery.svg"
               width={80}
               height={80}
               alt=""
               className="size-full object-cover object-center"
            />
         </div>
      </div>
   );
};

export default DeliveryServices;
