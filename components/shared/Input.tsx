import React, { forwardRef } from 'react'


type InputProps = React.InputHTMLAttributes<HTMLInputElement> &  {
   errorMessage?: string;
}


const Input = forwardRef<HTMLInputElement, InputProps>(
   (
      {
         placeholder,
         className,
         errorMessage,
         ...rest
      }: InputProps,
      ref
   ) => {
   
      const classes = `outline-none w-full py-3 px-4 rounded-md focus:border-secondary-500 caret-secondary-500 bg-light-2 border-b-2 border-b-primary-600 lg:bg-light-1 lg:border lg:border-light-3 font-geist  ${className}`;
   
     return (
       <div>
         <input
            ref={ref}
            placeholder={placeholder ?? ''}
            className={`${classes} font-geist placeholder:font-yekan`}
            {...rest}
         />
         {
            errorMessage ? (
               <div className='mt-2 text-primary-600 text-sm'>
                  {
                     errorMessage
                  }
               </div>
            ) : null
         }
       </div>
     )
   }
)

Input.displayName = "Input";

export default Input