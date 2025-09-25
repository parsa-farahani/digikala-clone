import Heading from '@/components/shared/Heading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPlay, FaUserAstronaut } from 'react-icons/fa6'
import { RxVideo } from 'react-icons/rx'

const RelatedVideos = () => {
  return (
    
      <div
        className='relative z-3 bg-light-1 lg:border lg:border-b-4 lg:rounded-lg lg:pb-6'
      >
        <Heading
          element='h3'
          variant='h3'
          className='py-6 px-3 hidden lg:block'
        >
          ویدئو‌های مرتبط
        </Heading>
        <Heading
          element='h3'
          variant='h3'
          className='pt-3 mb-2 px-3 text-text-2 flex items-center gap-2 lg:hidden'
        >
          <RxVideo className='text-2xl' />
          ویدئو‌های بررسی این کالا
        </Heading>

        <div
          className="max-w-full overflow-x-auto hidden-scroll"
        >
          <div
            className='w-fit lg:w-full max-w-fit flex gap-2 lg:gap-8 justify-start px-6'
          >
            <article
              className='w-[180px] lg:w-[260px] grow-0 shrink-0'
            >
              <Link
                href='#'
                className='block w-full aspect-[12/16] lg:aspect-square relative bg-neutral-100 rounded-lg lg:rounded-none'
              >
                <Image
                  src="/images/products/cards/shoe-1.jpg"
                  width={300}
                  height={300}
                  alt=""
                  className="block size-full object-cover object-center mix-blend-multiply"
                />

                <span
                  className='absolute left-1/2 top-1/2 -translate-1/2 size-10 rounded-full bg-dark-2/50 flex-center text-light-1 text-xl'
                >
                  <FaPlay />
                </span>
              </Link>

              <p className='py-3 text-text-3 text-sm lg:text-text-1 lg:text-base' >
                عنوان ویدیو
              </p>

              <Link
                href='#'
                className='text-sm text-text-3 flex gap-2 items-center max-lg:hidden'
              >
                <span>
                  <FaUserAstronaut />
                </span>
                نام کاربر
              </Link>
            </article>
            <article
              className='w-[180px] lg:w-[260px] grow-0 shrink-0'
            >
              <Link
                href='#'
                className='block w-full aspect-[12/16] lg:aspect-square relative bg-neutral-100 rounded-lg lg:rounded-none'
              >
                <Image
                  src="/images/products/cards/shoe-4.jpg"
                  width={300}
                  height={300}
                  alt=""
                  className="block size-full object-cover object-center mix-blend-multiply"
                />

                <span
                  className='absolute left-1/2 top-1/2 -translate-1/2 size-10 rounded-full bg-dark-2/50 flex-center text-light-1 text-xl'
                >
                  <FaPlay />
                </span>
              </Link>

              <p className='py-3 text-text-3 text-sm lg:text-text-1 lg:text-base' >
                عنوان ویدیو
              </p>

              <Link
                href='#'
                className='text-sm text-text-3 flex gap-2 items-center max-lg:hidden'
              >
                <span>
                  <FaUserAstronaut />
                </span>
                نام کاربر
              </Link>
            </article>
          </div>
        </div>
      </div>
  )
}

export default RelatedVideos