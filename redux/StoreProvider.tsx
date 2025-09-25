'use client'

import { AppStore, makeStore } from "@/redux/store";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { calcTotals } from "./slices/cart/cartSlice";

/*
   by this provider, we actually create a 'store' for each 'user'(request) as a 'client component'

   We also used a 'ref' and an 'if' check to make sure that the 'store' is created 'once'
*/

export default function StoreProvider({
   children
}: {
   children: React.ReactNode;
}) {

   const storeRef = useRef<AppStore>(undefined);

   if (!storeRef.current) {
      storeRef.current = makeStore();
   }

   // Initialize the cart-totals from 'localStorage' (If there exist any item there.)
   useEffect(() => {
      if (storeRef.current) {
         storeRef.current.dispatch(
            calcTotals()
         )
      }
   }, [])

   return (
      <Provider
         store={storeRef.current}
      >
         {
            children
         }
      </Provider>
   )
}