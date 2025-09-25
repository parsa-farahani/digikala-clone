import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { checkAuthUser, selectIsAuth, selectIsLoadingAccount, selectUser } from '@/redux/slices/auth/authSlice';
import React, { useEffect, useRef } from 'react'
import Loading from './loading';
import { getUserCart } from '@/lib/appwrite/actions/cart';
import { populateCart, selectCartItems } from '@/redux/slices/cart/cartSlice';

const ClientLoadInitials = (
   {
      children
   }: {
      children: React.ReactNode
   }
) => {

   const isAuth = useAppSelector(selectIsAuth);
   const user = useAppSelector(selectUser);
   const clientCart = useAppSelector(selectCartItems);
   const isLoadingAccount = useAppSelector(selectIsLoadingAccount);
   const dispatch = useAppDispatch();

   // to track auth (isAuth: false -> true)
   const prevAuthRef = useRef(isAuth);

   useEffect(() => {
      dispatch(
         checkAuthUser()
      )
      // if (!isLoadingAccount) {
      // }
   }, [dispatch])


   // on initial load, when user enters the app, after 'isAuth' check, I initialize the server-cart items, from client-cart items
   useEffect(() => {

      const initClientCart = async () => {

         try {
            
            const userCart = await getUserCart(user.id!);
   
            if ('error' in userCart || !userCart) throw new Error("Error loading cart.");
            
            dispatch(
               populateCart(
                  userCart
               )
            )
         } catch (error) {
            console.error(error);
         }

      }

      if (!prevAuthRef.current && isAuth && user?.id) {

         initClientCart();

         prevAuthRef.current = true;
      }
   }, [isAuth, user?.id, clientCart, dispatch])

   
  return (
    <>
      {
         children
      }
      {
         (isLoadingAccount)
         ? (
            <Loading/>
         ): null
      }
    </>
  )
}

export default ClientLoadInitials