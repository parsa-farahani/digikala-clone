'use client';

import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { useDeleteResponseReaction, useGetResponseReactions, useGetUserResponseReaction, usePostResponseReaction, useUpdateResponseReaction } from '@/lib/react-query/api/comments';
import { useAppSelector } from '@/redux/hooks';
import { selectIsAuth, selectUser } from '@/redux/slices/auth/authSlice';
import { Models } from 'appwrite';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { FakeQuestion, FakeResponse } from './ProductQuestions';


const ResponseExcerptMobile = (
  {
    response,
  }: {
    response: CQuestionResponse | FakeResponse;
  }
) => {


  const [reaction, setReaction] = useState<'like' | 'dislike' | null>(null);

  const prevReactionRef = useRef(reaction);


  const isAuth = useAppSelector(selectIsAuth);
  const user = useAppSelector(selectUser);
  const isOnline = useOnlineStatus();


  const {
    data: responseReactions,
    isPending: isLoadingResponseReactions,
  } = useGetResponseReactions((response && '$id' in response) ? response.$id! : "");

  const {
    data: userReaction,
    isPending: isLoadingUserReaction,
  } = useGetUserResponseReaction(user.id!, (response && '$id' in response) ? response.$id! : "");



  const {
    mutateAsync: postReaction,
    isPending: isPendingPostReaction,
  } = usePostResponseReaction(user.id!, (response && '$id' in response) ? response.$id! : "");

  const {
    mutateAsync: updateReaction,
    isPending: isPendingUpdateReaction,
  } = useUpdateResponseReaction(user.id!, (response && '$id' in response) ? response.$id! : "");

  const {
    mutateAsync: deleteReaction,
    isPending: isPendingDeleteReaction,
  } = useDeleteResponseReaction(user.id!, (response && '$id' in response) ? response.$id! : "");


  const disabledReaction = isLoadingResponseReactions || isLoadingUserReaction || isPendingPostReaction || isPendingUpdateReaction || isPendingDeleteReaction;


  const { likes, dislikes } = (responseReactions && !('error' in responseReactions)) ? responseReactions?.documents?.reduce((acc: { likes: number, dislikes: number }, reaction: Models.Document) => {

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


  const reactToResponse = async (type: 'like' | 'dislike') => {

    if(!isOnline || !('$id' in response) || ('$id' in response && !response.$id)) return;

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
                response: response.$id,
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

  const isActualResponse = (response && 'body' in response);


  return (
    <article
        className='relative z-1 h-full py-1 px-3 line-clamp-2 bg-neutral-100 border rounded-lg text-xs flex flex-col'
    >
        <p className='grow-1' >
          {
            (isActualResponse)
            ? response.body
            : (response?.title ?? null)
          }
        </p>

        <footer className='flex justify-between' >
          <p>
              <span className='text-text-2' >
                {
                  ('username' in response) ? response.username : 'کاربر ناشناس'
                }
              </span>
              <span
                className='buyer-badge mr-2'
              >
                خریدار
              </span>
          </p>

          <div className="relative z-10 flex items-center">
              <button
                className="ibtn text-text-3 flex items-center gap-1"
                onClick={(e) => {
                  e.stopPropagation();
                  reactToResponse('like');
                }}
                disabled={disabledReaction}
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
                className="ibtn text-text-3 flex items-center gap-1"
                onClick={(e) => {
                  e.stopPropagation();
                  reactToResponse('dislike');
                }}
                disabled={disabledReaction}
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
  )
}

export default ResponseExcerptMobile