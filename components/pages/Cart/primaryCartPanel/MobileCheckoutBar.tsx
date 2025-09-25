import Button from '@/components/shared/Button'
import React from 'react'

const MobileCheckoutBar = (
  {
    totalAmount,
    totalDiscounts,
  }: {
    totalAmount: number;
    totalDiscounts: number;
  }
) => {

  const finalAmountInTomans = Math.floor((totalAmount - totalDiscounts) / 10).toLocaleString('US') ?? 0;


  return (
    <div className={`fixed lg:hidden z-[999] bottom-[55px] left-0 right-0 w-full bg-light-1 flex py-2 px-4 ${totalAmount === 0 ? '!hidden' : ''}`} >
      <div className='flex-1' >
         <Button className='text-sm w-full whitespace-nowrap py-3' >
            تایید و تکمیل سفارش
         </Button>
      </div>

      <div className='flex-1 flex flex-col items-end' >
        <p className='text-xs text-text-3' >
          جمع سبد خرید
        </p>
        <p className='space-x-1' >
          <span className='text-sm text-text-1' >
            {
              finalAmountInTomans
            }
          </span>
          <span className='toman' >
            تومان
          </span>
        </p>
      </div>
    </div>
  )
}

export default MobileCheckoutBar