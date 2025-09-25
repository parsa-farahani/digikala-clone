'use client';
import Heading from '@/components/shared/Heading';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import { BiCheck } from 'react-icons/bi';
import { ImSortAmountDesc } from 'react-icons/im';
import { IoClose } from 'react-icons/io5';

const sortType = [
   {
      title: 'مرتبط‌ترین',
      query: null,
   },
   {
      title: 'پربازدیدترین',
      query: '1',
   },
   {
      title: 'جدیدترین',
      query: '2',
   },
   {
      title: 'پرفروش‌ترین',
      query: '3',
   },
   {
      title: 'ارزان‌ترین',
      query: '4',
   },
   {
      title: 'گران‌ترین',
      query: '5',
   },
   {
      title: 'سریع‌ترین ارسال',
      query: '6',
   },
   {
      title: 'پیشنهاد خریداران',
      query: '7',
   },
   {
      title: 'منتخب',
      query: '8',
   },
]

const FilterMostRelated = (
   {
      onClose
   }: {
      onClose?: () => void;
   }
) => {

   const router = useRouter();
   const searchParams = useSearchParams();
   // const q = searchParams.get('q');
   const sort = searchParams.get('sort');

   const handleSelect = (sortQuery?: string | null) => {

      const sParams = new URLSearchParams(searchParams.toString());

      if (sortQuery) {
         sParams.set('sort', sortQuery)
      } else {
         sParams.delete('sort')
      }

      router.push(`/search?${sParams.toString()}`);

      if (onClose) onClose();
   }

  return (
   <div
      className='w-full max-w-full overflow-x-auto'
   >

      <div className='px-4 bg-light-1 lg:flex lg:gap-4 lg:w-fit' >
         <div className='py-2 flex items-center lg:items-start justify-between sticky top-0 bg-light-1' >
            <Heading
               element='h2'
               variant='h3'
            >
               <span className='lg:hidden' >
                  مرتب سازی براساس
               </span>
               <span className='hidden text-base lg:flex gap-2 items-center text-text-2 whitespace-nowrap' >
                  <ImSortAmountDesc/>
                  مرتب سازی:
               </span>
            </Heading>
            <button
               className='ibtn text-2xl text-text-2 lg:hidden pl-0'
               onClick={() => onClose ? onClose() : null}
            >
               <IoClose />
            </button>
         </div>
         <ul
            role='radiogroup'
            className='flex flex-col lg:flex-row lg:gap-x-4 lg:items-center text-text-2 lg:flex-wrap'
         >
            {
               sortType.map(({ title, query: sortquery }) => (
                  <li
                     key={sortquery}
                  >
                     <button
                        role='radio'
                        aria-checked={sort === sortquery}
                        onClick={() => {
                           handleSelect(sortquery);
                        }}
                        className={`w-full py-3 border-b lg:border-b-0 flex items-center justify-between lg:text-sm cursor-pointer whitespace-nowrap ${sort === sortquery ? 'lg:text-primary-500' : 'lg:text-text-3'}`}
                     >
                        <span>
                           {
                              title
                           }
                        </span>
                        {
                           (sort === sortquery)
                           ? (
                              <span
                                 className='lg:hidden text-2xl h-full'
                              >
                                 <BiCheck />
                              </span>
                           ): null
                        }
                     </button>
                  </li>
               ))
            }
         </ul>
      </div>
   </div>
  )
}

export default FilterMostRelated