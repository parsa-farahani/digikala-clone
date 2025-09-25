'use client';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom';


type ModalProps = {
   isOpen: boolean;
   className?: string;
   fullHeight?: boolean;
   mobileOnly?: boolean;
   children: React.ReactNode;
   onClose: () => void;
}


const Modal = (
   {
      isOpen,
      onClose,
      children,
      fullHeight,
      mobileOnly,
      className,
   }: ModalProps
) => {

   const overlayRef = useRef<HTMLDivElement | null>(null);
   const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

   useEffect(() => {
      let root = document.getElementById('modal-root');

      if (!root) {
         root = document.createElement('div');
         root.id = 'modal-root';
         document.body.appendChild(root);
      }

      setModalRoot(root);
   }, [])

   const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!isOpen) return;


      if (e.target === overlayRef.current) {
         onClose();
         enableBodyScroll(document.documentElement);
      }
   }

   useEffect(() => {
      if (isOpen) {
         disableBodyScroll(document.documentElement);
      } else {
         enableBodyScroll(document.documentElement);
      }
   }, [isOpen])


   if (!modalRoot) return null;


  return createPortal(

    <div
      ref={overlayRef}
      className={`fixed inset-0 z-9999 bg-black/70 flex-center transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${mobileOnly ? 'lg:!hidden' : ''}`}
      onClick={handleClose}
    >
      <div
         className={`rounded-lg h-auto max-h-[600px] max-lg:absolute max-lg:bottom-0 max-lg:w-[100vw] max-lg:hidden-scroll ${fullHeight ? 'max-lg:h-full max-lg:max-h-[100svh]' : 'max-lg:h-auto max-lg:max-h-[60svh]'} ${className ?? ''}`}
      >
         {
            children
         }
      </div>
    </div>
  , modalRoot as HTMLDivElement)
}

export default Modal