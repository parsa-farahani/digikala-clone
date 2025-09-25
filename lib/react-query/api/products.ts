'use client';

import { getInfiniteProducts, getProductById, searchProducts } from "@/lib/appwrite/actions/products"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "../queryKeys"
// import {  } from 'node-appwrite';

export interface AppwriteDocument {
  $id: string;
  $collectionId: string;
  $databaseId: string;
  $createdAt: string;
  $updatedAt: string;
  [key: string]: unknown;
}

export interface AppwriteDocumentList {
  total: number;
  documents: AppwriteDocument[];
  pages?: AppwriteDocument[];
}


export const useGetProducts = (searchQuery?: string) => {

   return useInfiniteQuery
      <
         AppwriteDocumentList,
         Error,
         AppwriteDocumentList,
         readonly unknown[],
         string | undefined
      >
   ({
      queryKey: [QUERY_KEYS.GET_INFINITE_PRODUCTS, searchQuery],
      queryFn: ({ pageParam }) => {
         return getInfiniteProducts({ pageParam, searchQuery })
      },
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => {
      
         // if (!lastPage?.documents || lastPage?.documents?.length === 0) return null;
         if (!lastPage?.documents?.length) {
            return undefined;
         }
      
         const lastId = lastPage?.documents[lastPage?.documents.length - 1].$id;
      
         return lastId;
      },
   })
}


export const useSearchProducts = (searchTerm: string) => {
   return useQuery({
      queryKey: [QUERY_KEYS.SEARCH_PRODUCTS, searchTerm],
      queryFn: () => searchProducts(searchTerm),
      enabled: !!searchTerm,
   })
}


export const useGetProductById = (productId: string) => {

   return useQuery({
      queryKey: [QUERY_KEYS.GET_PRODUCT_BY_ID, productId],
      queryFn: () => {
         const product = getProductById(productId);

         console.log('🐂', product);

         return product;
      },
      enabled: !!productId,
   })
}