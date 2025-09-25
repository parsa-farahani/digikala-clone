import { offersProducts, offersMarketImages } from '@/data';
import OffersCarousel from './OffersCarousel';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const SuperMarketCarousel = (
   {
      timerDate
   }: {
      timerDate: string;
   }
) => {


  return (
   <div>

      <div className='lg:hidden'>
         <OffersCarousel
         products={offersProducts}
         timerDate={timerDate}
         className='!from-[#9CC44C] !to-[#6BB927]'
         />
      </div>

      <div className='hidden lg:block'>
         <div
            className='w-full h-[110px] border rounded-xl bg-light-2 p-4 flex items-center justify-between gap-4'
            style={{
               backgroundImage: `url('/images/home/offers/market/bg-lg.svg')`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: '50% 100%',
            }}
         >

            <div className='grow-1 flex gap-2 items-center'>
               <Image
                  src={'/images/home/offers/market/cart.webp'}
                  width={80}
                  height={80}
                  alt=''
                  className='w-[80px]'
               />
               
               <Image
                  src='/images/home/offers/market/title.svg'
                  width={80}
                  height={80}
                  alt=''
                  className='grow-1 max-w-[240px]'
               />
               
               <div className='green-badge'>
                  تا 40٪ تخفیف
               </div>
            </div>

            <div
               className="flex items-center gap-2"
            >
               <div className='h-full flex gap-2 items-center'>

                  {
                     offersMarketImages.map(({ image }, i) => (
                        <div key={i} className='relative size-18 rounded-full bg-light-1'>

                           <Image
                              src={image}
                              width={80}
                              height={80}
                              alt=''
                              className='block w-full h-full object-cover object-center rounded-[inherit]'
                           />

                           <span
                              className='discount-badge absolute bottom-0 right-0'
                           >
                              40%
                           </span>
                        </div>
                     ))
                  }
               </div>

               <Link
                  href='#'
                  className='bg-light-1 text-green-500 flex items-center gap-2 py-4 px-5 rounded-full text-sm'
               >
                  <span>
                     بیش از 100 کالا
                  </span>
                  <span>
                     <ArrowLeft className='grow-0 shrink-0 text-sm' />
                  </span>
               </Link>
            </div>
         </div>
      </div>
   </div>
  )
}


export default SuperMarketCarousel