import React from 'react'

const MobileDivider = (
   {
      className
   }: {
      className?: string;
   }
) => {
  return (
    <div
      className={`w-full h-2.5 bg-neutral-100 lg:hidden ${className}`}
    />
  )
}

export default MobileDivider