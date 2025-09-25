'use client';

import Button from '@/components/shared/Button'
import React, { useEffect, useMemo, useState } from 'react'
import ProductMiniInfoCarousel from '../ProductMiniInfoCarousel'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Models } from 'appwrite';
import { addToCart, removeFromCart, selectCartItemById, selectCartItems } from '@/redux/slices/cart/cartSlice';
import CartItemQuantityControls from '@/components/shared/CartItemQuantityControls';
import { useUpdateServerCart } from '@/lib/react-query/api/cart';
import { selectIsAuth, selectUser } from '@/redux/slices/auth/authSlice';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import toast from 'react-hot-toast';


const AddToCartMobile = (
  {
    product
  }: {
    product?: Models.Document;
  }
) => {

  const [showMiniInfo, setSHowMiniInfo] = useState(false);


  const isOnline = useOnlineStatus();


  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(selectIsAuth);

  const user = useAppSelector(selectUser);

  const clientCartItems = useAppSelector(selectCartItems);


  const priceInToman = Math.floor((product?.price ?? 0) / 10).toLocaleString('US');

  const discountInRials = Math.floor(product?.price * (product?.discountPerc / 100))

  const finalPriceInRials = Math.floor(product?.price - discountInRials);

  const finalPriceInToman = Math.floor((finalPriceInRials) / 10).toLocaleString('US');


  // const isActualData = product && '$id' in product;

  const clientProduct = useAppSelector(state => selectCartItemById(state, product?.$id ?? ""));


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
    isSuccess: isSuccessUpdateCart,
    isError: isErrorUpdateCart,
    error: updateCartError,
  } = useUpdateServerCart();
  


  const addProductToCart = async () => {
      if (!product) return;
      
      dispatch(
         addToCart(
            productData as CCartProduct
         )
      )

      // If the user is 'guest', we just keep the items in Redux-localStorage (Client)
      if (!isAuth) return;
      
      try {
         // Avoid sending request when user is 'offline'
         if (!isOnline) throw new Error;

         // appwrite api
         const updateCartRes = await updateServerCart( { userId: user.id!, cartItems: [...clientCartItems, productData as CCartProduct] } );

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

  useEffect(() => {

      const handleScroll = () => {

         if (window.innerWidth > 1024) return;
         
         if (window.scrollY < 300) {
            
            setSHowMiniInfo(false);
            
         } else {
            setSHowMiniInfo(true);
         }
      }

      handleScroll();


      window.addEventListener('scroll', handleScroll);
      
      return () => {
         window.removeEventListener('scroll', handleScroll);
      }
  }, [])

  return (
    <div
      className='lg:hidden fixed bottom-0 left-0 right-0 w-screen bg-light-1 z-[999]  border-t border-border-1  py-2 px-4 '
    >

      <div className={`w-fit overflow-y-clip transition-all duration-400 pointer-events-none ${showMiniInfo ? 'h-[30px]' : 'h-0'}`} >
        <ProductMiniInfoCarousel />
      </div>

      <div className='h-[50px] mt-1 flex items-center justify-between' >
        
        {
          (clientProduct?.quantity && clientProduct.quantity > 0)
          ? (
            <CartItemQuantityControls
              cartItem={clientProduct!}
            />
          ) : (
            <Button
              className='text-sm h-full'
              onClick={() => addProductToCart()}
              disabled={isPendingUpdateCart}
            >
              فزودن به سبد خرید
            </Button>
          )
        }

        <p
          className='flex flex-col gap-0 leading-2 items-end'
        >
          {
            (product && product?.discountPerc > 0)
            ? (
              <span className='flex gap-2 items-center' >
                <span
                  className='discount-badge py-0.5 px-1 font-bold'
                >
                  {product.discountPerc}%
                </span>
                <s className='text-text-3 line-through text-xs' >
                  {
                    priceInToman
                  }
                </s>
              </span>
            ): null
          }

          <span>
            <span className='font-bold text-lg leading-5' >
              {
                finalPriceInToman
              }
            </span>
            <span className="toman" >
              تومان
            </span>
          </span>
        </p>
      </div>
    </div>
  )
}

export default AddToCartMobile