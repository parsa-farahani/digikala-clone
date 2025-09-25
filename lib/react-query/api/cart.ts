'use client';

import { useMutation, useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "../queryKeys"
import { getUserCart, updateCartItems } from "@/lib/appwrite/actions/cart";


// export const useGetUserCart = (userId: string) => {

//    return useQuery({
//       queryKey: [QUERY_KEYS.GET_USER_CART, userId],
//       queryFn: () => getUserCart(userId),
//    })
// }


export const useUpdateServerCart = () => {
   return useMutation({
      mutationFn: ({ userId, cartItems }: { userId: string; cartItems: CCartProduct[] }) => updateCartItems(userId, cartItems),
   })
}

