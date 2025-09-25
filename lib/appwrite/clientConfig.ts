'use client';

import { Client, Account, Databases, Storage, Avatars } from 'appwrite';


export const appwriteConfig = {
   url: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
   projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
   storageId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
   databaseId: process.env.NEXT_PUBLIC_DATABASE_ID,
   userCollectionId: process.env.NEXT_PUBLIC_USER_COLLECTION_ID,
   productCollectionId: process.env.NEXT_PUBLIC_PRODUCT_COLLECTION_ID,
   cartCollectionId: process.env.NEXT_PUBLIC_CART_COLLECTION_ID,
   cartItemCollectionId: process.env.NEXT_PUBLIC_CARTITEM_COLLECTION_ID,
   commentCollectionId: process.env.NEXT_PUBLIC_COMMENT_COLLECTION_ID,
   commentReactionCollectionId: process.env.NEXT_PUBLIC_COMMENTREACTION_COLLECTION_ID,
   questionCollectionId: process.env.NEXT_PUBLIC_QUESTION_COLLECTION_ID,
   questionResponseCollectionId: process.env.NEXT_PUBLIC_QUESTIONRESPONSE_COLLECTION_ID,
   questionReactionCollectionId: process.env.NEXT_PUBLIC_QUESTIONREACTION_COLLECTION_ID,
   questionResponseReactionCollectionId: process.env.NEXT_PUBLIC_QUESTIONRESPONSEREACTION_COLLECTION_ID,
}


export const client = new Client();

client.setProject(appwriteConfig.projectId!);
client.setEndpoint(appwriteConfig.url!);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);