'use client';

import Button from "@/components/shared/Button";
import Divider from "@/components/shared/Divider";
import Heading from "@/components/shared/Heading";
import MobileDivider from "@/components/shared/MobileDivider";
import React, { useMemo } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaShop } from "react-icons/fa6";
import { GoDotFill, GoShieldCheck } from "react-icons/go";
import { LiaUserCircle } from "react-icons/lia";
import { LuPackageCheck } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { PiStarFourBold } from "react-icons/pi";
import ProductMiniInfoCarousel from "../ProductMiniInfoCarousel";
import DeliveryServices from "./DeliveryServices";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Models } from "appwrite";
import { addToCart, removeFromCart, selectCartItemById, selectCartItemProductQty, selectCartItems } from "@/redux/slices/cart/cartSlice";
import CartItemQuantityControls from "@/components/shared/CartItemQuantityControls";
import Link from "next/link";
import { useUpdateServerCart } from "@/lib/react-query/api/cart";
import { selectIsAuth, selectUser } from "@/redux/slices/auth/authSlice";
import toast from "react-hot-toast";
import LoaderDot from "@/components/shared/LoaderDot";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";


const IntroSeller = ({
   product,
   productMiniInfo,
   seller,
}: {
   product: Models.Document;
   productMiniInfo: ProductMiniInfo[];
   seller: string; // In future, all of information about the seller will be received through this prop
}) => {

   const isOnline = useOnlineStatus();

   const dispatch = useAppDispatch();
   const isAuth = useAppSelector(selectIsAuth);
   const user = useAppSelector(selectUser);
   const clientCartItems = useAppSelector(selectCartItems);
   const productCartItem = useAppSelector(state => selectCartItemById(state, product?.$id));
   const productCartItemQty = useAppSelector(state => selectCartItemProductQty(state, product?.$id));

   const showQtyControls = productCartItemQty >= 1;
   
   
   const priceInToman = Math.floor((product?.price ?? 0) / 10).toLocaleString('US');

   const discountInRials = Math.floor(product?.price * (product?.discountPerc / 100))

   const finalPriceInRials = Math.floor(product?.price - discountInRials);

   const finalPriceInToman = Math.floor((finalPriceInRials) / 10).toLocaleString('US');


   const isActualData = product && '$id' in product;

   const clientProduct = useAppSelector(state => selectCartItemById(state, product?.$id));

   const productData = useMemo(() => (
      {
         serverId: product?.$id,  // this ID may be replaced with server 'CartItem document' $id. but for now I put product $id as a placeholder
         productId: product?.$id,
         name: product?.name,
         price: product?.price,
         discountPerc: product?.discountPerc,
         quantity: clientProduct?.quantity ?? 1,
         image: product?.imageUrls[0],
         options: {  // placeholder data for now
            size: 'M',
            color: 'white',
         }
      }
   ), [product, clientProduct])


   const {
      mutateAsync: updateServerCart,
      isPending: isPendingUpdateCart,
      // isSuccess: isSuccessUpdateCart,
      isError: isErrorUpdateCart,
      // error: updateCartError,
   } = useUpdateServerCart();


   const addProductToCart = async () => {
      if (!product) return;

      
      
      dispatch(
         addToCart(
            productData
         )
      )

      // If the user is 'guest', we just keep the items in Redux-localStorage (Client)
      if (!isAuth) return;
      
      try {
         // Avoid sending request when user is 'offline'
         if (!isOnline) throw new Error;

         console.log('USER ID to update CART: ')

         // appwrite api
         const updateCartRes = await updateServerCart( { userId: user.id!, cartItems: [...clientCartItems, productData] } );

         console.log('cart-update: ', updateCartRes);

         if (isErrorUpdateCart) throw new Error;
         
      } catch (error) {

         dispatch(
            removeFromCart(product.$id)
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
      <section className="relative z-2 lg:w-[300px] bg-light-1 lg:bg-neutral-100 lg:h-fit lg:border lg:rounded-lg lg:px-4 py-4 lg:pb-3">
         <div className="">
            <Heading element="h2" variant="h3" className="max-lg:px-2">
               فروشنده
            </Heading>

            <div className="flex flex-col text-sm px-4 lg:px-0 lg:text-text-2">
               <p className="flex gap-3 lg:gap-0 items-center lg:items-start ">
                  <span className="block size-[40px] max-lg:bg-neutral-200 rounded-full p-2 lg:pr-0 text-text-2 flex-center">
                     <FaShop className="text-xl" />
                  </span>

                  <span className="grow-1 flex flex-col gap-2 max-lg:border-b py-3">
                     <span className="flex items-center gap-1 lg:text-lg">
                        <span>
                           {
                              seller
                           }
                        </span>
                        <MdKeyboardArrowLeft className="lg:hidden" />
                     </span>
                     <span className="flex gap-2 lg:gap-0.5 text-text-3">
                        <span className="rounded-full border lg:border-0 p-[2px] px-1 flex lg:flex-row-reverse items-center gap-2 lg:gap-0.5 whitespace-nowrap">
                           رضایت از کالا
                           <span className="max-lg:bg-lime-600 lg:text-lime-600 text-light-1 rounded-full px-[4px] py-[1px]">
                              ٪76.6
                           </span>
                        </span>
                        <span className="hidden lg:inline-block pipe my-[4px]" />
                        <span className="rounded-full border lg:border-0 p-[2px] px-1 flex items-center justify-between gap-2 lg:gap-1">
                           عملکرد
                           <span className="inline-block max-lg:bg-green-600 lg:text-green-600 text-light-1 rounded-full px-[7px] py-[1px]">
                              عالی
                           </span>
                        </span>
                     </span>
                  </span>
               </p>
               <div className="hidden lg:block">
                  <p className="flex items-center justify-between mb-2">
                     <span>
                        <BiInfoCircle />
                     </span>

                     <span>
                        <span className="flex items-center gap-1">
                           <s className="line-through opacity-50">
                              {
                                 (isActualData)
                                 ? (priceInToman)
                                 : "700,000"
                              }
                           </s>
                           <span className="discount-badge">
                              {
                                 (isActualData)
                                 ? `%${product.discountPerc}`
                                 : "%14"
                              }
                           </span>
                        </span>
                        <span>
                           <span className="text-text-1 text-xl font-bold ml-1">
                              {
                                 (isActualData)
                                 ? (finalPriceInToman)
                                 : "599,000"
                              }
                           </span>
                           <span className="toman">تومان</span>
                        </span>
                     </span>
                  </p>
                  <div>
                     <ProductMiniInfoCarousel
                        data={productMiniInfo}
                        className="w-[200px] bg-transparent"
                     />
                  </div>
                  <div>
                     {
                        (showQtyControls)
                        ? (
                           <div className="flex items-center gap-2 py-2" >
                              <CartItemQuantityControls
                                 cartItem={productCartItem!}
                                 className="w-[100px] shadow-md"
                              />
                              <div>
                                 <p>
                                    در سبد شما
                                 </p>
                                 <p className="text-xs" >
                                    مشاهده
                                    {" "}
                                    <Link
                                       href='/cart'
                                       className="text-secondary-500"
                                    >
                                       سبد خرید
                                    </Link>
                                 </p>
                              </div>
                           </div>
                        ): (
                           <Button
                              className="w-full"
                              onClick={() => addProductToCart()}
                              disabled={isPendingUpdateCart}
                           >
                              {
                                 (isPendingUpdateCart)
                                 ? (
                                    <LoaderDot />
                                 ): (
                                    <span>
                                       افزودن به سبد خرید
                                    </span>
                                 )
                              }
                           </Button>
                        )
                     }
                  </div>
               </div>
               <Divider className="hidden lg:block" />
               <p className="flex gap-3 lg:pb-2 lg:mt-4">
                  <span className="block size-[40px] max-lg:bg-neutral-200 rounded-full p-2 text-text-2 flex-center">
                     <GoShieldCheck className="text-xl" />
                  </span>

                  <span className="grow-1 flex flex-col gap-2 max-lg:border-b py-3">
                     <span className="flex items-center gap-1">
                        گارانتی اصالت و سلامت فیزیکی کالا
                     </span>
                  </span>
               </p>
               <Divider className="max-lg:hidden" />
               <p className="flex gap-3 lg:pb-2 mt-4">
                  <span className="block size-[40px] max-lg:bg-neutral-200 rounded-full p-2 text-text-2 lg:text-secondary-500 flex-center">
                     <LuPackageCheck className="text-xl" />
                  </span>

                  <span className="grow-1 flex justify-between gap-2 max-lg:border-b py-3">
                     <span className="flex flex-col">
                        <span className="flex items-center gap-1">
                           روش و هزینه ارسال
                        </span>
                        <span className="flex items-center gap-2 lg:gap-0.5 text-xs line-clamp-1 max-w-[150px] whitespace-nowrap text-ellipsis overflow-x-hidden">
                           <CiDeliveryTruck className="text-primary-600 text-lg lg:text-xl rotate-y-180" />
                           <span className="text-text-3">توسط دیجی کالا</span>
                           <GoDotFill className="text-text-3 text-[8px]" />
                           <span>تامین از 1 روز کاری دیگر</span>
                        </span>
                     </span>
                     <span className="mr-auto text-xl text-text-2">
                        <MdKeyboardArrowLeft />
                     </span>
                  </span>
               </p>
               <p className="flex gap-3 lg:pb-2 lg:hidden">
                  <span className="block size-[40px] bg-neutral-200 rounded-full p-2 text-text-2 flex-center">
                     <PiStarFourBold className="text-xl" />
                  </span>

                  <span className="grow-1 flex flex-col gap-2 max-lg:border-b lg:border-b-0 py-3">
                     <span className="flex items-center gap-1">
                        روش و هزینه ارسال
                     </span>
                     <span className="flex items-center gap-2 text-xs text-text-3">
                        ارسال رایگان
                     </span>
                  </span>
               </p>
               <Divider className="max-lg:hidden" />
               <p className="flex gap-3 lg:pb-0">
                  <span className="lg:hidden max-lg:flex items-center justify-center size-[40px] bg-neutral-200 rounded-full p-2 text-text-2">
                     <LiaUserCircle className="text-xl" />
                  </span>

                  <span className="grow-1 flex items-center gap-2 py-3">
                     <span
                        className=" h-full flex max-lg:hidden items-center justify-center font-sans"
                        style={{ verticalAlign: "middle" }}
                     >
                        🪙
                     </span>
                     <span className="flex items-center gap-1 lg:hidden">
                        60 امتیاز دیجی‌کلاب دریافت می کنید
                     </span>
                     <span className="flex items-center gap-1 max-lg:hidden">
                        60 امتیاز دیجی‌کلاب
                     </span>
                     <span className="mr-auto lg:mr-0 text-xl text-text-2 lg:text-text-3">
                        <MdKeyboardArrowLeft className="lg:hidden" />
                        <BiInfoCircle className="hidden lg:block" />
                     </span>
                  </span>
               </p>
            </div>

            <div className=" bg-light-1 py-6 lg:hidden">
               <MobileDivider className="" />
            </div>

            <div className="lg:hidden px-4">
               <DeliveryServices />
            </div>
         </div>
      </section>
   );
};

export default IntroSeller;
