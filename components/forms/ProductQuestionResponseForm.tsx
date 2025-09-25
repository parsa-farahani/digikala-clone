import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../shared/Button'
import Divider from '../shared/Divider'
import Heading from '../shared/Heading'
import { IoClose } from 'react-icons/io5'
import { useAppSelector } from '@/redux/hooks'
import { selectIsAuth, selectUser } from '@/redux/slices/auth/authSlice'
import { useOnlineStatus } from '@/hooks/useOnlineStatus'
import { usePostResponse } from '@/lib/react-query/api/comments'
import toast from 'react-hot-toast'
import { Models } from 'appwrite'
import LoaderDot from '../shared/LoaderDot'
import { FakeQuestion } from '../pages/Product/comments/ProductQuestions'

const ProductQuestionResponseForm = (
   {
      question,
      onClose,
   }: {
      question: CProductQuestion | FakeQuestion;
      onClose: () => void,
   }
) => {

   const [response, setResponse] = useState("");

   const isAuth = useAppSelector(selectIsAuth);
   const user = useAppSelector(selectUser);

   const isOnline = useOnlineStatus();

   const {
      mutateAsync: postResponseToServer,
      isPending: isPendingPostResponse,
   } = usePostResponse(('$id' in question) ? question?.$id : "");


   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(!isOnline || !user || !('$id' in question) || ('$id' in question && !question.$id)) return;
      
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

         await postResponseToServer(
            {
               user: user.id! as unknown as Models.Document,
               question: question.$id,
               body: response,
               usernameSnapshot: user?.username ?? user?.email ?? "کاربر ناشناس",
            }
         )

         onClose();

         setResponse("");
         
      } catch (error) {
         console.log('Error posting response: ', error);

         toast(
            (t) => (
               <span>
                  خطا در ثبت پاسخ.
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

   const disableButton = !response || isPendingPostResponse;

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
               به این پرسش پاسخ دهید
            </Heading>
            <button
               className='ibtn text-2xl'
               onClick={onClose}
            >
               <IoClose />
            </button>
         </div>

         <p className='py-6 px-4' >
            {
               question.title
            }
         </p>

         
         <form
            onSubmit={handleSubmit}
            className='max-lg:grow-1 flex flex-col'
         >

            <div
               className='flex flex-col pb-8 px-4'
            >
               <label htmlFor="response"
                  className='text-base text-text-3 mb-4 pr-2'
               >
                  پاسخ
               </label>
               <div
                  className='relative border max-lg:border-b-2 rounded-lg flex flex-col'
               >
                  <textarea
                     id="response"
                     name='response'
                     value={response}
                     onChange={(e) => setResponse(e.currentTarget.value)}
                     className='w-full min-h-[100px] grow-1 p-4 resize-none outline-none max-lg:bg-neutral-100 max-lg:rounded-[inherit]'
                  ></textarea>

                 <span
                  className='absolute left-0 top-full mt-2 text-xs text-text-3'
                 >
                  500/0
                 </span>
               </div>
            </div>

            <Divider className='mt-auto' />

            <div className='p-4 flex flex-col lg:flex-row gap-4' >
               <Button
                  type='submit'
                  className='w-full lg:w-[280px]'
                  disabled={disableButton}
               >
                  {
                     (isPendingPostResponse)
                     ? (
                        <LoaderDot className='!p-0' />
                     ): (
                        "ثبت پاسخ"
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
                  ااست.
               </p>
            </div>
         </form>
      </section>
  )
}

export default ProductQuestionResponseForm