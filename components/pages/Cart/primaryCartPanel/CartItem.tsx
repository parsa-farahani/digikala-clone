import CartItemQuantityControls from "@/components/shared/CartItemQuantityControls";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShop } from "react-icons/fa6";
import { LuShieldCheck } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { TbTruck } from "react-icons/tb";
import { VscSymbolRuler } from "react-icons/vsc";



const CartItem = ({ product }: { product: CCartProduct }) => {


   // const priceInToman = Math.floor((product.price ?? 0) / 10);

   const discountInRials = Math.floor(product.price * (product.discountPerc / 100));
   const discountInToman = Math.floor(discountInRials / 10).toLocaleString('US');

   const finalPriceInToman = Math.floor((product.price - discountInRials) / 10).toLocaleString('US');


   return (
      <article className="min-h-[200px] border-b py-4 px-6">
         <div className="flex gap-4 lg:gap-6" >

            <div className="w-[100px] shrink-0 grow-0 flex flex-col justify-between">
               {/* image link */}
               <Link href={`/products/${product.serverId}`}
                  className=""
               >
                  <Image
                     src={product.image}
                     width={200}
                     height={200}
                     alt={product.name}
                     className="block size-full object-cover"
                  />
               </Link>

               {/* extra content  */}
               <div className="">
                  <p className="text-base text-center font-bold text-primary-600 font-heydari" >فروش ویژه</p>
                  {/* other things...  */}
               </div>

               {/* decrease/increase buttons  */}
               <div>
                  <CartItemQuantityControls
                     cartItem={product}
                  />
               </div>
            </div>

            <div className="grow-1 flex flex-col justify-between gap-2">
               {/* title  */}
               <p className="line-clamp-2 text-sm lg:text-base text-text-1">
                  {product.name}
               </p>

               {/* tips  */}
               <div className="text-text-3 text-xs lg:text-sm flex flex-col [&>*]:leading-7">
                  <p aria-label="سایز محصول" className="flex items-center gap-2">
                     <VscSymbolRuler className="text-lg" />
                     <span className="font-sans">XL</span>
                  </p>
                  <p className="flex items-center gap-2">
                     <LuShieldCheck className="text-lg" />
                     <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
                  </p>
                  <p aria-label="فروشنده" className="flex items-center gap-2">
                     <FaShop className="text-lg" />
                     <span>نام فروشنده</span>
                  </p>
                  <p className="flex items-center gap-2">
                     <TbTruck className="text-lg text-primary-500 rotate-y-180 font-bold" />
                     <span>ارسال دیجی‌کالا</span>
                  </p>
               </div>

               {/* price / discount */}
               <div className="h-[60px] flex flex-col gap-2 lg:mt-4" >
                  {
                     (product?.discountPerc > 0)
                     ? (
                        <p className="text-primary-500 flex items-center gap-1 text-xs" >
                           <span>
                              {
                                 discountInToman
                              }
                           </span>
                           <span className="toman text-primary-500" >
                              تومان
                           </span>
                           <span>
                              تخفیف
                           </span>
                        </p>
                     ): null
                  }
                  <p className="flex items-center gap-1" >
                     <span className="text-base font-bold lg:text-xl" >
                        {
                           finalPriceInToman
                        }
                     </span>
                     <span className="toman text-text-1" >
                        تومان
                     </span>
                  </p>
               </div>

            </div>
         </div>

         {/* transfer to 'next shopping cart (secondary cart)'  */}
         <div className="w-full flex justify-end items-center">
            <button className="text-secondary-500 flex gap-1 items-center text-sm">
               <span>انتقال به خرید بعدی</span>
               <MdKeyboardArrowLeft className="text-lg" />
            </button>
         </div>
         
      </article>
   );
};

export default CartItem;
