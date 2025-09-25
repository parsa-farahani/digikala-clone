'use client';

import Button from '@/components/shared/Button'
import React from 'react'


const notFound = () => {

   const reloadPage = () => {
      if (!window) return;

      window.location.reload();
   }
  
  return (
    <div
      className='fixed inset-0 bg-light-1 flex-center flex-col gap-10'
      >
         <p
         className='text-7xl text-primary-600'
         >
         404
      </p>
      <p>
         محصول مورد نظرتان پیدا نشد!
      </p>
      <div className='flex flex-col lg:flex-row  items-center gap-2' >
        <Button
          href="/"
          className=''
        >
          بازگشت به صفحه اصلی
        </Button>
        <Button
          className=''
          onClick={() => reloadPage()}
        >
          تلاش دوباره
        </Button>
      </div>
      </div>
  )
}

export default notFound