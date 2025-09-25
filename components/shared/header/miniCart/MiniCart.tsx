"use client";

import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Button from "../../Button";
import Typography from "../../Typography";
import MiniCartItem from "./MiniCartItem";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { selectCartItems, selectCartTotalAmount, selectCartTotalDiscounts, selectCartTotalQty } from "@/redux/slices/cart/cartSlice";
import { useRouter } from "next/navigation";



const MiniCart = (
   {
      isMobile,
      className
   }: {
      isMobile?: boolean;
      className?: string;
   }
) => {

   const [isOpen, setIsOpen] = useState(false);

   const router = useRouter();

   const cartItems = useAppSelector(selectCartItems);
   const cartTotalQty = useAppSelector(selectCartTotalQty);
   const cartTotalAmount = useAppSelector(selectCartTotalAmount);
   const cartTotalDiscounts = useAppSelector(selectCartTotalDiscounts);


   const totalAmountInToman = Math.floor((cartTotalAmount - cartTotalDiscounts) / 10).toLocaleString('US');

   const openCart = () => {
      if (isOpen || cartTotalQty === 0) return;
      setIsOpen(true);
   };

   const closeCart = () => {
      if (!isOpen) return;
      setIsOpen(false);
   };

   return (
      <div className={`hidden lg:block relative z-100 ${className}`} onMouseLeave={closeCart}>
         <button
            className="inline-block relative ibtn p-2 rounded-lg hover:bg-red-400/10"
            onMouseEnter={() => {
               if (!isMobile) {
                  openCart();
               }
            }}
            onClick={() => {
               router.push('/cart')
            }}
         >
            <FiShoppingCart className="text-[24px] rotate-y-180" />
            <span className="absolute right-0 bottom-0 inline-block bg-primary-600 h-[17px] min-w-[17px] text-[13px] rounded-sm text-light-1">
               {cartItems?.length ?? 0}
            </span>
         </button>

         <div
            className={`absolute top-full left-0 w-[400px] flex flex-col  max-w-svw bg-light-1 rounded-lg shadow-lg shadow-gray-500 ${
               isOpen ? "block" : "hidden"
            }`}
         >
            <div
               className={`p-2 py-4 bg-light-1 text-sm text-text-3 rounded-t-[inherit] ${
                  cartTotalQty === 0 ? "hidden" : ""
               }`}
            >
               {cartTotalQty} کالا
            </div>

            <div className="min-h-[300px] grow-1 flex flex-col">
               {cartTotalQty === 0 ? (
                  <div className="grow-1 flex flex-col items-center justify-between gap-4">
                     <div className="grow-1 flex justify-center items-center">
                        <Image
                           src="/images/cart/empty-cart.svg"
                           width={100}
                           height={100}
                           alt=""
                           className=" w-[200px] object-center object-cover"
                        />
                     </div>
                     <p className="text-2xl text-text-1 mt-auto mb-4">
                        سبد خرید خالی است!
                     </p>
                  </div>
               ) : (
                  <div className="grow-1 max-h-[360px] overflow-y-auto custom-scrollbar p-4 flex flex-col gap-6">
                     {
                        cartItems.map((cartItem, i) => (
                           <MiniCartItem
                              key={i}
                              cartItem={cartItem}
                           />
                        ))
                     }
                  </div>
               )}
            </div>

            <div className="flex items-center justify-between bg-light-1 px-4 py-3 rounded-b-[inherit] border-t border-gray-200">
               <p
                  className={`flex flex-col gap-2 ${
                     cartTotalQty === 0 ? "hidden" : ""
                  }`}
               >
                  <span className="text-text-3 text-sm">مبلغ قابل پرداخت:</span>
                  <span className="flex items-center gap-3">
                     <span className="text-lg text-text-1">
                        <Typography variant="h2" weight="bold">
                           {totalAmountInToman}
                        </Typography>
                     </span>
                     <span className="toman">تومان</span>
                  </span>
               </p>

               <div className="mr-auto">
                  <Button href="/cart">ثبت سفارش</Button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MiniCart;
