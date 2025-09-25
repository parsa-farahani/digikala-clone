import { ID, Models, Query } from "appwrite";
import { appwriteConfig, databases } from "../clientConfig";

export type CartDocument = Models.Document & {
   user: string;
   cartItem: CartItemDocument[];
}

export type CartItemDocument = Models.Document & {
   cart: string;
   product: Models.Document;
   quantity: number;
   priceAtAdd: number;
   discountPercAtAdd: number;
   titleSnapshot: string;
   imageSnapshot: string;
}


export async function createNewCart(userId: string) {

   try {

      const newCart = await databases.createDocument(
         appwriteConfig.databaseId!,
         appwriteConfig.cartCollectionId!,
         ID.unique(),
         {
            user: userId,
            cartItem: [],
         }
      )

      if (!newCart) throw Error;

      return newCart;
      
   } catch (error) {
      console.log('🔴 createNewCart() Error: ', error);
      return {
         status: 500,
         error,
      }
   }
}


export async function getUserCart(userId: string) {

   try {

      console.log('userid for cart: ', userId);

      const carts = await databases.listDocuments(
         appwriteConfig.databaseId!,
         appwriteConfig.cartCollectionId!,
         [Query.equal("user", userId)]
      );

      const userCart = carts.documents[0] || null;

      if (!userCart) throw Error;

      return userCart;
      
   } catch (error) {
      console.log('🔴 getUserCart() Error: ', error);
      return {
         status: 500,
         error,
      }
   }
}

// the 'cartItems' must be taken from 'client side', becuase when user adds items as 'guest', they go to 'localStorage <-> Redux-store'.
export async function initCartItems(userId: string, cartItems: CCartProduct[]) {

   try {
      
      const userCart: Models.Document | { status: number, error: unknown } = await getUserCart(userId) as CartDocument;
      
      
      if (!userCart || userCart?.status === 500) throw new Error;

      for (const ci of cartItems) {

         const existingCartItem = userCart.cartItem.find(
            (item: CartItemDocument) => item.product.$id === ci.serverId
         )

         
         // if the item has already exist, add to its quantity
         if (existingCartItem) {

            const updatedCartItem = await databases.updateDocument(
               appwriteConfig.databaseId!,
               appwriteConfig.cartItemCollectionId!,
               existingCartItem.$id,
               {
                  quantity: existingCartItem.quantity + ci.quantity,
                  priceAtAdd: ci.price,
                  discountPercAtAdd: ci.discountPerc,
                  titleSnapshot: ci.name,
                  imageSnapshot: ci.image,
               }
            )            

            if (!updatedCartItem) throw new Error("Failed to update cart item");
         }
         // else: the item doesnt exist, create its document and assign it to the Cart
         else {
            const newCartItem = await databases.createDocument(
               appwriteConfig.databaseId!,
               appwriteConfig.cartItemCollectionId!,
               ID.unique(),
               {
                  cart: userCart.$id,
                  product: ci.serverId,
                  quantity: ci.quantity,
                  priceAtAdd: ci.price,
                  discountPercAtAdd: ci.discountPerc,
                  titleSnapshot: ci.name,
                  imageSnapshot: ci.image,
               }
            )

            if (!newCartItem) throw new Error("Failed to create cart item");
         }

      }

      return {
         status: 200,
         message: "Cart initialized successfully",
      }
      
   } catch (error) {
      console.log('🔴 initCartItems() Error: ', error);
      return {
         status: 500,
         error,
      }
   }
}


export async function updateCartItems(userId: string, cartItems: CCartProduct[]) {

   try {
      
      const userCart: Models.Document | { status: number, error: unknown } = await getUserCart(userId) as CartDocument;
      
      
      if (!userCart || userCart?.status === 500) throw new Error;


      const clientIds = cartItems.map(ci => ci.productId);
   
      for (const item of userCart.cartItem) {
         if (!clientIds.includes(item.product.$id)) {
            await databases.deleteDocument(
               appwriteConfig.databaseId!,
               appwriteConfig.cartItemCollectionId!,
               item.$id
            );
         }
      }


      for (const ci of cartItems) {

         const existingCartItem = userCart.cartItem.find(
            (item: CartItemDocument) => item.product.$id === ci.productId
         )

         
         // if the item has already exist, add to its quantity
         if (existingCartItem) {

            let updatedCartItem;

            if (ci.quantity > 0) {
               updatedCartItem = await databases.updateDocument(
                  appwriteConfig.databaseId!,
                  appwriteConfig.cartItemCollectionId!,
                  existingCartItem.$id,
                  {
                     quantity: ci.quantity,
                     priceAtAdd: ci.price,
                     discountPercAtAdd: ci.discountPerc,
                     titleSnapshot: ci.name,
                     imageSnapshot: ci.image,
                  }
               )
            }



            if (!updatedCartItem) throw new Error("Failed to update cart item");
         }
         // else: the item doesnt exist, create its document and assign it to the Cart
         else {

            
            const newCartItem = await databases.createDocument(
               appwriteConfig.databaseId!,
               appwriteConfig.cartItemCollectionId!,
               ID.unique(),
               {
                  cart: userCart.$id,
                  product: ci.productId,
                  quantity: ci.quantity,
                  priceAtAdd: ci.price,
                  discountPercAtAdd: ci.discountPerc,
                  titleSnapshot: ci.name,
                  imageSnapshot: ci.image,
               }
            )


            if (!newCartItem) throw new Error("Failed to create cart item");
         }

      }

      return {
         status: 200,
         message: "Cart updated successfully",
      }
      
   } catch (error) {
      console.log('🔴 updateCartItems() Error: ', error);
      throw error;
      // return {
      //    status: 500,
      //    error,
      // }
   }
}

