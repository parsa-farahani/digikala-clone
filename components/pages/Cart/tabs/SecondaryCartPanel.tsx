import Image from 'next/image'
import React from 'react'

const SecondaryCartPanel = () => {
  return (
    <section>
      <h2 className='sr-only' >
         لیست سبد خرید بعدی
      </h2>

      <div className='flex flex-col items-center gap-4 p-4 border-b lg:border lg:mt-3 lg:rounded-md' >
         <Image
            src="/images/cart/empty-seccart.webp"
            width={1500}
            height={1500}
            alt=""
            className='w-[140px] lg:w-[200px]'
         />

         <h3
            className='text-base lg:text-2xl'
         >
            لیست خرید بعدی شما خالیست!
         </h3>
         <p className='text-text-3 text-[.6rem] lg:text-sm text-center leading-5' >
            شما می‌توانید محصولاتی که به سبد خرید خود افزوده‌اید و فعلا قصد خرید آن‌ها را ندارید، در لیست خرید بعدی قرار داده و هر زمان مایل بودید آن‌ها را به سبد خرید اضافه کرده و خرید آن‌ها را تکمیل کنید.
         </p>
      </div>
    </section>
  )
}

export default SecondaryCartPanel