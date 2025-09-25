'use client';

import { ID, Query } from "appwrite";
import { appwriteConfig, databases } from "../clientConfig";



// infinite scrolling - loading products 
export async function getInfiniteProducts(
   {
      pageParam,
      searchQuery,
   }: {
      pageParam?: string;
      searchQuery?: string;
   }
): Promise<AppwriteDocumentList> { 


   const queries: string[] = [
      Query.orderDesc('$updatedAt'),
      Query.limit(5),
   ];

   if (pageParam) queries.push(Query.cursorAfter(pageParam));

   if (searchQuery) queries.push(Query.search('name', searchQuery));


   try {

      const products = await databases.listDocuments(
         appwriteConfig.databaseId!,
         appwriteConfig.productCollectionId!,
         queries
      );

      
      if (!products) throw Error;


      return products;
      
   } catch (error) {
      console.log('🔴 getInfiniteProducts() Error: ', error);
         return {
         total: 0,
         documents: [],
      };
   }
}



export async function searchProducts(searchTerm: string) {  

   try {

      const products = await databases.listDocuments(
         appwriteConfig.databaseId!,
         appwriteConfig.productCollectionId!,
         [Query.search('name', searchTerm)]
      );

      if (!products) throw Error;

      return products;
      
   } catch (error) {
      console.log('🔴 searchProducts() Error: ', error);
   }
}



export async function getProductById(productId: string) {


   try {
      
      const product = await databases.getDocument(
         appwriteConfig.databaseId!,
         appwriteConfig.productCollectionId!,
         productId,
      )


      return product;

   } catch (error) {
      console.log('🔴 getProductById() Error: ', error);
   }
}