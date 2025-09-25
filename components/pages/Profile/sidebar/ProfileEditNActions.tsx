import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { RiEditLine } from 'react-icons/ri'

const ProfileEditNActions = () => {
  return (
    <div className='lg:border-b' >
      {/* Edit profile */}
      <div
        className='py-4 border-b lg:border-0 flex items-center justify-between'
      >
        <p
          className='lg:text-lg lg:font-bold'
        >
          username
        </p>

        <Link
          href='/profile/personal-info'
          className='text-xl text-secondary-500 p-1'
        >
          <RiEditLine />
        </Link>
      </div>

      {/* gold, wallet, digiklub  */}
      <div
        className='p-2 max-w-full overflow-x-auto hidden-scroll'
      >
        <div
          className='flex flex-row lg:flex-col lg:gap-4 gap-2'
        >

          <div
            className='shrink-0 grow-0 flex items-end gap-2'
          >
            <div className='lg:hidden size-[50px] shrink-0 grow-0' >
              <Image
                src="/images/profile/gold.svg"
                width={70}
                height={70}
                alt=""
                className=''
              />
            </div>
            <div className='w-full' >

              <p className='w-full flex justify-between items-center mb-2' >
                <span className='text-sm lg:text-base' >
                  طلای دیجیتال
                </span>

                <span className='hidden lg:block text-xs' >
                  - میلی‌گرم
                </span>
              </p>
              <Link
                href='#'
                className='flex items-center text-secondary-500 text-sm lg:text-sm'
              >
                خرید و فروش
                <MdKeyboardArrowLeft className='text-xl' />
              </Link>
            </div>
          </div>

          <div
            className='shrink-0 grow-0 flex items-end gap-2'
          >
            <div className='lg:hidden size-[50px] shrink-0 grow-0' >
              <Image
                src="/images/profile/wallet.svg"
                width={70}
                height={70}
                alt=""
                className=''
              />
            </div>
            <div className='w-full' >

              <p className='w-full flex justify-between items-center mb-2' >
                <span className='text-sm lg:text-base' >
                  کیف پول
                </span>

                <span className='hidden lg:block text-xs' >
                  - تومان
                </span>
              </p>
              <Link
                href='#'
                className='flex items-center text-secondary-500 text-sm lg:text-sm'
              >
                فعالسازی
                <MdKeyboardArrowLeft className='text-xl' />
              </Link>
            </div>
          </div>
          <div
            className='shrink-0 grow-0 flex items-end gap-2'
          >
            <div className='lg:hidden size-[50px] shrink-0 grow-0' >
              <Image
                src="/images/profile/club-point.svg"
                width={70}
                height={70}
                alt=""
                className=''
              />
            </div>
            <div className='w-full' >

              <p className='w-full flex justify-between items-center mb-2' >
                <span className='text-sm lg:text-base' >
                  دیجی کلاب
                </span>

                <span className='hidden lg:block text-xs' >
                  - امتیاز
                </span>
              </p>
              <Link
                href='#'
                className='flex items-center text-secondary-500 text-sm lg:text-sm'
              >
                مشاهده مأموریت‌ها
                <MdKeyboardArrowLeft className='text-xl' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileEditNActions