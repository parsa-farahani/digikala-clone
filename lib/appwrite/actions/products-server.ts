'use server';

import { appwriteServerConf, databases } from "../serverConfig";


export async function getProductFromServerById(productId: string) {

   
   try {
      
      const product = await databases.getDocument(
         appwriteServerConf.databaseId!,
         appwriteServerConf.productCollectionId!,
         productId,
      )

      
      return product;

   } catch (error) {
      console.log('🔴 getProductById() Error: ', error);
   }
}