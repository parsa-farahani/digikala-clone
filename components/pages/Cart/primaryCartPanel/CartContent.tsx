'use client';

import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LuClipboardList } from 'react-icons/lu'
import Link from 'next/link'
import Image from 'next/image'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { FaRegTrashCan } from 'react-icons/fa6'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import Button from '@/components/shared/Button'
import MobileCheckoutBar from './MobileCheckoutBar'
import ExtraStuff from './ExtraStuff'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { clearCart, restoreCart, selectCartItems, selectCartTotalAmount, selectCartTotalDiscounts, selectCartTotalQty } from '@/redux/slices/cart/cartSlice';
import { selectIsAuth, selectUser } from '@/redux/slices/auth/authSlice';
import Heading from '@/components/shared/Heading';
import { HiOutlineLogin } from 'react-icons/hi';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { useUpdateServerCart } from '@/lib/react-query/api/cart';
import toast from 'react-hot-toast';


const CartContent = () => {

   const dispatch = useAppDispatch();
   const isAuth = useAppSelector(selectIsAuth);
   const user = useAppSelector(selectUser);
   const cartTotalQty = useAppSelector(selectCartTotalQty);
   const cartTotalAmount = useAppSelector(selectCartTotalAmount);
   const totalDiscountsInRials = useAppSelector(selectCartTotalDiscounts);
   const cartItems = useAppSelector(selectCartItems);

   const isOnline = useOnlineStatus();

   // const currentItems = (cartItems?.length > 0) ? cartItems : discountsGridProducts;

   const {
      mutateAsync: updateServerCart,
      isPending: isPendingUpdateCart,
      isSuccess: isSuccessUpdateCart,
      isError: isErrorUpdateCart,
      error: updateCartError,
   } = useUpdateServerCart();

   const clearCartItems = async () => {

      if (cartItems.length === 0) return;

      const cartItemsBackup = [
         ...cartItems,
      ]

      dispatch(
         clearCart()
      );

      if (!isAuth) return;

      try {
        
         if (!isOnline) throw new Error;

            const newCartItems: CCartProduct[] = [];

         // appwrite api
         const updateCartRes = await updateServerCart( 
            { 
               userId: user.id!,
               cartItems: newCartItems,
            }
         );


         if (isErrorUpdateCart) throw new Error;
         
      } catch (error) {

         dispatch(
            restoreCart(
               cartItemsBackup
            )
         )
         
         console.log('Error Adding product: ', error);
         
         toast(
            (t) => (
               <span>
                  خطا در بروزرسانی سبد خرید
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

  return (
   <>
   
    <div className='w-full flex flex-col lg:flex-row lg:gap-4' >

          {/* Cart Items  */}
          <div className='lg:grow-1' >
            <div className='w-full flex justify-between items-center px-4 lg:px-0 mb-4' >

               {
                  (cartItems.length > 0)
                  ? (
                     <div className='flex items-center gap-4' >
                        <h3 className='text-lg' >
                           سبد خرید شما
                        </h3>
                        <p className='text-text-3 text-sm' >
                           {cartTotalQty ?? 0} مرسوله
                        </p>
                     </div>
                  ): null
               }

               {
                  (cartItems?.length > 0)
                  ? (
                     <div className='mr-auto' >
                           <Popover
                              
                           >
                              <PopoverTrigger asChild>
                                 <button
                                    className='ibtn text-text-3 text-2xl pl-0'
                                 >
                                    <BiDotsVerticalRounded />
                                 </button>
                              </PopoverTrigger>
                              <PopoverContent className="w-60 !px-0 !py-2 text-text-2"
                                 side='bottom'
                                 align='end'
                              >
                                 <button className='cursor-pointer w-full py-3 px-4 flex items-center gap-4 bg-light-1 hover:bg-light-2' >
                                    <LuClipboardList className='text-xl' />
                                    <span>
                                       انتقال همه به خرید بعدی
                                    </span>
                                 </button>
                                 <button className='cursor-pointer w-full py-3 px-4 flex items-center gap-4 bg-light-1 hover:bg-light-2'
                                    onClick={() => clearCartItems()}
                                 >
                                    <FaRegTrashCan className='text-xl' />
                                    <span>
                                       حذف همه
                                    </span>
                                 </button>
                              </PopoverContent>
                           </Popover>
                     </div>
                  ): null
               }
            </div>


            {/* Cart Items List  */}
            <div>
               {
                  (cartItems?.length > 0)
                  ? (
                     <ul>
                        {
                           cartItems.map((product, i) => (
                              <li
                                 key={i}
                              >
                                 <CartItem
                                    product={product}
                                 />
                              </li>
                           ))
                        }
                     </ul>
                  ): (
                     <div className='min-h-[300px] h-full flex-center flex-col gap-4' >
                        <div>
                           <Image
                              src="/images/cart/empty-cart.svg"
                              alt=""
                              width={400}
                              height={400}
                              className='h-[200px]'
                           />
                        </div>
                        <Heading
                           variant='h3'
                           className='text-text-2'
                        >
                           سبد خرید شما خالی است
                        </Heading>
                        <p className='text-text-3 text-sm' >
                           می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:
                        </p>
                     </div>
                  )
               }
            </div>


            {/* Pricing / Totals - Mobile  */}
            <div className='lg:hidden py-6 px-4' >
               <CartTotals
                  cartItems={cartItems}
                  totalAmount={cartTotalAmount}
                  totalDiscounts={totalDiscountsInRials}
               />
            </div>
          </div>

          {/* Pricing / Totals  */}
          <div className='lg:w-[280px] shrink-0 grow-0 hidden lg:block mt-4' >
            {
               (cartItems?.length > 0) 
               ? (
                  <div className='sticky top-[120px] w-full flex flex-col gap-4' >
                     <div className='border rounded-md p-4' >

                        <CartTotals
                           cartItems={cartItems}
                           totalAmount={cartTotalAmount}
                           totalDiscounts={totalDiscountsInRials}
                        />

                        <Button
                           className='w-full mt-4'
                           disabled={cartItems?.length === 0}
                        >
                           تایید و تکمیل سفارش
                        </Button>
                     </div>
                     
                     <p className='text-text-3 text-xs' >
                        هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند
                     </p>

                     <ExtraStuff />

                  </div>

               ): (!isAuth) ? (
                  <Link
                     href="/login?redirect=/cart"
                     className='flex flex-col gap-2 p-4 border border-border-1 rounded-md'
                  >
                     <span className='flex items-center' >
                        <span className='flex items-center gap-2' >
                           <span className='text-yellow-500 text-xl' >
                              <HiOutlineLogin />
                           </span>
                           <span>
                              ورود به حساب کاربری
                           </span>
                        </span>
                        <span className='block mr-auto' >
                           <MdKeyboardArrowLeft />
                        </span>
                     </span>
                     <span className='text-xs text-text-3' >
                        برای مشاهده محصولاتی که پیش‌تر به سبد خرید خود اضافه کرده‌اید وارد شوید.
                     </span>
                  </Link>
               ): null
            }
          </div>
        </div>

        {/* fixed bar on mobile - for checkout, totals, ..  */}
        <MobileCheckoutBar
            totalAmount={cartTotalAmount}
            totalDiscounts={totalDiscountsInRials}
        />
   </>
  )
}

export default CartContent