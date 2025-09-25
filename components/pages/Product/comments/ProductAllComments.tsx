import { ArrowRight } from 'lucide-react';
import React from 'react'
import { ImSortAmountDesc } from 'react-icons/im';
import CommentExcerpt from './CommentExcerpt';
import StarRating from '@/components/shared/StarRating';
import Image from 'next/image';
import Heading from '@/components/shared/Heading';
import { Models } from 'appwrite';

const ProductAllComments = (
   {
      productComments,
      onClose,
      userImages,
   }: {
      productComments: Models.Document[] | null; 
      onClose: () => void;
      userImages: string[];
   }
) => {

  return (
    <div
      className='h-full max-h-full overflow-y-auto hidden-scroll relative z-3 bg-light-1'
    >
      <div
         className='w-full py-4 flex items-center bg-light-1 sticky top-0 z-999'
      >
         <button
            onClick={onClose}
            className='ibtn'
         >
            <ArrowRight className='text-text-2' />
         </button>
         <p className='text-xl' >
            200 دیدگاه
         </p>

         <button
            className='ibtn mr-auto'
         >
            <ImSortAmountDesc className='text-xl text-text-2' />
         </button>
      </div>

      <div>
         <div className='px-4 space-y-3 border-b-4' >
            <p>
               <span className='font-bold text-3xl gap-1.5 items-center' >
                  3.8
                  {" "}
                  <span className='text-lg font-normal' >
                     از 5
                  </span>
               </span>
            </p>
            <p className='flex items-center gap-2' >
               <span>
                  <StarRating rating={3.8} outOf={5} size={20} />
               </span>
               <span className='text-xs text-text-3' >
                  از مجموع 600 امتیاز
               </span>
            </p>

            <div className="max-w-full overflow-x-auto hidden-scroll">
               <div className="flex gap-2 w-fit h-[80px]">
                  {userImages.map((image, i) => (
                     <div
                        key={i}
                        className="h-full shrink-0 grow-0 aspect-square border rounded-lg"
                     >
                        <Image
                           src={image}
                           width={80}
                           height={80}
                           alt=""
                           className="size-full block object-cover object-center rounded-[inherit]"
                        />
                     </div>
                  ))}
               </div>
            </div>

            <div>
               <Heading element="h4" variant="h3" className="mb-4">
                  فیلتر براساس موضوع
               </Heading>

               <div className="max-w-full overflow-x-auto hidden-scroll pb-6">
                  <div className="w-fit flex gap-3 text-text-2 whitespace-nowrap text-sm">
                     <button className="border rounded-full py-1 px-4">
                        قیمت و ارزش خرید
                     </button>
                     <button className="border rounded-full py-1 px-4">
                        کیفیت و کارایی
                     </button>
                     <button className="border rounded-full py-1 px-4">
                        شباهت یا مغایرت
                     </button>
                  </div>
               </div>
            </div>
         </div>

         <div>
            {productComments?.map((commentData: Models.Document, i: number) => (
               <CommentExcerpt commentData={commentData} key={i} />
            ))}
         </div>
      </div>

   </div>
  )
}

export default ProductAllComments;