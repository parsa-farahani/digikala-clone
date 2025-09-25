import Button from '@/components/shared/Button'
import StarRating from '@/components/shared/StarRating'
import { Models } from 'appwrite'
import React from 'react'
import { BsInfoCircle } from 'react-icons/bs'

const CommentSubmission = (
   {
      productComments,
      openCommentModal,
   }: {
      productComments: Models.Document[] | null;
      openCommentModal: () => void;
   }
) => {


   const rating = productComments?.reduce((acc, comment) => {
      return acc + Math.floor(comment.rating / 2);
   }, 0) ?? 0;


   const finalRating = (productComments && productComments?.length > 0) ? parseFloat((rating / productComments.length).toFixed(1)) : 0;


  return (
    <div className='lg:sticky lg:top-[160px]' >
         <p
            className='flex items-center gap-2'
         >
            <span className='font-bold text-2xl lg:text-3xl lg:flex gap-1.5 items-center' >
               {
                  finalRating
               }
               <span className='hidden lg:block text-xs font-normal' >
                  از 5
               </span>
            </span>
            <span className='text-lg font-sans lg:hidden' >
               ⭐
            </span>
            <span className='text-xs text-text-3 lg:hidden' >
               (
                  بر اساس 200 خریدار
               )
            </span>
         </p>
         {/* Desktop  */}
         <div className='hidden lg:block space-y-4 text-sm'>
            <p className='flex items-center gap-2' >
               <span>
                  <StarRating rating={finalRating} outOf={5} size={20} />
               </span>
               <span className='text-xs text-text-3' >
                  از مجموع {productComments?.length ?? 0} امتیاز
               </span>
            </p>
            <p className='' >
               شما هم درباره این کالا دیدگاه ثبت کنید
            </p>
            <Button
               className='!bg-light-1 border border-primary-600 !text-primary-600 text-sm w-full'
               onClick={openCommentModal}
            >
               ثبت دیدگاه
            </Button>
            <p className=" text-text-3 flex items-start gap-2" >
               <span>
                  <BsInfoCircle className='font-sans translate-y-2' />
               </span>
               <span className='' >
                  با ثبت دیدگاه بر روی کالاهای خریداری شده ۵ امتیاز در دیجی‌کلاب دریافت کنید
               </span>
            </p>

         </div>
      </div>
  )
}

export default CommentSubmission