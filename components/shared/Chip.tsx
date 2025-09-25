import React from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md';

const Chip = (
   {
      title,
      small,
   }: {
      title: string;
      small?: boolean;
   }
) => {
  return (
    <span
         className={`border border-border-1 rounded-full flex items-center ${small ? 'py-2 pl-2 pr-3 gap-1 text-xs' : 'py-3 pl-3.5 pr-4 gap-2 text-sm'}`}
      >
         <span>
            {title}
         </span>
         <span>
            <MdKeyboardArrowLeft className={`${small ? 'text-base' : 'text-xl'}`} />
         </span>
      </span>
  )
}

export default Chip