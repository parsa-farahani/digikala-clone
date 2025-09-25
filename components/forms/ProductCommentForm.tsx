'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../shared/Button'
import Divider from '../shared/Divider'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'
import Heading from '../shared/Heading'
import { useAppSelector } from '@/redux/hooks';
import { selectIsAuth, selectUser } from '@/redux/slices/auth/authSlice';
import toast from 'react-hot-toast';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { usePostComment } from '@/lib/react-query/api/comments';
import { Models } from 'appwrite';
import LoaderDot from '../shared/LoaderDot';


const ProductCommentForm = (
   {
      product,
      onClose,
   }: {
      product: Models.Document;
      onClose: () => void;
   }
) => {

   const [rating, setRating] = useState(0);
   const [comment, setComment] = useState("");

   const isAuth = useAppSelector(selectIsAuth);
   const user = useAppSelector(selectUser);

   const isOnline = useOnlineStatus();

   const {
      mutateAsync: postCommentToServer,
      isPending: isPendingPostComment,
   } = usePostComment(product?.$id);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(!isOnline || !user) return;

      if (!isAuth) {
         toast(
            (t) => (
               <span>
                  لطفا به حساب کاربری خود وارد شوید.
                  <button
                     onClick={() => toast.dismiss(t.id)}
                     style={{
                        zIndex: '999999999',
                        cursor: 'pointer',
                        marginRight: '.75rem',
                        color: '#19bfd3',
                     }}
                  >
                     باشه
                  </button>
               </span>
            ),
         )

         return;
      }
      
      // comment submission logic
      try {

         await postCommentToServer(
            {
               user: user.id! as unknown as Models.Document,
               product: product.$id,
               usernameSnapshot: user.name ?? user.username ?? user.email!,
               rating: rating * 2,
               description: comment,
            }
         )
         
         onClose();

         setRating(0)
         setComment("")
      } catch (error) {
         console.log('Error posting comment: ', error);

         toast(
            (t) => (
               <span>
                  خطا در ثبت دیدگاه.
                  <button
                     onClick={() => toast.dismiss(t.id)}
                     style={{
                        zIndex: '999999999',
                        cursor: 'pointer',
                        marginRight: '.75rem',
                        color: '#19bfd3',
                     }}
                  >
                     باشه
                  </button>
               </span>
            ),
         )
      }

   }

   const disableButton = !comment || rating === 0 || isPendingPostComment;

  return (
     <section
         className='max-lg:h-full max-lg:flex flex-col bg-light-1 lg:rounded-xl lg:w-[460px]'
      >
         <div
            className='flex items-center justify-start px-4 py-2 border-b-[4px] border-border-1'
         >
            <button
               className='ibtn text-2xl'
               onClick={onClose}
            >
               <ArrowRight />
            </button>
            <Heading
               element='h3'
               variant='h3'
            >
               {
                  (isPendingPostComment)
                  ? (
                     <LoaderDot className='!p-0' />
                  ): (
                     <span>
                        ثبت دیدگاه
                     </span>
                  )
               }
            </Heading>
         </div>

         <div
            className='flex items-start justify-start gap-2 p-4'
         >
            <div
               className='size-[60px]'
            >
               <Image
                  src="/images/products/shoes/shoe-1/img-1.jpg"
                  width={80}
                  height={80}
                  alt="image"
                  className="block size-full object-cover object-center"
               />
            </div>

            <p
               className='text-base'
            >
               کتانی پیاده‌روی مردانه سارزی مدل C.K_S.e.f
            </p>
         </div>

         <Divider />
         
         <form
            onSubmit={handleSubmit}
            className='max-lg:grow-1 flex flex-col'
         >


            <div
               className='flex flex-col py-8 px-4'
            >

               <div className='mb-4' >
                  <p className='block text-lg mb-2'>
                     امتیاز شما:
                     <span className='text-red-600' >
                        *
                     </span>
                  </p>
                  
                  <span className={`flex items-center`}>
                     {Array.from({ length: 5 }, (_, index) => {
                     // const starValue = index + 1;
                     // const fillPercentage = 100;

                     return (
                        <label
                           key={index}
                           className="relative block size-[24px] flex-center cursor-pointer"
                        >
                           <input
                              name="rating"
                              type="radio"
                              className='sr-only'
                              value={index + 1}
                              onChange={() => {
                                 setRating(index + 1)
                              }}
                           />
                           {/* Empty Star */}
                           <Star
                              className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-gray-300 hover:text-gray-400/70 fill-current"
                              strokeWidth={1.5}
                           />

                           {/* Filled Star */}
                           {
                              (index + 1 <= rating)
                              ? (
                                 <span
                                 className="absolute block top-1/2 left-0 right-0 -translate-y-1/2 overflow-hidden"
                                 style={{
                                    width: `100%`,
                                    height: "100%",
                                 }}
                                 >
                                    <Star
                                       className="text-yellow-400 fill-yellow-400"
                                       strokeWidth={1.5}
                                    />
                                 </span>
                              ): null
                           }
                        </label>
                     );
                  })}
               </span>
               </div>

               <label htmlFor="comment" className='text-lg mb-4'>
                  متن دیدگاه:
                  <span className='text-red-600' >
                     *
                  </span>
               </label>
               <div
                  className='border rounded-lg flex flex-col'
               >
                  <textarea
                     id="comment"
                     name='comment'
                     value={comment}
                     onChange={(e) => setComment(e.currentTarget.value)}
                     placeholder='نظر خود را به اشتراک بگذارید.'
                     className='w-full min-h-[140px] grow-1 p-4 resize-none outline-none'
                  ></textarea>

                  <div
                     className='border-t border-border-1 flex justify-end p-2'
                  >
                     <button className='flex items-center bg-neutral-100 rounded-full text-text-2 py-2 px-4 cursor-pointer text-sm' type="button" >
                        ارسال با نام شما
                        <MdKeyboardArrowDown />
                     </button>
                  </div>
               </div>
            </div>

            <Divider className='mt-auto' />

            <div className='p-4' >
               <Button
                  type='submit'
                  className='w-full h-[40px]'
                  disabled={disableButton}
               >
                  {
                     (isPendingPostComment)
                     ? (
                        <LoaderDot className='!p-0' />
                     ): (
                        "ثبت دیدگاه"
                     )
                  }
               </Button>

               <p className='text-sm text-text-2 text-center mt-4' >
                  ثبت دیدگاه به معنی موافقت با
                  {" "}
                  <Link
                     href='#'
                     className='text-secondary-500'
                  >
                     قوانین انتشار دیجی‌کالا
                  </Link>
                  {" "}
                  ااست.
               </p>
            </div>
         </form>
      </section>
  )
}

export default ProductCommentForm