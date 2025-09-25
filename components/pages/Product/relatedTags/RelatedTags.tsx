import Heading from '@/components/shared/Heading'
import Link from 'next/link'
import React from 'react'

const RelatedTags = () => {
  return (
    <div>
      <Heading
          element='h3'
          variant='h3'
          className='py-6 px-3 mb-2'
          style="underline"
        >
          تگ های مرتبط
        </Heading>
        <div
          className="max-w-full overflow-x-auto hidden-scroll"
        >
          <div
            className='w-full max-w-fit flex gap-2 justify-start px-6'
          >
            <Link
              href='#'
              className='border text-secondary-500 py-2 px-1 rounded-full text-sm'
            >
              کفش
            </Link>
            <Link
              href='#'
              className='border text-secondary-500 py-2 px-1 rounded-full text-sm'
            >
              ورزشی
            </Link>
          </div>
        </div>
    </div>
  )
}

export default RelatedTags