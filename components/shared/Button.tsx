'use client';
import Link from 'next/link';
import React, { type ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   type?: 'submit' | 'reset' | 'button',
   href?: string;
   className?: string;
   white?: boolean;
   full?: boolean;
   small?: boolean;
   onClick?: (e: React.MouseEvent) => void;
   children?: React.ReactNode;
   icon?: React.ReactNode;
}


const Button = (
   {
      type,
      href,
      className,
      white,
      full,
      small,
      onClick,
      icon,
      children,
      ...restProps
   }: ButtonProps
) => {

   const classes = `relative font-normal px-4 py-2 inline-flex items-center justify-center cursor-pointer rounded-md disabled:opacity-50 disabled:!bg-gray-400 ${small ? 'text-sm' : 'text-lg'} text-light-2 font-regular no-underline ${full ? 'w-full' : ''} ${white ? 'bg-light-1 text-text-1 border-1 border-border-1' : ' bg-primary-500'} ${icon ? 'gap-2' : ''} ${className || ''}`;

   const iconClasses = ``;

   const renderButton = () => (
      <button
         className={classes}
         onClick={onClick}
         type={type}
         {...restProps}
      >
         {
            icon
            ? (
               <span className={iconClasses}>
                  {
                     icon
                  }
               </span>
            ) : null
         }
         <span>
            {
               children
            }
         </span>
      </button>
   )   

   const renderLink = () => (
      <Link
         href={href!}
         className={classes}
      >
         {
            icon
            ? (
               <span>
                  {
                     icon
                  }
               </span>
            ) : null
         }
         <span>
            {
               children
            }
         </span>
      </Link>
   )   

  return (
    href ? renderLink() : renderButton()
  )
}

export default Button