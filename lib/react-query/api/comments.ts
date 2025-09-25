import { deleteCommentReaction, deleteResponseReaction, getCommentReactions, getComments, getQuestionResponses, getQuestions, getResponseReactions, getUserCommentReaction, getUserResponseReaction, postComment, postCommentReaction, postQuestion, postQuestionResponse, postResponseReaction, updateCommentReaction, updateResponseReaction } from "@/lib/appwrite/actions/comments";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";

export const usePostComment = (productId: string) => {

   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: (commentData: CommentData) => postComment(commentData),
      onSuccess: () => {
         queryClient.invalidateQueries(
            {
               queryKey: [QUERY_KEYS.GET_COMMENTS, productId],
            }
         )
      }
   })
}


export const useGetComments = (productId: string) => {

   return useQuery({
      queryFn: () => getComments(productId),
      queryKey: [QUERY_KEYS.GET_COMMENTS, productId],
   })
}


export const usePostQuestion = (productId: string) => {

   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: (questionData: QuestionData) => postQuestion(questionData),
      onSuccess: () => {
         queryClient.invalidateQueries(
            {
               queryKey: [QUERY_KEYS.GET_QUESTIONS, productId],
            }
         )
      }
   })
}


export const useGetQuestions = (productId: string) => {

   return useQuery({
      queryFn: () => getQuestions(productId),
      queryKey: [QUERY_KEYS.GET_QUESTIONS, productId],
   })
}


export const usePostResponse = (questionId: string) => {

   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: (responseData: QuestionResponseData) => postQuestionResponse(responseData),
      onSuccess: () => {
         queryClient.invalidateQueries(
            {
               queryKey: [QUERY_KEYS.GET_QUESTION_RESPONSES, questionId],
            }
         )
      }
   })
}


export const useGetResponses = (questionId: string) => {

   return useQuery({
      queryFn: () => getQuestionResponses(questionId),
      queryKey: [QUERY_KEYS.GET_QUESTION_RESPONSES, questionId],
   })
}


// /////////////////////////// Reactions //////////////////////////////
export const usePostCommentReaction = (userId: string, commentId: string) => {

   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: (reactionData: CommentReactionData) => postCommentReaction(reactionData),
      onSuccess: () => {
         queryClient.invalidateQueries(
            {
               queryKey: [QUERY_KEYS.GET_COMMENT_REACTIONS, commentId],
            }
         )

         queryClient.invalidateQueries({
            
            queryKey: [QUERY_KEYS.GET_USER_COMMENT_REACTION, userId, commentId],
         });
      }
   })
}


export const useUpdateCommentReaction = (userId: string, commentId: string) => {

   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: ({ reactionId, type }: { reactionId: string; type: 'like' | 'dislike' }) => updateCommentReaction(reactionId, type),
      onSuccess: () => {
         queryClient.invalidateQueries(
            {
               queryKey: [QUERY_KEYS.GET_COMMENT_REACTIONS, commentId],
            }
         )

         queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.GET_USER_COMMENT_REACTION, userId, commentId],
         });
      }
   })
}


export const useDeleteCommentReaction = (userId: string, commentId: string) => {

   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: (reactionId: string) => deleteCommentReaction(reactionId),
      onSuccess: () => {
         queryClient.invalidateQueries(
            {
               queryKey: [QUERY_KEYS.GET_COMMENT_REACTIONS, commentId],
            }
         )

         queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.GET_USER_COMMENT_REACTION, userId, commentId],
         });
      }
   })
}


export const useGetCommentReactions = (commentId: string) => {

   return useQuery({
      queryFn: () => getCommentReactions(commentId),
      queryKey: [QUERY_KEYS.GET_COMMENT_REACTIONS, commentId],
   })
}

export const useGetUserCommentReaction = (userId: string, commentId: string) => {

   return useQuery({
      queryKey: [QUERY_KEYS.GET_USER_COMMENT_REACTION, userId, commentId],
      queryFn: ({ queryKey }) => {

         const [, userId, commentId] = queryKey;

         return getUserCommentReaction(userId as string, commentId as string);
      },
      enabled: !!userId && !!commentId,
   })
}


export const usePostResponseReaction = (userId: string, responseId: string) => {

   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: (reactionData: ResponseReactionData) => postResponseReaction(reactionData),
      onSuccess: () => {
         queryClient.invalidateQueries(
            {
               queryKey: [QUERY_KEYS.GET_RESPONSE_REACTIONS, responseId],
            }
         )
         queryClient.invalidateQueries(
            {
               queryKey: [QUERY_KEYS.GET_USER_RESPONSE_REACTION, userId, responseId],
            }
         )
      }
   })
}


export const useUpdateResponseReaction = (userId: string, responseId: string) => {

   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: ({ reactionId, type }: { reactionId: string; type: 'like' | 'dislike' }) => updateResponseReaction(reactionId, type),
      onSuccess: () => {
         queryClient.invalidateQueries(
            {
               queryKey: [QUERY_KEYS.GET_RESPONSE_REACTIONS, responseId],
            }
         )

         queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.GET_USER_RESPONSE_REACTION, userId, responseId],
         });
      }
   })
}

export const useDeleteResponseReaction = (userId: string, responseId: string) => {

   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: (reactionId: string) => deleteResponseReaction(reactionId),
      onSuccess: () => {
         queryClient.invalidateQueries(
            {
               queryKey: [QUERY_KEYS.GET_RESPONSE_REACTIONS, responseId],
            }
         )

         queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.GET_USER_RESPONSE_REACTION, userId, responseId],
         });
      }
   })
}

export const useGetResponseReactions = (responseId: string) => {

   return useQuery({
      queryFn: () => getResponseReactions(responseId),
      queryKey: [QUERY_KEYS.GET_RESPONSE_REACTIONS, responseId],
   })
}


export const useGetUserResponseReaction = (userId: string, responseId?: string) => {


   return useQuery({
      queryKey: [QUERY_KEYS.GET_USER_RESPONSE_REACTION, userId, responseId],
      queryFn: ({ queryKey }) => {

         const [, userId, responseId] = queryKey;

         return getUserResponseReaction(userId as string, responseId as string);
      },
      enabled: Boolean(userId && responseId),
   })
}