import * as sdk from 'node-appwrite';


export const appwriteServerConf = {
   apiKey: process.env.APPWRITE_API_KEY,
   url: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
   projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
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
   bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
};


const client = new sdk.Client();


client
   .setEndpoint(appwriteServerConf.url!)
   .setProject(appwriteServerConf.projectId!)
   .setKey(appwriteServerConf.apiKey!)
;


export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const users = new sdk.Users(client);
export const functions = new sdk.Functions(client);