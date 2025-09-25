import Link from 'next/link';

import { HeadingEl } from './Heading';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import ProductCard from './ProductCard';
import Image from 'next/image';

type CProduct = {
   image?: string;
   title?: string;
   price?: number;
   discountPerc?: number;
}

type QuadGridProps = {
   heading: string;
   headingEl?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
   subHeading?: string;
   href?: string;
   data: CProduct[];
}

type QuadGridGroupProps = {
   data: [QuadGridProps, QuadGridProps, QuadGridProps, QuadGridProps];
};


const QuadGrid = (
   {
      heading,
      headingEl,
      subHeading,
      data,
      href, // "مشاهده همه"
   }: QuadGridProps
) => {

   const products = data.slice(0, 4);


   return (
      <div
         className='w-full h-full flex flex-col items-stretch justify-between gap-4 p-4'
      >
         <div>
            <div
               className='flex flex-col gap-2 items-start'
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
         </div>

         <div
            className='flex-1 grid grid-cols-2 border-collapse border-spacing-[-.5px]'
         >
            {
               products.map((product, i) => (
                  <article
                     key={i}
                     className={`${i === 0 ? 'border-l' : (i === 2) ? 'border-l border-t' : (i === 3) ? 'border-t': ''} border-border-1 p-1`}
                  >
                     <Image
                        src={product.image ?? ''}
                        width={100}
                        height={100}
                        alt={product.title ?? ''}
                        className='h-full mx-auto'
                     />
                  </article>
               ))
            }
         </div>

         <Link
            href={href ?? '/search'}
            className='mt-auto text-secondary-500 text-sm flex items-center justify-center gap-1'
         >
            <span>
             مشاهده
            </span>
            <span>
               <MdKeyboardArrowLeft />
            </span>
         </Link>
      </div>
   )
}


const QuadGridGroup = (
   {
      data,
   }: QuadGridGroupProps
) => {

   const [
      gridData1,
      gridData2,
      gridData3,
      gridData4,
   ] = data;


  return (
    <div
      className='h-full flex border border-border-1 rounded-lg'
    >
      <div
         className='flex-1 border-l border-border-1'
      >
         <QuadGrid
            {...gridData1}
         />
      </div>
      <div
       className='flex-1 border-l border-border-1'
      >
         <QuadGrid
            {...gridData2}
         />
      </div>
      <div
          className='flex-1 border-l border-border-1'
      >
         <QuadGrid
            {...gridData3}
         />
      </div>
      <div
       className='flex-1'
      >
         <QuadGrid
            {...gridData4}
         />
      </div>
    </div>
  )
}

export default QuadGridGroup