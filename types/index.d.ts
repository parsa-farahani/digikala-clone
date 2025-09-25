import { Models } from "appwrite";

export {};

declare global {
   type Test = {
      name: string;
   };

   type ProductBreadCrumb = {
      title: string;
      href: string;
   };

   type ProductSizes = {
      id: string;
      value: number;
      title: string;
   };

   type ProductColor = {
      id: string;
      value: string;
      title: string;
      color: string;
   };

   type ProductProperties = {
      title: string;
      value: string;
   };

   type ProductMiniInfo = {
      title: string;
      emoji: string;
   };

   type CProduct = {
      id: string;
      image: string;
      title: string;
      price: number;
      discountPerc: number;
   };

   type CCartProduct = {
      serverId: string;
      productId: string;
      name: string;
      price: number;
      discountPerc: number;
      quantity: number;
      image: string;
      options?: {
         size: string;
         color: string;
      };
   };

   type SProduct = Models.Document & {
      productId: string;
      name: string;
      description: string;
      details?: string;
      category: string;
      price: number;
      discountPerc: number;
      rating?: number;
      stock: number;
      imageUrls?: string[];
      seller: string;
      tag?: string;
   };

   type PNavLink = {
      title: string;
      href: string;
   };

   type ProductDetails = {
      intro: string;
      expertReview: {
         title: string;
         desc: string[];
         items?: string[];
      }[];
      properties: {
         title: string;
         value: string;
      }[];
   };

   type CProductQuestion = Models.Document & {
      user?: Models.Document;
      product?: Models.Document;
      body: string;
      questionReactions: Models.Document[];
      questionResponses: CQuestionResponse[];
   };

   type CQuestionResponse = Models.Document & {
      title?: string;
      body: string;
      username: string;
      reactions: CReactions;
   };

   type CReactions = {
      like: number;
      dislike: number;
   };

   type CCategory = {
      id?: string;
      title: string;
      query?: string;
   };

   type CBrand = {
      id?: string;
      title: {
         fa: string;
         en: string;
      };
      query?: string;
   };

   type CSellerType = {
      id: string;
      title: string;
      query: string;
   };

   interface AppwriteDocument {
      $id: string;
      $collectionId: string;
      $databaseId: string;
      $createdAt: string;
      $updatedAt: string;
      [key: string]: unknown; // for custom fields
   }

   interface AppwriteDocumentList {
      total: number;
      documents: AppwriteDocument[];
   }

   type CommentData = {
      user: Models.Document;
      product: string;
      usernameSnapshot: string;
      rating: number;
      description: string;
   };

   

   type QuestionData = {
      user: Models.Document;
      product: string;
      body: string;
   };

   type QuestionResponseData = {
      user: Models.Document,
      question: string,
      body: string,
      usernameSnapshot: string,
   };

   type CommentReactionData = {
      user: string,
      comment: string,
      type: 'like' | 'dislike',
   }

   type ResponseReactionData = {
      user: string,
      response: string,
      type: 'like' | 'dislike',
   }
}
