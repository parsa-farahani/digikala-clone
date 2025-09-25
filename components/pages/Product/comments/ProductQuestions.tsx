'use client';

import Heading from "@/components/shared/Heading";
import React, { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from "react-icons/md";
import QuestionSubmission from "./QuestionSubmission";
import Modal from "@/components/modal/Modal";
import ProductQuestionForm from "@/components/forms/ProductQuestionForm";
import { ImSortAmountDesc } from "react-icons/im";
import { ArrowLeft } from "lucide-react";
import ActionRow from "@/components/shared/ActionRow";
import QuestionExcerpt from "./QuestionExcerpt";
import QuestionExcerptMobile from "./QuestionExcerptMobile";
import ProductAllQuestions from "./ProductAllQuestions";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Models } from "appwrite";
import { useGetQuestions } from "@/lib/react-query/api/comments";
import LoaderDot from "@/components/shared/LoaderDot";

export type FakeResponse = {
   title: string;
   username: string;
   reactions: {
      like: number;
      dislike: number;
   }
}

export type FakeQuestion = {
   username: string;
   title: string;
   questionResponses: FakeResponse[];
}

const questions = [
   {
      username: 'پارسا فراهانی',
      title: 'سوال1 درباره کالا ؟',
      questionResponses: []
   },
   {
      username: 'پارسا فراهانی',
      title: 'سوال2 درباره کالا ؟',
      questionResponses: [
         {
            title: 'پاسخ به کاربر.',
            username: 'نام کاربر',
            reactions: {
               like: 5,
               dislike: 1,
            }
         },
      ]
   },
   {
      username: 'پارسا فراهانی',
      title: 'سوال3 درباره کالا ؟',
      questionResponses: [
         {
            title: 'پاسخ به کاربر 1.',
            username: 'نام کاربر',
            reactions: {
               like: 0,
               dislike: 0,
            }
         },
         {
            title: '2 پاسخ به کاربر.',
            username: 'نام کاربر',
            reactions: {
               like: 0,
               dislike: 0,
            }
         },
      ]
   },
]


