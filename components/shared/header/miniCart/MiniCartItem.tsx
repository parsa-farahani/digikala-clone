import React from "react";
import Typography from "../../Typography";
import Image from "next/image";
import CartItemQuantityControls from "../../CartItemQuantityControls";

const MiniCartItem = (
   {
      cartItem,
   }: {
      cartItem: CCartProduct
   }
) => {

   const {
      serverId: itemId,
      name,
      price,
      discountPerc,
      image,
   } = cartItem;


   const discountInRials = Math.floor(price * (discountPerc / 100))

   const finalPriceInToman = Math.floor((price - discountInRials) / 10).toLocaleString('US');
   

   return (
      <div className="flex gap-4">
         <div className="w-[30%] shrink-0 grow-0 flex flex-col justify-between items-center">
            <div className="w-full h-20">
               <Image
                  src={image ?? "/images/empty-cart.png"}
                  width={100}
                  height={100}
                  alt="product image"
                  className="size-full object-scale-down object-center"
               />
            </div>

            <div className="w-full" >
               <CartItemQuantityControls
                  cartItem={cartItem}
                  className="w-full"
               />
            </div>
         </div>

         <div className="space-y-4">
            <h3>
               <Typography variant="h3" className="lg:!text-lg" weight="bold">
                  {
                     name ?? "لپتاپ 16 اینچی ایسوس مدل TUF"
                  }
               </Typography>
            </h3>

            <div className="space-y-1 text-sm text-text-3">
               <p className="flex items-center">
                  <span className="inline-block size-4 ml-2 bg-light-4 rounded-full"></span>
                  <span>خاکستری</span>
               </p>
               <p className="flex items-center">
                  <span className="inline-block size-4 ml-2"></span>
                  <span>ارسال دیجی کامرس</span>
               </p>
               <p className="flex items-center">
                  <span className="inline-block size-4 ml-2"></span>
                  <span>ارسال فوری (تهران)</span>
               </p>
            </div>

            <div>
               <p className="flex items-center gap-3">
                  <Typography variant="h2" weight="bold">
                     {
                        finalPriceInToman ?? 400_000
                     }
                  </Typography>
                  <span className="toman">تومان</span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default MiniCartItem;
