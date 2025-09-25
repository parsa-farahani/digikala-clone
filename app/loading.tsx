import LoaderDot from '@/components/shared/LoaderDot'
import React from 'react'

const Loading = () => {
  return (
    <div className='fixed inset-0 bg-light-1 flex items-center justify-center'>
      <LoaderDot />
    </div>
  )
}

export default Loading