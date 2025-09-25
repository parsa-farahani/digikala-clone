import { HeadingEl } from './Heading';
import Link from 'next/link';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import ProductCard from './ProductCard';
import { ArrowLeft } from 'lucide-react';

type MobileProductsRowProps = {
   heading: string;
   headingEl?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
   subHeading?: string;
   href?: string;
   data: {
      id: string;
      image: string;
      title: string;
      price: number;
      discountPerc: number;
   }[]
}

const MobileProductsRow = (
   {
      heading,
      headingEl,
      subHeading,
      data,
      href, // "مشاهده همه"
   }: MobileProductsRowProps
) => {

  return (
    <div className='w-full space-y-4'>
      
      <div
         className='w-full flex items-center justify-between px-4'
      >
         <div
            className='flex flex-col items-start'
         >
            <HeadingEl
               element={headingEl ?? 'h3'}
            >
               {
                  heading
               }
            </HeadingEl>
            <span
               className='text-text-3 text-sm'
            >
               {
                  subHeading
               }
            </span>
         </div>

         <Link
            href={href ?? '/search'}
            className='text-text-2 text-sm flex items-center gap-1'
         >
            <span>
               مشاهده همه
            </span>
            <span>
               <MdKeyboardArrowLeft className='text-xl' />
            </span>
         </Link>
      </div>


      <div
         className='flex gap-2 w-full max-w-full overflow-x-auto overflow-y-clip hidden-scroll px-4'
      >
         {
            data?.map((product, i) => (
               <ProductCard key={i} product={product} variant='row' />
            ))
         }
         <div
            className='block border rounded-lg w-[140px] shrink-0 grow-0 relative'
         >
            <Link
               href="#"
               className="absolute inset-0 h-full text-lg flex flex-col justify-center items-center gap-4"
            >
               <span className="size-12 rounded-full border-2 border-text-2 flex-center">
                  <ArrowLeft className="text-text-2 size-[30px]" />
               </span>
               <span className="text-text-2 text-sm">مشاهده همه</span>
            </Link>
         </div>
      </div>
    </div>
  )
}

export default MobileProductsRow