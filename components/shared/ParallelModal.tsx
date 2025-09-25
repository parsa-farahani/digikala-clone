'use client'            
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef } from 'react';


export default function ParallelModal(
   {
      children,
      overlayClassName,
      wrapperClassName,
   }: {
      children: React.ReactNode;
      overlayClassName: string;
      wrapperClassName: string;
   }
) {

   const overlay = useRef(null);
   const wrapper = useRef(null);
   
   const router = useRouter();
   
   
   const onDismiss = useCallback(() => {
      
      router.back();
   }, [router])

   
   // 🔵 + Close the Modal when user clicks on the 'Modal-Overlay' (outside of Modal-content)
   const handleClick = useCallback((e: React.MouseEvent) => {
      
      if (
         e.target === overlay.current ||
         e.target === wrapper.current
      ) {
         if (onDismiss) onDismiss();
      }
   }, [onDismiss, overlay, wrapper])
   

   // 🔵 + Close the Modal when user hits 'Escape' key
   const onKeyDown = useCallback((e: KeyboardEvent) => {
         if (e.key === 'Escape') onDismiss();
   }, [onDismiss])
   
   
   useEffect(() => {
      document.addEventListener('keydown', onKeyDown);
      return () => {
         document.removeEventListener('keydown', onKeyDown);
      }
   }, [onDismiss, onKeyDown])
      

   return (
      <div
         ref={overlay}
         className={`fixed z-[9999999999] inset-0 mx-auto bg-black/60 ${overlayClassName}`}
         onClick={handleClick}
      >
         <div
            ref={wrapper}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit ${wrapperClassName}`}
         >
            {
               children
            }
         </div>
      </div>
   )
}