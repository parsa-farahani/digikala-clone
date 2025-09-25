import ProductQuestionResponseForm from "@/components/forms/ProductQuestionResponseForm";
import Modal from "@/components/modal/Modal";
import React, { useState } from "react";
import { BsQuestionSquare } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from "react-icons/md";
import ResponseExcerpt from "./ResponseExcerpt";
import { useGetResponses } from "@/lib/react-query/api/comments";
import { FakeQuestion, FakeResponse } from "./ProductQuestions";


type QuestionExcerptProps = {
   question: CProductQuestion | FakeQuestion;
   className?: string;
};

const QuestionExcerpt = (
   {
      question,
      className,
   }: QuestionExcerptProps
) => {

   const [moreResponses, setMoreResponses] = useState(false);

   const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);

   const openMoreResponses = () => {
      setMoreResponses(true);
   }

   const openResponseModal = () => {
      setIsResponseModalOpen(true);
   }

   const closeResponseModal = () => {
      setIsResponseModalOpen(false);
   }

   
   const {
      data: responses,
   } = useGetResponses(('$id' in question) ? question?.$id : "");

   // determines using 'placeholder responses' or 'real responses'
   const currentResponsesSource = (responses && ('total' in responses) && responses?.total > 0) ? responses?.documents : (question?.questionResponses) ? question.questionResponses : null;
   
   const currentResponses = (moreResponses && currentResponsesSource) ? currentResponsesSource : (currentResponsesSource) ? [currentResponsesSource[0]] : null;

   // console.log('res: ', currentResponses)

   const isActualQuestion = question && 'body' in question;

   return (
      <article
         className={`border-b rounded-none w-full px-0 ${className}`}
      >
         
         <p className="text-text-2 line-clamp-5 leading-7 text-base flex gap-4 items-center py-4">
            <span className="text-secondary-500 text-xl" >
               <BsQuestionSquare />
            </span>
            {
               (isActualQuestion)
               ? question.body
               : question?.title ?? null
            }
         </p>

         {/* Responses  */}
         <div>
            {
               (!question?.questionResponses?.length || question?.questionResponses?.length <= 0)
               ? (
                  <div className="border-t py-6 pr-10" >

                     <button
                        className="text-sm text-secondary-500 flex gap-2 items-center cursor-pointer"
                        onClick={openResponseModal}
                     >
                        ثبت پاسخ
                        <MdKeyboardArrowLeft className="text-lg" />
                     </button>
                  </div>
               ): (
                  <div>
                     <div className="pb-6" >

                        {
                           currentResponses?.map((res: unknown, i: number) => (
                              <ResponseExcerpt
                                 key={i}
                                 response={res as FakeResponse}
                              />
                           ))
                        }

                        {
                           (question?.questionResponses?.length === 1)
                           ? (
                              <button
                                 className="text-sm text-secondary-500 flex gap-2 items-center cursor-pointer"
                                 onClick={openResponseModal}
                              >
                                 ثبت پاسخ جدید
                                 <MdKeyboardArrowLeft className="text-lg" />
                              </button>

                           ): (
                              <>
                                 <button
                                    className={`text-sm text-secondary-500 flex gap-2 items-center cursor-pointer ${moreResponses ? 'hidden' : ''}`}
                                    onClick={openMoreResponses}
                                 >
                                    مشاهده پاسخ های دیگر
                                    <MdKeyboardArrowDown className="text-lg" />
                                 </button>
                                 <button
                                    className={`text-sm text-secondary-500 flex gap-2 items-center cursor-pointer ${moreResponses ? 'block' : 'hidden'}`}
                                    onClick={openResponseModal}
                                 >
                                    ثبت پاسخ جدید
                                    <MdKeyboardArrowLeft className="text-lg" />
                                 </button>
                              </>
                           )
                        }
                     </div>
                  </div>
               )
            }
         </div>

         {/* Response Submission Modal  */}
         <Modal
            isOpen={isResponseModalOpen}
            onClose={() => closeResponseModal()}
            fullHeight
            className={`!z-[1000] transition-transform duration-300 ${isResponseModalOpen ? 'translate-y-0' : 'translate-y-full'}`}
         >
            <ProductQuestionResponseForm
               question={question}
               onClose={() => closeResponseModal()}
            />
         </Modal>
      </article>
   );
};

export default QuestionExcerpt;
