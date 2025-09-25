import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { PiStarFourBold } from 'react-icons/pi'

const ExtraStuff = () => {
  return (
    <section className='flex flex-col gap-4' >

      {/* Plus sub  */}
      <article
         className='p-3 flex bg-purple/5 border border-purple/50 rounded-md'
      >
         <div className='grow-1' >
            <div className='flex gap-2 items-center mb-2' >
               <PiStarFourBold className='text-purple text-xl' />
               <h2 className='text-sm' >
                  هر ماه ۱۰ ارسال رایگان با ‌پلاس!  
               </h2>
            </div>
            <p className='text-text-3 text-xs' >
               ۴ ارسال دیجی‌کالا | ۲ ارسال سوپرمارکت | ۴ ارسال ۴۵‌دقیقه‌ای
            </p>
         </div>
         <div className='basis-auto shrink-0 grow-0' >
            <Link href='#' className='text-purple text-xs flex items-center gap-1' >
               افزودن
               <MdKeyboardArrowLeft />
            </Link>
         </div>
      </article>

      {/* Charity  */}
      <article
         className='p-3 flex bg-green-500/5 border border-green-500/50 rounded-md'
      >
         <div className='grow-1' >
            <div className='flex gap-2 items-center mb-2' >
               <Image
                  src="/images/cart/charity.svg"
                  width={20}
                  height={20}
                  alt=''
                  className=''
               />
               <h2 className='text-sm' >
                  هر ماه ۱۰ ارسال رایگان با ‌پلاس!  
               </h2>
            </div>
            <p className='text-text-3 text-xs' >
               ۴ ارسال دیجی‌کالا | ۲ ارسال سوپرمارکت | ۴ ارسال ۴۵‌دقیقه‌ای
            </p>
         </div>
         <div className='basis-auto shrink-0 grow-0' >
            <Link href='#' className='text-green-400 text-xs flex items-center gap-1' >
               مشاهده
               <MdKeyboardArrowLeft />
            </Link>
         </div>
      </article>
    </section>
  )
}

export default ExtraStuff