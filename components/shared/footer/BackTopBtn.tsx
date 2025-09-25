'use client';

import Button from '../Button'
import { MdKeyboardArrowUp } from 'react-icons/md'

const BackTopBtn = () => {

   const backToTop = () => {
      window.scrollTo({
         behavior: 'smooth',
         top: 0,
      })
   }

  return (
    <Button
      onClick={backToTop}
         white
         className='text-sm text-text-2 lg:text-text-3 max-lg:bg-neutral-200 max-lg:rounded-full max-lg:border-0'
      >
         <span
            className='flex flex-row items-center gap-2'
         >
            <span className='lg:hidden'>
               رفتن به بالا
            </span>
            <span className='hidden lg:block'>
               بازگشت به بالا
            </span>
            <span>
               <MdKeyboardArrowUp className="text-xl" />
            </span>
         </span>
      </Button>
  )
}

export default BackTopBtn