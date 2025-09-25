import Image from 'next/image'
import React from 'react'


const advantages = [
   {
      title: 'امکان تحویل اکپرس',
      image: '/images/footer/benefits/express-delivery.svg',
   },
   {
      title: 'امکان پرداخت در محل',
      image: '/images/footer/benefits/cash-on-delivery.svg',
   },
   {
      title: '7 روز هفته، 24 ساعته',
      image: '/images/footer/benefits/support.svg',
   },
   {
      title: 'هفت روز ضمانت بازگشت کالا',
      image: '/images/footer/benefits/days-return.svg',
   },
   {
      title: 'ضمانت اصل بودن کالا',
      image: '/images/footer/benefits/original-products.svg',
   },
]


const Advantages = () => {


  return (
    <div
      className='mt-6 py-6 border-t'
    >
      <ul
         className='flex gap-2 text-text-3 text-sm text-center'
      >
         {
            advantages.map(({ title, image }, i) => (
               <li
                  key={i}
                  className='flex-1 flex gap-3 items-center justify-center'
               >
                  <Image
                     src={image}
                     width={80}
                     height={80}
                     alt=""
                     className='w-[40px] mix-blend-luminosity opacity-50'
                  />
                  <p>
                     {
                        title
                     }
                  </p>
               </li>
            ))
         }
      </ul>
    </div>
  )
}

export default Advantages