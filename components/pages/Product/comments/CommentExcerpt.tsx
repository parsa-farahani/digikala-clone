'use client';

import StarRating from "@/components/shared/StarRating";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { useDeleteCommentReaction, useGetCommentReactions, useGetUserCommentReaction, usePostCommentReaction, useUpdateCommentReaction } from "@/lib/react-query/api/comments";
import { useAppSelector } from "@/redux/hooks";
import { selectIsAuth, selectUser } from "@/redux/slices/auth/authSlice";
import { Models } from "appwrite";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiDotsVertical } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { FaShop } from "react-icons/fa6";


const CommentExcerpt = (
   {
      className,
      commentData,
   }: {
      className?: string;
      commentData: Models.Document | null;
   }
) => {

   const finalRating = (commentData?.rating) ? parseFloat( (commentData?.rating / 2).toFixed(1) ) : 0;

   const [reaction, setReaction] = useState<'like' | 'dislike' | null>(null);

   const prevReactionRef = useRef(reaction);


   const isAuth = useAppSelector(selectIsAuth);
   const user = useAppSelector(selectUser);
   const isOnline = useOnlineStatus();

   const {
      data: commentReactions,
      isLoading: isLoadingCommentReactions,
   } = useGetCommentReactions((commentData) ? commentData.$id! : "");

   const {
      data: userReaction,
      isLoading: isLoadingUserReaction,
   } = useGetUserCommentReaction(user.id!, (commentData) ? commentData.$id! : "");



   const {
      mutateAsync: postReaction,
      isPending: isPendingPostReaction,
   } = usePostCommentReaction(user.id!, (commentData) ? commentData.$id! : "");

   const {
      mutateAsync: updateReaction,
      isPending: isPendingUpdateReaction,
   } = useUpdateCommentReaction(user.id!, (commentData) ? commentData.$id! : "");

   const {
      mutateAsync: deleteReaction,
      isPending: isPendingDeleteReaction,
   } = useDeleteCommentReaction(user.id!, (commentData) ? commentData.$id! : "");


   const disabledReaction = isLoadingCommentReactions || isLoadingUserReaction || isPendingPostReaction || isPendingUpdateReaction || isPendingDeleteReaction;


   const { likes, dislikes } = (commentReactions && !('error' in commentReactions)) ? commentReactions?.documents?.reduce((acc: { likes: number, dislikes: number }, reaction: Models.Document) => {

      if (reaction?.type === 'like') {
         acc.likes += 1;
      } else if (reaction?.type === 'dislike') {
         acc.dislikes += 1;
      }

      return acc;

   }, {
      likes: 0,
      dislikes: 0,
   }): {
      likes: 0,
      dislikes: 0,
   }


   useEffect(() => {
      if (!userReaction || (userReaction && 'error' in userReaction) || !userReaction?.type) return;

      setReaction(userReaction.type);
      prevReactionRef.current = userReaction.type;
   }, [userReaction])


   const reactToComment = async (type: 'like' | 'dislike') => {

      if(!isOnline || !commentData?.$id) return;


      if (!isAuth || !user?.id) {
         toast(
            (t) => (
               <span>
                  لطفا به حساب کاربری خود وارد شوید.
                  <button
                     onClick={() => toast.dismiss(t.id)}
                     style={{
                        zIndex: '999999999',
                        cursor: 'pointer',
                        marginRight: '.75rem',
                        color: '#19bfd3',
                     }}
                  >
                     باشه
                  </button>
               </span>
            ),
         )

         return;
      }



      try {
         // 1. so the user had not set any reaction -> createDocument()
         if (
            !userReaction ||
            (
               userReaction &&
               !('error' in userReaction) &&
               !userReaction.type
            )
         ) {

            setReaction(type);
   
            await postReaction(
               {
                  user: user.id,
                  comment: commentData.$id,
                  type,
               }
            )
            
            prevReactionRef.current = type;
         } 
         // 2. so the user clicks on the reaction which already posted it (like -> like , dislike -> dislike) -> deleteDocument()
         else if (
            userReaction &&
            !('error' in userReaction) &&
            type === userReaction.type
         ) {

            
            setReaction(null);
            
            await deleteReaction(
               userReaction.$id
            )
            
            prevReactionRef.current = null;
         }
         // 3. so the user clicks on the reaction opposite of the reaction which already posted it (like -> dislike , dislike -> like) -> updateDocument()
         else if (
            userReaction &&
            !('error' in userReaction) &&
            (
              (type === 'like' && userReaction.type === 'dislike') ||
              (type === 'dislike' && userReaction.type === 'like')
            )
         ) {
            
            setReaction(type);
            
            await updateReaction(
               {
                  reactionId: userReaction.$id,
                  type,
               }
            )
            
            prevReactionRef.current = null;
         }
   
            
         } catch (error) {
   
            console.log('Error setting reaction: ', error);
   
            setReaction(prevReactionRef.current);
            
            toast(
               (t) => (
                  <span>
                     خطا در ثبت واکنش.
                     <button
                        onClick={() => toast.dismiss(t.id)}
                        style={{
                           zIndex: '999999999',
                           cursor: 'pointer',
                           marginRight: '.75rem',
                           color: '#19bfd3',
                        }}
                     >
                        باشه
                     </button>
                  </span>
               ),
            )
         }
   }


   return (
      <article className={`border-0 border-t w-full px-3 py-6 ${className}`}>
         <div className="flex justify-between items-start">
            <div>
               <p className="flex gap-2 items-center text-sm text-text-3">
                  {
                     (commentData?.user)
                     ? (
                        commentData.user.email
                     ): "کاربر ناشناس"
                  }
                  <span className="bg-green-100 rounded-full text-xs py-1 px-1.5 text-green-900">
                     خریدار
                  </span>
                  <span className="flex gap-2 items-center">
                     <BsDot />
                     <time>4 اردیبهشت 1404</time>
                  </span>
               </p>
               <p className="mt-2 block">
                  <StarRating rating={finalRating} outOf={5} size={20} />
               </p>
            </div>

            <div className="block">
               <button className="ibtn pt-0 text-text-3">
                  <BiDotsVertical className="text-lg" />
               </button>
            </div>
         </div>

         <p className="text-text-2 mt-6 line-clamp-5 leading-7 text-base">
            {
               commentData?.description ?? (
                  `
                     این کتانی از نظر بسیاری از کاربران از لحاظ ظاهری زیبا و جذاب است و
                     در برخی نظرات آمده که به راحتی با لباس‌های مختلف ست می‌شود. کاربران
                     راضی هستند که این کفش نسبت به قیمتش ارزش مناسبی دارد و برای
                     استفاده‌ی روزمره و پیاده‌روی‌های کوتاه مناسب است. بیشتر خریداران به
                     کیفیت زیره و راحتی نسبی آن اشاره کرده‌اند. با این حال، برخی نظرات
                     حاکی از عدم کیفیت مناسب کفش است، به ویژه از نظر دوخت و مواد به کار
                     رفته که به سرعت خراب می‌شوند. همچنین، برخی کاربران از سایز بندی و
                     عدم راحتی کامل آن ناراضی بودند. بوی نامطبوع بعد از استفاده طولانی
                     نیز از دیگربی‌نقص‌ها محسوب می‌شود. به طور کلی، این کفش برای افرادی
                     که به دنبال گزینه‌ای اقتصادی و زیبا هستند مناسب است، اما انتظار
                     کیفیت بالای یک کفش گران‌تر را نباید داشت.
                  `
               )
            }
         </p>

         <footer className="flex items-center justify-between mt-6">
            <div>
               <span className="text-sm items-center gap-2 flex">
                  <FaShop className="text-sm" />
                  دیجی‌کالا
               </span>
               <time className="hidden text-text-3 text-xs">
                  4 اردیبهشت 1404
               </time>
            </div>

            <div className="flex items-center">
               <button
                  disabled={disabledReaction}
                  className={`ibtn text-text-3 flex items-center gap-1 ${reaction === 'like' ? 'text-primary-500' : ''}`}
                  onClick={() => reactToComment('like')}
               >
                  {
                     likes ?? 0
                  }
                  {
                     (reaction === 'like')
                     ? (
                        <AiFillLike className="text-xl text-primary-500" />
                     ): (
                        <AiOutlineLike className="text-xl" />
                     )
                  }
               </button>
               <button
                  className={`ibtn text-text-3 flex items-center gap-1 ${reaction === 'dislike' ? 'text-primary-500' : ''}`}
                  disabled={disabledReaction}
                  onClick={() => reactToComment('dislike')}
               >
                  {
                     dislikes ?? 0
                  }
                  {
                     (reaction === 'dislike')
                     ? (
                        <AiFillDislike className="text-xl text-primary-500" />
                     ): (
                        <AiOutlineDislike className="text-xl" />
                     )
                  }
               </button>
            </div>
         </footer>
      </article>
   );
};

export default CommentExcerpt;
