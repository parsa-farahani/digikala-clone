import type { Middleware } from "@reduxjs/toolkit";


export const cartItemsMiddleware: Middleware = (storeAPI) => (next) => (action) => {

   const result = next(action);

   // if (typeof action === 'object' && action !== null && 'type' in action) {

   //    const actionType = (action as { type: string }).type;

   //    if (actionType.startsWith('cart/')) {
   
   //       try {
   //          const state = storeAPI.getState();
   //          const serializedCart = JSON.stringify(state.cart.items);
   //          localStorage.setItem('cartItems', serializedCart)
   //       } catch (error) {
   //          console.log('🔴 Redux - Middleware Error | Failed to save cart to localStorage: ', error);
   //       }
   //    }
   // }

   
   return result;
}