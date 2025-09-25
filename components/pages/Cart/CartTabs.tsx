'use client';

import React, { useState } from 'react'
import PrimaryCartPanel from './tabs/PrimaryCartPanel';
import SecondaryCartPanel from './tabs/SecondaryCartPanel';
import { useAppSelector } from '@/redux/hooks';
import { selectCartItems } from '@/redux/slices/cart/cartSlice';



const CartTabs = () => {

  const [currentCart, setCurrentCart] = useState<'primary' | 'secondary'>('primary');

  const cartItems = useAppSelector(selectCartItems);
  


  return (
    <div>
      <div
          role="tablist"
          aria-label='انتخاب سبد خرید'
          aria-orientation='horizontal'
          className='flex lg:text-lg border-b bg-light-1'
      >
          <button
            role="tab"
            tabIndex={0}
            className={`flex-1 lg:flex-none cursor-pointer px-3 py-3 lg:py-3 text-sm lg:text-base ${currentCart === 'primary' ? 'text-primary-500 border-b-[3px] lg:border-b-[4px] border-primary-500 rounded-b-[3px] lg:rounded-b-[4px]' : 'text-text-3'}`}
            onClick={() => setCurrentCart('primary')}
          >
            <span className='flex items-center gap-1 justify-center' >
                <span>
                  سبد خرید
                </span>
                {
                  cartItems?.length > 0
                  ? (
                    <span className={`inline-flex items-center justify-center size-[1rem] lg:size-[1.5rem] text-light-1  rounded-xs lg:rounded-sm ${currentCart === 'primary' ? 'bg-primary-500' : 'bg-text-3'}`} >
                      {
                        cartItems.length
                      }
                    </span>
                  ): null
                }
            </span>  
          </button>
          <button
            role="tab"
            tabIndex={0}
            className={`flex-1 lg:flex-none cursor-pointer px-3 py-3 lg:py-3 text-sm lg:text-base ${currentCart === 'secondary' ? 'text-primary-500 border-b-[3px] lg:border-b-[4px] border-primary-500 rounded-b-[3px] lg:rounded-b-[4px]' : 'text-text-3'}`}
            onClick={() => setCurrentCart('secondary')}
          >
            <span className='flex items-center gap-1 justify-center' >
                <span>
                  خرید بعدی
                </span>
            </span>  
          </button>
      </div>

      <div
        className='bg-light-1 relative'
      >
        <div
          className={`${currentCart !== 'primary' ? 'hidden' : ''}`}
        >
          <PrimaryCartPanel />
        </div>

        <div
          className={`${currentCart !== 'secondary' ? 'hidden' : ''}`}
        >
          <SecondaryCartPanel />
        </div>
      </div>
    </div>
  )
}

export default CartTabs