import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const MoreAccurateResults = () => {
  return (
    <section
      className="border-0 lg:border rounded-md py-3 px-4 mb-4"
    >
        <div
          className='flex justify-start gap-4 items-center mb-2'
        >
          <div className="border border-secondary-500 bg-secondary-500/10 rounded-full p-2 hidden lg:block" >
            <BiCategory className='text-2xl text-secondary-500' />
          </div>
          <h2 className='text-text-2 text-sm lg:text-lg' >
            برای نتایج دقیق‌تر یک دسته بندی انتخاب کنید  
          </h2>
        </div>
        <div className='flex flex-col lg:flex-row gap-2 items-center justify-start flex-wrap' >
          <button className="w-full lg:w-fit rounded-none border-b lg:border lg:rounded-full px-4 py-2 flex  gap-2 items-center text-text-3 text-sm" >
            <span>
              دسته بندی 1
            </span>
            <MdKeyboardArrowLeft className='text-xl mr-auto' />
          </button>
          <button className="w-full lg:w-fit rounded-none border-b-0 lg:border lg:rounded-full px-4 py-2 flex gap-2 items-center text-text-3 text-sm" >
            <span>
              دسته بندی 2
            </span>
            <MdKeyboardArrowLeft className='text-xl mr-auto' />
          </button>
        </div>
    </section>
  )
}

export default MoreAccurateResults