import { ID, Query } from "appwrite";
import { appwriteConfig, databases } from "../clientConfig";


export async function postComment(commentData: CommentData) {

   try {
   
      const newComment = await databases.createDocument(
         appwriteConfig.databaseId!,
         appwriteConfig.commentCollectionId!,
         ID.unique(),
         {
            ...commentData,
         }
      );

      if (!newComment) throw new Error;
      

      return newComment;
      
   } catch (error) {
      console.log('🔴 postComment() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }

}


export async function getComments(productId: string) {

   try {
   
      const productComments = await databases.listDocuments(
         appwriteConfig.databaseId!,
         appwriteConfig.commentCollectionId!,
         [Query.equal("product", productId)]
      );

      if (!productComments) throw new Error;
      

      return productComments;
      
   } catch (error) {
      console.log('🔴 getComments() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }

}



export async function postQuestion(questionData: QuestionData) {

   try {
   
      const newQuestion = await databases.createDocument(
         appwriteConfig.databaseId!,
         appwriteConfig.questionCollectionId!,
         ID.unique(),
         {
            ...questionData,
         }
      );

      if (!newQuestion) throw new Error;
      

      return newQuestion;
      
   } catch (error) {
      console.log('🔴 postQuestion() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }

}


export async function getQuestions(productId: string) {

   try {
   
      const productQuestions = await databases.listDocuments(
         appwriteConfig.databaseId!,
         appwriteConfig.questionCollectionId!,
         [Query.equal("product", productId)]
      );

      if (!productQuestions) throw new Error;
      

      return productQuestions;
      
   } catch (error) {
      console.log('🔴 getQuestions() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }

}



export async function postQuestionResponse(questionResponseData: QuestionResponseData) {

   try {
   
      const newResponse = await databases.createDocument(
         appwriteConfig.databaseId!,
         appwriteConfig.questionResponseCollectionId!,
         ID.unique(),
         {
            ...questionResponseData,
         }
      );

      if (!newResponse) throw new Error;
      

      return newResponse;
      
   } catch (error) {
      console.log('🔴 postQuestionResponse() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }

}



export async function getQuestionResponses(questionId: string) {

   try {
   
      const questionResponses = await databases.listDocuments(
         appwriteConfig.databaseId!,
         appwriteConfig.questionResponseCollectionId!,
         [Query.equal("question", questionId)]
      );

      if (!questionResponses) throw new Error;
      

      return questionResponses;
      
   } catch (error) {
      console.log('🔴 getQuestionResponses() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }

}



/////////////////////////// Reactions /////////////////////////////
export async function postCommentReaction(reactionData: CommentReactionData) {
   try {
   
      const newReaction = await databases.createDocument(
         appwriteConfig.databaseId!,
         appwriteConfig.commentReactionCollectionId!,
         ID.unique(),
         {
            ...reactionData,
         }
      );

      if (!newReaction) throw new Error;
      

      return newReaction;
      
   } catch (error) {
      console.log('🔴 postCommentReaction() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }
}

export async function updateCommentReaction(reactionId: string, type: 'like' | 'dislike') {
   try {
   
      const newReaction = await databases.updateDocument(
         appwriteConfig.databaseId!,
         appwriteConfig.commentReactionCollectionId!,
         reactionId,
         {
            type,
         }
      );

      if (!newReaction) throw new Error;
      

      return newReaction;
      
   } catch (error) {
      console.log('🔴 updateCommentReaction() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }
}

export async function deleteCommentReaction(reactionId: string) {
   try {
   
      const res = await databases.deleteDocument(
         appwriteConfig.databaseId!,
         appwriteConfig.commentReactionCollectionId!,
         reactionId
      );

      if (!res) throw new Error;
      

      return res;
      
   } catch (error) {
      console.log('🔴 deleteCommentReaction() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }
}

export async function getCommentReactions(commentId: string) {
   try {
   
      const commentReactions = await databases.listDocuments(
         appwriteConfig.databaseId!,
         appwriteConfig.commentReactionCollectionId!,
         [Query.equal("comment", commentId)]
      );

      if (!commentReactions) throw new Error;
      

      return commentReactions;
      
   } catch (error) {
      console.log('🔴 getCommentReactions() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }
}

export async function getUserCommentReaction(userId: string, commentId: string) {
   try {
   
      const userReactions = await databases.listDocuments(
         appwriteConfig.databaseId!,
         appwriteConfig.commentReactionCollectionId!,
         [
            Query.equal("user", userId),
            Query.equal("comment", commentId),
         ]
      );

      const userReaction = userReactions.documents[0] || null;

      if (!userReaction) {
         return null;
      }

      return userReaction;
      
   } catch (error) {
      console.log('🔴 getUserCommentReaction() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }
}




export async function postResponseReaction(reactionData: ResponseReactionData) {

   try {
   
      const newReaction = await databases.createDocument(
         appwriteConfig.databaseId!,
         appwriteConfig.questionResponseReactionCollectionId!,
         ID.unique(),
         {
            ...reactionData,
         }
      );

      if (!newReaction) throw new Error;
      

      return newReaction;
      
   } catch (error) {
      console.log('🔴 postResponseReaction() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }
}


export async function updateResponseReaction(reactionId: string, type: 'like' | 'dislike') {
   try {
   
      const newReaction = await databases.updateDocument(
         appwriteConfig.databaseId!,
         appwriteConfig.questionResponseReactionCollectionId!,
         reactionId,
         {
            type,
         }
      );

      if (!newReaction) throw new Error;
      

      return newReaction;
      
   } catch (error) {
      console.log('🔴 updateResponseReaction() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }
}



export async function deleteResponseReaction(reactionId: string) {
   try {
   
      const res = await databases.deleteDocument(
         appwriteConfig.databaseId!,
         appwriteConfig.questionResponseReactionCollectionId!,
         reactionId
      );

      if (!res) throw new Error;
      
      return res;
      
   } catch (error) {
      console.log('🔴 deleteResponseReaction() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }
}

export async function getResponseReactions(responseId: string) {
   try {
   
      const commentReactions = await databases.listDocuments(
         appwriteConfig.databaseId!,
         appwriteConfig.questionResponseReactionCollectionId!,
         [Query.equal("response", responseId)]
      );

      if (!commentReactions) throw new Error;

      return commentReactions;

   } catch (error) {
      console.log('🔴 getResponseReactions() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }
}


export async function getUserResponseReaction(userId: string, responseId: string) {

   if (!userId || !responseId) throw new Error;

   try {
   
      const userReactions = await databases.listDocuments(
         appwriteConfig.databaseId!,
         appwriteConfig.questionResponseReactionCollectionId!,
         [
            Query.equal("user", userId),
            Query.equal("response", responseId),
         ]
      );


      const userReaction = userReactions?.documents[0] || null;

      console.log('USER Response Reactions: ', userReactions);
      
      if (!userReaction) {
         return null;
      }
      
      return userReaction;
      
   } catch (error) {
      console.log('🔴 getUserResponseReaction() Error: ', error);
      // return {
      //    status: 500,
      //    error,
      // }  
      throw error;
   }
}