const ProductQuestions = (
   {
      product,
   }: {
      product: Models.Document
   }
) => {

   // modal for Question-submission
   const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);

   const [sortOrder, setSortOrder] = useState<"newest" | "responses">(
      "newest"
   );

   const [isOpenAllQuestions, setIsOpenAllQuestions] = useState(false);


   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      setSortOrder(e.currentTarget.value as "newest" | "responses");
   };

   const openQuestionModal = () => {
      setIsQuestionModalOpen(true);
      disableBodyScroll(document.documentElement);
   };
   
   const closeQuestionModal = () => {
      setIsQuestionModalOpen(false);
      enableBodyScroll(document.documentElement);
   };

   const openAllQuestions = () => {
      setIsOpenAllQuestions(true);
      disableBodyScroll(document.documentElement);
   };
   
   const closeAllQuestions = () => {
      setIsOpenAllQuestions(false);
      enableBodyScroll(document.documentElement);
   };


   const {
      data: productQuestions,
      isPending: isLoadingQuestions,
      isSuccess: isSuccessLoadingQuestions,
   } = useGetQuestions(product?.$id);

   
   return (
      <>
         <div
             className="flex items-center justify-between px-4 lg:px-0"
         >
            <Heading variant="h3" element="h2" className="lg:hidden">
               پرسش و پاسخ
            </Heading>
            <Heading
               variant="h3"
               element="h2"
               className="hidden lg:block pb-4 mb-6"
               style="underline"
            >
               پرسش ها
            </Heading>

            <button
               className="lg:hidden flex items-center"
               onClick={() => openAllQuestions()}
            >
               مشاهده 9 پرسش
               <MdKeyboardArrowLeft />
            </button>
         </div>
         <div className="flex flex-col lg:flex-row lg:gap-6">
            {/* Sticky Question-Submission  */}
            <div className="hidden lg:block mb-4 lg:shrink-0 lg:grow-0 lg:w-[280px] lg:h-auto lg:self-stretch px-4">
               <QuestionSubmission openQuestionModal={openQuestionModal} />
            </div>

            {/* Questions  */}
            <div className="lg:grow">
               {/* Question Items  */}
               <div className="flex flex-col">
                  <form className="hidden lg:block mb-2">
                     <div className="max-w-full overflow-x-auto hidden-scroll flex gap-4 items-center ">
                        <Heading
                           element="h4"
                           variant="base"
                           className="flex gap-1"
                        >
                           <ImSortAmountDesc className="text-xl" />
                           مرتب سازی:
                        </Heading>
                        <div className="flex gap-4 items-center justify-start">
                           <div>
                              <div>
                                 <input
                                    id="q-sorting-newest"
                                    type="radio"
                                    name="question-sorting"
                                    value="newest"
                                    className="peer sr-only"
                                    checked={sortOrder === "newest"}
                                    onChange={handleChange}
                                 />
                                 <label
                                    htmlFor="q-sorting-newest"
                                    className={`text-sm text-text-3 peer-checked:text-primary-500 peer-checked:font-bold cursor-pointer`}
                                 >
                                    جدید‌ترین
                                 </label>
                              </div>
                           </div>
                           <div>
                              <div>
                                 <input
                                    id="q-sorting-responses"
                                    type="radio"
                                    name="question-sorting"
                                    value="responses"
                                    className="peer sr-only"
                                    checked={sortOrder === "responses"}
                                    onChange={handleChange}
                                 />
                                 <label
                                    htmlFor="q-sorting-responses"
                                    className={`text-sm text-text-3 peer-checked:text-primary-500 peer-checked:font-bold cursor-pointer`}
                                 >
                                    بیشترین پاسخ
                                 </label>
                              </div>
                           </div>
                        </div>
                     </div>
                  </form>

                  {/* User Questions  */}
                  <div
                     id="questions"
                     className='lg:w-full max-w-full overflow-x-auto hidden-scroll'
                  >
                     <div
                        className='w-fit lg:w-full flex items-center gap-2 lg:flex-col px-4 py-6 lg:p-0'
                     >
                        {
                           (isLoadingQuestions)
                           ? (
                              <LoaderDot />   
                           ): (isSuccessLoadingQuestions && (!('error' in productQuestions)) && productQuestions?.documents?.length > 0)
                           ? (
                              productQuestions?.documents?.map((question: Models.Document, i:number) => (
                                 <QuestionExcerpt key={i} question={question as CProductQuestion} className="hidden lg:block" />
                              ))
                           ): (
                              questions.map((question, i:number) => (
                                 <QuestionExcerpt key={i} question={question} className="hidden lg:block" />
                              ))
                           )
                        }
                        {
                           (isLoadingQuestions)
                           ? (
                              <LoaderDot />   
                           ): (isSuccessLoadingQuestions && (!('error' in productQuestions)) && productQuestions?.documents?.length > 0)
                           ? (
                              productQuestions?.documents?.map((question: Models.Document, i: number) => (
                                 <QuestionExcerptMobile key={i} question={question as CProductQuestion} className="lg:hidden" />
                              ))
                           ): (
                              questions.map((question, i:number) => (
                                 <QuestionExcerptMobile key={i} question={question} className="lg:hidden" />
                              ))
                           )
                        }
                        {
                        }

                        <button
                           className='lg:hidden flex flex-col items-center justify-center gap-3 w-[140px]'
                           onClick={() => openAllQuestions()}
                        >
                           <span className="size-12 rounded-full border-2 border-text-2 flex-center">
                              <ArrowLeft className="text-text-2 size-[30px]" />
                           </span>
                           <span className='text-xs' >
                              مشاهده همه
                           </span>
                        </button>
                     </div>

                     <div
                        className='px-4 border-t py-6 hidden lg:block'
                     >
                        <button
                           className="text-sm text-secondary-500 flex items-center cursor-pointer"
                        >
                           120 پرسش دیگر
                           <MdKeyboardArrowDown />
                        </button>
                     </div>

                  </div>
                  <button
                     className='px-4 border-t pt-3 lg:hidden'
                     onClick={openQuestionModal}
                  >
                     <ActionRow
                        title='شما هم درباره این کالا بپرسید'
                        icon={<FaRegQuestionCircle />}
                        className='!items-start !text-sm'
                     />
                  </button>
               </div>
            </div>
            {/* Question Form Modal  */}
            <Modal
               isOpen={isQuestionModalOpen}
               onClose={closeQuestionModal}
               fullHeight
               className={`transition-transform duration-400 ${isQuestionModalOpen ? 'translate-y-0' : 'translate-y-full lg:translate-y-0'}`}
            >
               <ProductQuestionForm
                  product={product}
                  onClose={closeQuestionModal}
               />
            </Modal>

            {/* All Questions Modal - Mobile  */}
            {
               (productQuestions)
               ? (
                  <Modal
                     isOpen={isOpenAllQuestions}
                     onClose={closeAllQuestions}
                     fullHeight
                     className="!z-[999]"
                  >
                     <ProductAllQuestions
                        questions={(productQuestions && (!('error' in productQuestions))) ? productQuestions?.documents : questions}
                        onClose={closeAllQuestions}
                     />
                  </Modal>
               ): null
            }
         </div>
      </>
   );
};

export default ProductQuestions;
