import Button from '@/components/shared/Button'
import React from 'react'

const QuestionSubmission = (
   {
      openQuestionModal,
   }: {
      openQuestionModal: () => void;
   }
) => {




  return (
    <div className='lg:sticky lg:top-[160px]' >

         <div className='hidden lg:block space-y-4 text-sm'>

            <p className='' >
               شما هم درباره این کالا پرسش ثبت کنید
            </p>
            <Button
               className='!bg-light-1 border border-primary-600 !text-primary-600 text-sm w-full'
               onClick={openQuestionModal}
            >
               ثبت پرسش
            </Button>
         </div>

        
      </div>
  )
}

export default QuestionSubmission