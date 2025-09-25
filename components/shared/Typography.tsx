import React from 'react'

type TypographyProps = {
   variant?: 'h1' | 'h2' | 'h3' | 'base' | 'small';
   weight?: 'bold' | 'light' | 'lighter';
   children?: React.ReactNode;
   className?: string;
}


const Typography = (
   {
      variant,
      weight,
      children,
      className,
   }: TypographyProps
) => {

   let fontSize;

   switch (variant) {
      case 'h1':
         fontSize = 'text-2xl lg:text-3xl';
         break;
      case 'h2':
         fontSize = 'text-xl lg:text-2xl';
         break;
      case 'h3':
         fontSize = 'text-lg lg:text-xl';
         break;
      case 'base':
         fontSize = 'text-sm';
         break;
      case 'small':
         fontSize = 'text-xs';
         break;
   
      default:
         fontSize = 'text-base';
         break;
   }

   
   let fontWeight;

   switch (weight) {
      case 'bold':
         fontWeight = 'font-bold text-dark-1';
         break;
      case 'light':
         fontWeight = 'text-light-3';
         break;
      case 'lighter':
         fontWeight = 'text-light-4';
         break;
   
      default:
         fontWeight = 'text-dark-1';
         break;
   }

   const classes = `${fontSize} ${fontWeight} ${className}`;
  

   return (


    <span
      className={classes}
    >
      {
         children
      }   
    </span>
  )
}

export default Typography