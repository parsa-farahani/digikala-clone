'use client';
import Heading from '@/components/shared/Heading'
import React, { SetStateAction } from 'react'
import { IoClose } from 'react-icons/io5'


const navlinks = [
   {
      title: 'معرفی کالا',
      href: '#modal-intro',
   },
   {
      title: 'بررسی تخصصی',
      href: '#modal-expert-review',
   },
   {
      title: 'جدول مشخصات',
      href: '#modal-properties-table',
   },
]


const DetailsMobileModal = (
   {
      productDetails,
      onClose,
      activeIdx,
      setActiveIdx
   }: {
      productDetails: ProductDetails;
      onClose: () => void;
      activeIdx: number;
      setActiveIdx: React.Dispatch<SetStateAction<number>>;
   }
) => {


   const handleNavigation = (index: number) => {
      setActiveIdx(index);
   }



  return (
    <div
      className='bg-light-1 rounded-t-xl'
    >
      <div
         className='h-[80px] flex items-center justify-between px-4 text-text-2'
      >
         <Heading
            element='h2'
            variant='h3'
         >
            مشخصات و بررسی کالا
         </Heading>
         <button
            className='ibtn'
            onClick={() => onClose()}
         >
            <IoClose />
         </button>
      </div>

      <div>
         {/* Tab buttons  */}
         <nav className={`h-full col-start-1 col-end-2 row-start-1 row-end-2 transition-opacity duration-200 max-w-full overflow-x-auto hidden-scroll border-t border-b`} >
                  <div
                     className='h-full w-fit flex gap-8 items-center bg-light-1 relative px-4'
                  >
                     {
                        navlinks.map(({ title }, i) => (
                           <button
                                 key={i}
                                 onClick={() => {
                                    handleNavigation(i)
                                 }}
                                 className={`relative whitespace-nowrap text-sm py-3 ${activeIdx === i ? 'text-text-1 before:absolute before:content-[""] before:bottom-0 before:left-0 before:h-[4px] before:w-full before:rounded-t-full before:bg-dark-1 transition-all duration-300 pointer-events-none' : 'text-text-3'}`}
                           >
                              {
                                 title
                              }
                           </button>
                        ))
                     }

                  </div>
               </nav>

         {/* Tab panels  */}
         <div
            className='relative h-[240px] overflow-y-auto hidden-scroll'
         >
            {/* Intro  */}
            <div
               className={`absolute top-0 left-0 w-full p-4 text-sm leading-7 ${activeIdx === 0 ? 'opacity-100' : 'h-0 opacity-0 pointer-events-none'}`}
            >
               {
                  productDetails.intro
               }
            </div>

            {/* Expert Review  */}
            <div
               className={`absolute top-0 left-0 w-full p-4 text-sm leading-7 ${activeIdx === 1 ? 'opacity-100' : 'h-0 overflow-clip opacity-0 pointer-events-none'}`}
            >
               {
               productDetails.expertReview.map((review, i) => (
               <div key={i} className="relative ">
                  <Heading
                     element="h3"
                     variant="base"
                     className="lg:hidden text-text-1 mb-3"
                  >
                     {review.title}
                  </Heading>
                  {review.desc.map((d: string, i: number) => (
                     <p key={i} className="leading-8 text-text-2 mb-4 max-lg:text-sm max-lg:text-text-1">
                        {d}
                     </p>
                  ))}
                  {review.items ? (
                     <ul className="space-y-5 text-text-2 text-base max-lg:text-sm max-lg:text-text-1">
                        {review.items.map((item, i) => (
                           <li key={i}>
                              <p>{item}</p>
                           </li>
                        ))}
                     </ul>
                  ) : null}
               </div>
            ))}
            </div>

            {/* Properties Table  */}
            <div
               className={`absolute top-0 left-0 w-full p-4 text-sm leading-7 ${activeIdx === 2 ? 'opacity-100' : 'h-0 opacity-0 pointer-events-none'}`}
            >
<div className='flex flex-col' >
                  <p className='w-[280px] mb-4 text-lg text-text-2' >
                     مشخصات
                  </p>

                  <div className='grow-1' >
                     <table className='w-full' >
                        <tbody>

                           {
                              productDetails.properties.map(({ title, value }, i) => (
                                 <tr key={i}
                                    className=''
                                 >
                                    <th className='w-1/3 py-2 px-2 text-right font-normal text-text-3 bg-neutral-100 border-b' >
                                       {
                                          title
                                       }
                                    </th>
                                    <td className='py-2 px-2 text-text-2 border-b' >
                                       {
                                          value
                                       }
                                    </td>
                                 </tr>
                              ))
                           }
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default DetailsMobileModal