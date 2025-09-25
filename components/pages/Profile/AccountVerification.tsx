import Link from 'next/link'
import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const AccountVerification = () => {
  return (
    <section className='p-4 lg:p-0' >
        <div className='w-full border rounded-md py-3 px-4' >

          <h2 className='sr-only' >
            تایید هویت
          </h2>

          <div className='flex flex-col lg:flex-row lg:items-center' >
            <div className='grow-1' >
              <p className='w-full flex items-start lg:items-center gap-1 text-orange-500 text-sm' >
                <BsInfoCircleFill className='font-sans text-2xl' />
                با تایید هویت می‌توانید‌ امنیت حساب کاربری‌تان را افزایش دهید و از امکان «خرید اعتباری» نیز استفاده کنید
              </p>
            </div>
            <Link
              href='#'
              className='w-full lg:w-fit lg:h-full lg:shrink-0 lg:grow-0 text-secondary-500 flex items-center gap-0.5 text-sm justify-end mt-4 lg:mt-0'
            >
              تایید هویت
              <MdKeyboardArrowLeft />
            </Link>
          </div>
        </div>

      </section>
  )
}

export default AccountVerification