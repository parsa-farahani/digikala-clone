import Image from 'next/image';
import React from 'react'

const Item = (
   {
      image,
      title
   }: {
      image: React.ReactNode;
      title: string;
   }
) => {
  return (
    <div>
      <span
         className='flex flex-col items-center justify-center gap-2'
      >
         <span
            className='block size-13'
         >
            {
               (typeof image === 'string')
               ? (
                  <Image
                     src={image}
                     width={100}
                     height={100}
                     alt='image'
                     className='block size-full object-center object-cover'
                  />
               ): (
                  image
               )
            }
         </span>
         <span
            className='block text-xs lg:text-sm leading-6 text-center text-text-2 !line-clamp-2'
         >
            {
               title
            }
         </span>
      </span>
    </div>
  )
}

export default Item