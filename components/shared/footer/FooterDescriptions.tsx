"use client";

import React, { useState } from 'react';
import { footerDescriptions } from '@/data';
import { MdKeyboardArrowLeft } from 'react-icons/md';



const FooterDescriptions = () => {

   const [isOpen, setIsOpen] = useState(false);


   const toggleMore = () => {
      setIsOpen(io => !io);
   }


  return (
    <div
         className='text-text-3'
      >
         <div
            className={`relative overflow-y-clip ${isOpen ? 'h-auto' : 'h-[100px]'}`}
         >
            <h2
               className='text-text-2 text-sm mb-3'
            >
               دیجی کالا؛ بزرگترین فروشگاه اینترنتی ایران
            </h2>
            <p className='text-xs leading-6 mb-3' >
               دیجی کالا سال‌ها است که به انتخاب اول بسیاری از خریداران اینترنتی تبدیل شده است. دیجی کالا به عنوان بزرگ‌ترین و معتبرترین فروشگاه آنلاین ایران، شناخته‌شده‌ترین فروشگاه نیز محسوب می‌شود. این فروشگاه آنلاین نه‌تنها گسترده‌ترین تنوع کالا را در دسته‌بندی‌های مختلف ارائه می‌دهد، بلکه با خدمات بی‌نظیر، ارسال سریع، ضمانت اصل بودن کالا و پشتیبانی حرفه‌ای، استاندارد جدیدی در خرید اینترنتی ایران تعریف کرده است. این فروشگاه با سال‌ها تجربه و اعتماد مشتریان، کامل‌ترین و بهترین گزینه برای خرید آنلاین در ایران محسوب می‌شود.
            </p>

            {
               footerDescriptions.map(({ title, desc } ,i) => (
                  <React.Fragment
                     key={i}
                  >
                     <h3 className='text-text-3 text-base mb-2'>
                        {
                           title
                        }
                     </h3>
                     <p className='text-xs leading-6 mb-3'>
                        {
                           desc
                        }
                     </p>
                  </React.Fragment>
               ))
            }


            <div
               className={`absolute bottom-0 top-auto left-0 w-full h-[60px] ${(isOpen) ? 'hidden' : ''}`}
               style={{
                  backgroundImage: `linear-gradient(transparent, white)`
               }}
            />
         </div>

         <button
            onClick={toggleMore}
            className={`cursor-pointer lg:text-secondary-500 ${(isOpen) ? 'mt-6' : ''}`}
         >
            {
               (isOpen)
               ? (
                  <span className='flex items-center gap-2'>
                     <span>
                        بستن
                     </span>
                     <span>
                        <MdKeyboardArrowLeft className="text-xl" />
                     </span>
                  </span>
               ): (
                  <span className='flex items-center gap-2'>
                     <span>
                        مشاهده بیشتر
                     </span>
                     <span>
                        <MdKeyboardArrowLeft className="text-xl" />
                     </span>
                  </span>
               )
            }
         </button>
      </div>
  )
}

export default FooterDescriptions