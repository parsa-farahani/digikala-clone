'use client'

import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom';

type ModalOverlayProps = {
   isOpen: boolean;
   onClose: () => void;
   z?: number;
}

const ModalOverlay = (
   {
      isOpen,
      onClose,
      z,
   }: ModalOverlayProps
) => {

   const wrapperRef = useRef<HTMLDivElement>(null);
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
      console.log('close')
      e.preventDefault();
      e.stopPropagation();

      if (e.target === wrapperRef.current) {
         onClose();
      }
   }

   if (!modalRoot) return null;

  return createPortal(
      <div
         ref={wrapperRef}
         className={`fixed ${(z) ? `z-${z}` : '-z-1'} h-[100svh] w-full top-0 bg-black/30 duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
         style={{
            transitionProperty: 'opacity',
         }}
         onClick={handleClose}
      />
  , modalRoot)
}

export default ModalOverlay