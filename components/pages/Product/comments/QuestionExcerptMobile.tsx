import Modal from '@/components/modal/Modal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import ResponseExcerptMobile from './ResponseExcerptMobile';
import { FakeQuestion, FakeResponse } from './ProductQuestions';

type QuestionExcerptMobileProps = {
   question: CProductQuestion | FakeQuestion;
   className: string;
}

const QuestionExcerptMobile = (
   {
      question,
      className,
   }: QuestionExcerptMobileProps
) => {

   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => {
      setIsModalOpen(true);
      disableBodyScroll(document.documentElement);
   }
   
   const closeModal = () => {
      setIsModalOpen(false);
      enableBodyScroll(document.documentElement);
   }

   const isActualQuestion = question && 'body' in question;

  return (
     <article
      className={` border rounded-md  w-[280px] px-3 py-4 h-[200px] text-sm flex flex-col justify-between ${className}`}
      onClick={() => openModal()}
     >
             
         <p className='grow-1 line-clamp-2' >
            {
               (isActualQuestion)
               ? question.body
               : question?.title ?? null
            }
         </p>

         <div 
            className='h-[120px] shrink-0 grow-0'
         >
            {
               question?.questionResponses?.length > 0
               ? (
                  question?.questionResponses?.slice(0, 1).map((response: unknown, i: number) => (
                     <div
                        key={i}
                        className='h-full relative'
                     >
                        <ResponseExcerptMobile response={response as FakeResponse} />

                        {
                           (question?.questionResponses?.length > 1)
                           ? (
                              <div
                                 className='absolute z-0 top-0 left-1/2 -translate-x-1/2 w-[97%] h-full translate-y-[6px] bg-neutral-100 border rounded-lg'
                              />
                           ): null
                        }
                     </div>
                  ))
               ): (
                  null
                  // <div className='h-full flex items-end' >
                  //    <Button
                  //       className='w-full !bg-light-1 border border-primary-600 text-primary-600 text-sm'
                  //    >
                  //       ثبت پاسخ
                  //    </Button>
                  // </div>
               )
            }            
         </div>

         {/* Question Modal(full view) - Mobile */}
         <Modal
            isOpen={isModalOpen}
            onClose={() => closeModal()}
            className={`rounded-b-none transition-transform duration-400 !max-h-[80vh] overflow-y-auto hidden-scroll ${isModalOpen ? 'translate-y-0' : 'translate-y-full'}`}
         >
            <div
               className="bg-light-1 rounded-t-xl rounded-b-none flex flex-col"
            >
               <div className="py-4 px-4 w-full flex items-center justify-between sticky top-[0px] bg-light-1 border-b" >
                  <div>
                     جزئیات پرسش
                  </div>
                  <button
                     className="ibtn text-2xl"
                     onClick={() => closeModal()}
                  >
                     <IoClose />
                  </button>
               </div>
               <div className="p-4 text-sm" >
                  <div className="mb-4" >

                     <div className='flex items-center gap-2' >
                        <p>
                           {
                              ('user' in question) ? question?.user?.email : "کاربر ناشناس"
                           }
                        </p>
                        <time className='text-xs text-text-3' >
                           14 اردیبهشت 1404
                        </time>
                     </div>

                     <p className="text-text-2 text-sm leading-7">
                        {
                           ('body' in question) ? question?.body : ('title' in question) ? question?.title : null
                        }
                     </p>

                  </div>

                  <div
                     className='flex flex-col gap-4'
                  >
                     {
                        question?.questionResponses?.map((response: unknown, i) => (
                           <div
                              key={i}
                              className='h-full relative'
                           >
                              <ResponseExcerptMobile response={response as CQuestionResponse} />
                           </div>
                        ))

                     }
                  </div>
               </div>
            </div>
         </Modal>
      </article>
  )
}

export default QuestionExcerptMobile