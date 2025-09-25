import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const ProductSkeletons = () => {
  return (
    <div className="h-full w-full p-2 flex flex-col space-y-3">
      <Skeleton className="grow-1 w-[250px] rounded-xl" />
      <div className="space-y-2 mt-auto py-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  )
}

export default ProductSkeletons