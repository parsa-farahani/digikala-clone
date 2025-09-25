import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { useUpdateServerCart } from '@/lib/react-query/api/cart';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectIsAuth, selectUser } from '@/redux/slices/auth/authSlice';
import { addToCart, decreaseItemQty, selectCartItems } from '@/redux/slices/cart/cartSlice';
import React, { useMemo } from 'react'
import toast from 'react-hot-toast';
import { BiMinus, BiPlus } from 'react-icons/bi'
import { FaRegTrashCan } from 'react-icons/fa6';
import LoaderDot from './LoaderDot';

type CartItemQuantityControlsProps= {
   cartItem: CCartProduct;
   className?: string;
}

const CartItemQuantityControls = (
   {
      cartItem,
      className,
   }: CartItemQuantityControlsProps
) => {

   const isOnline = useOnlineStatus();
   

   const dispatch = useAppDispatch();
   const isAuth = useAppSelector(selectIsAuth);
   const user = useAppSelector(selectUser);
   const clientCartItems = useAppSelector(selectCartItems);
   // const cartItem = useAppSelector(state => selectCartItemById(state, cartItemId));

   const cartItemQty = cartItem?.quantity;


   // checks if we addde maximum amount of product to the cart or not
   const isMax = cartItemQty! >= 2;  // for now!

   const productData = useMemo(() => (
      {
         serverId: cartItem.serverId,  // this ID may be replaced with server 'CartItem document' $id. but for now I put product $id as a placeholder
         productId: cartItem.productId,
         name: cartItem.name,
         price: cartItem.price,
         discountPerc: cartItem.discountPerc,
         quantity: cartItem.quantity ?? 1,
         image: cartItem.image,
         options: {
            size: 'M',
            color: 'white',
         }
      }
   ), [cartItem])


   const {
      mutateAsync: updateServerCart,
      isPending: isPendingUpdateCart,
      // isSuccess: isSuccessUpdateCart,
      isError: isErrorUpdateCart,
      // error: updateCartError,
   } = useUpdateServerCart();


   const showErrorToast = () => {
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

   const incItemQty = async () => {
      if (!cartItem) return;
      
      dispatch(
         addToCart(cartItem)
      )

      if (!isAuth) return;
      
      try {

         if (!isOnline) throw new Error;

         // appwrite api
         const updateCartRes = await updateServerCart( 
            { 
               userId: user.id!,
               cartItems: [
                  ...clientCartItems,
                  {
                     ...productData,
                     quantity: productData.quantity + 1,
                  }
               ],
            }
         );


         if (isErrorUpdateCart) throw new Error;
         
      } catch (error) {
         dispatch(
            decreaseItemQty(cartItem.productId)
         )

         console.log('Error Adding product: ', error);
         
         showErrorToast();
      }
   }
   
   const decItemQty = async () => {
      if (!cartItem) return;
      
      dispatch(
         decreaseItemQty(cartItem.productId)
      )

      if (!isAuth) return;
      
      try {

         if (!isOnline) throw new Error;

         const newCartItems = (
            ((productData.quantity - 1) > 0)
            ? (
               [
                  ...clientCartItems,
                  {
                     ...productData,
                     quantity: productData.quantity - 1,
                  }
               ]
            ): (
               [
                  ...clientCartItems.filter(ci => ci.productId !== cartItem.productId),
               ]
            )
         )

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
            addToCart(cartItem)
         )

         console.log('Error Adding product: ', error);
         
         showErrorToast();
      }
   }



  return (
    <div
      className={`min-h-[45px] flex items-center gap-0 justify-between border rounded-md p-1 text-primary-500 ${className}`}
    >
      {/* inc  */}
      <button
         className={`p-1 text-xl disabled:opacity-40`}
         onClick={() => incItemQty()}
         disabled={isMax || isPendingUpdateCart}
      >
         <BiPlus />
      </button>
      
      <div className='min-w-[40px] flex flex-col gap-0 items-center' >
         <span className='text-xl' >
            {
               isPendingUpdateCart
               ? (
                  <LoaderDot
                     className='!p-0'
                  />
               ): (
                  cartItemQty
               )
            }
         </span>
         {
            (isMax && !isPendingUpdateCart)
            ? (
               <span className='text-text-3 text-xs leading-2 opacity-50' >
                  حد اکثر
               </span>
            ): null
         }
      </div>

      {/* dec / remove (when quantity == 1) */}
      <button
         className={`p-1 text-xl disabled:opacity-40`}
         onClick={() => decItemQty()}
         disabled={isPendingUpdateCart}
      >
         {
            (cartItemQty! <= 1)
            ? (
               <FaRegTrashCan className='text-base' />
            ): (
               <BiMinus />
            )
         }
      </button>
    </div>
  )
}

export default CartItemQuantityControls