import Image from 'next/image';
import React from 'react'

const OffersGrid = (
   {
      data,
   }: {
      data: {
         image: string;
      }[]
   }
) => {


  return (
    <div
      className='w-full h-auto grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-4 px-4 lg:px-0'
    >
      {
         data.map(({ image }, i) => (
            <div
               key={i}
               className='h-[60px] lg:h-auto border rounded-md lg:rounded-lg overflow-clip lg:aspect-[4/3]'
            >
               <Image
                  src={image}
                  className='block size-full object-cover object-center'
                  width={100}
                  height={100}
                  alt=''
                  unoptimized
               />
            </div>
         ))
      }
    </div>
  )
}

export default OffersGrid