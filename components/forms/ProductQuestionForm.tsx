import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../shared/Button'
import Divider from '../shared/Divider'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Heading from '../shared/Heading'
import { IoClose } from 'react-icons/io5'
import { useAppSelector } from '@/redux/hooks'
import { selectIsAuth, selectUser } from '@/redux/slices/auth/authSlice'
import { useOnlineStatus } from '@/hooks/useOnlineStatus'
import { usePostQuestion } from '@/lib/react-query/api/comments'
import toast from 'react-hot-toast'
import { Models } from 'appwrite'
import LoaderDot from '../shared/LoaderDot'

const ProductQuestionForm = (
   {
      product,
      onClose,
   }: {
      product: Models.Document;
      onClose: () => void,
   }
) => {

   const [question, setQuestion] = useState("");


   const isAuth = useAppSelector(selectIsAuth);
   const user = useAppSelector(selectUser);

   const isOnline = useOnlineStatus();

   const {
      mutateAsync: postQuestionToServer,
   isPending: isPendingPostQuestion,
   } = usePostQuestion(product?.$id);

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
      
      try {

         await postQuestionToServer(
            {
               user: user.id! as unknown as Models.Document,
               product: product.$id,
               body: question,
            }
         )

         onClose();

         setQuestion("");
         
      } catch (error) {
         console.log('Error posting question: ', error);

         toast(
            (t) => (
               <span>
                  خطا در ثبت پرسش.
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

   const disableButton = !question || isPendingPostQuestion;

  return (
   
     <section
         className='max-lg:h-full max-lg:flex flex-col bg-light-1 lg:rounded-xl lg:w-[460px]'
      >
         <div
            className='flex items-center justify-between px-4 py-2 border-b-[4px] border-border-1'
         >
            <Heading
               element='h3'
               variant='h3'
            >
               پرسش خود را درباره این کالا ثبت کنید
            </Heading>
            <button
               className='ibtn text-2xl'
               onClick={onClose}
            >
               <IoClose />
            </button>
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
               <div
                  className='relative border rounded-lg flex flex-col'
               >
                  <textarea
                     id="question"
                     name='question'
                     value={question}
                     onChange={(e) => setQuestion(e.currentTarget.value)}
                     className='w-full min-h-[100px] grow-1 p-4 resize-none outline-none'
                  ></textarea>

                 <span
                  className='absolute left-0 top-full mt-2 text-xs text-text-3'
                 >
                  100/0
                 </span>
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
                     (isPendingPostQuestion)
                     ? (
                        <LoaderDot className='!p-0' />
                     ): (
                        "ثبت پرسش"
                     )
                  }
               </Button>

               <p className='text-sm text-text-2 text-center mt-4' >
                  ثبت پرسش به معنی موافقت با
                  {" "}
                  <Link
                     href='#'
                     className='text-secondary-500'
                  >
                     قوانین انتشار دیجی‌کالا
                  </Link>
                  {" "}
                  است.
               </p>
            </div>
         </form>
      </section>
  )
}

export default ProductQuestionForm