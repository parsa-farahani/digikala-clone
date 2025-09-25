import React from "react";

const CartTotals = (
   {
      cartItems,
      totalAmount,
      totalDiscounts,
   }: {
      cartItems: CCartProduct[];
      totalAmount: number;
      totalDiscounts: number;
   }
) => {


   const totalAmountInTomans = Math.floor(totalAmount / 10).toLocaleString('US') ?? 0;
   const totalDiscountsInTomans = Math.floor(totalDiscounts / 10).toLocaleString('US') ?? 0;

   const finalAmountInTomans = Math.floor((totalAmount - totalDiscounts) / 10).toLocaleString('US') ?? 0;

   const totalDiscountPerc = (totalDiscounts && totalAmount) ? Math.floor((totalDiscounts / totalAmount) * 100) : 0;

   return (
      <div className="text-sm lg:space-y-3">
         <p className="flex items-center justify-between text-text-3">
            <span>قیمت کالاها ({ cartItems.length })</span>

            <span>
               {
                  totalAmountInTomans
               }
               <span className="toman">تومان</span>
            </span>
         </p>
         <p className="flex items-center justify-between text-text-1">
            <span>جمع سبد خرید</span>

            <span>
               {
                  finalAmountInTomans
               }
               <span className="toman">تومان</span>
            </span>
         </p>
         <p className="flex items-center justify-between text-green-700">
            <span>سود شما از خرید</span>

            <span>
               ({totalDiscountPerc}%) { totalDiscountsInTomans }
               <span className="toman text-green-700">تومان</span>
            </span>
         </p>
      </div>
   );
};

export default CartTotals;
