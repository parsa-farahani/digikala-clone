import { ArrowRight } from 'lucide-react';
import React from 'react'
import { ImSortAmountDesc } from 'react-icons/im';
import QuestionExcerpt from './QuestionExcerpt';
import { Models } from 'appwrite';
import { FakeQuestion } from './ProductQuestions';

const ProductAllQuestions = (
   {
      questions,
      onClose,
   }: {
      questions: Models.Document[] | FakeQuestion[];
      onClose: () => void;
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
            {questions.length} پرسش و پاسخ
         </p>

         <button
            className='ibtn mr-auto'
         >
            <ImSortAmountDesc className='text-xl text-text-2' />
         </button>
      </div>

      <div
         className='px-4'
      >
         {
            questions.map((question: Models.Document | FakeQuestion, i: number) => (
            <QuestionExcerpt
               key={i}
               question={question as CProductQuestion}
            />
         ))}
      </div>

   </div>
  )
}

export default ProductAllQuestions;