'use client';

import Heading from '@/components/shared/Heading'
import { Models } from 'appwrite';
import React, { SetStateAction, useState } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'


const PropertiesTable = (
   {
      product,
      productDetails,
      openDetailsModal,
      setDetailsActiveIdx,
   }: {
      product: Models.Document;
      productDetails: ProductDetails;
      openDetailsModal: () => void;
      setDetailsActiveIdx: React.Dispatch<SetStateAction<number>>;
   }
) => {

   const [moreProperties, setMoreProperties] = useState(false);

   const properties = product?.details ? JSON.parse(product.details).properties : productDetails.properties;

   const currentDetialsProperties = (moreProperties) ? properties : properties.slice(0, 4);


  return (
     <section
               id="properties-table"
               className='px-4 lg:px-0'
            >
               <Heading
                  element='h2'
                  variant='h3'
                  style='underline'
                  className='py-4 lg:mb-8'
               >
                  مشخصات
               </Heading>

               <div className='flex flex-col lg:flex-row mb-4' >
                  <p className='w-[280px] text-lg text-text-2 hidden lg:block' >
                     مشخصات
                  </p>

                  <div className='grow-1' >
                     <table className='w-full text-sm lg:text-base' >
                        <tbody>

                           {
                              currentDetialsProperties.map(({ title, value }: { title: string; value: string }, i: number) => (
                                 <tr key={i}
                                    className=''
                                 >
                                    <th className='w-2/5 lg:w-1/3 bg-neutral-100 lg:bg-light-1 px-2 lg:px-0 lg:py-4 text-right border-b lg:border-b-0 font-normal text-text-3' >
                                       {
                                          title
                                       }
                                    </th>
                                    <td className='h-10 lg:h-auto px-2 lg:px-0 lg:py-4 text-text-2 border-b' >
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

                  <button
                     onClick={() => setMoreProperties(mp => !mp)}
                     className='cursor-pointer text-secondary-500 mt-4 hidden lg:block'
                  >
                     {
                        !moreProperties
                        ? (
                           <span className='flex items-center' >
                              بیشتر
                              <MdKeyboardArrowLeft />
                           </span>
                        ): (
                           <span className='flex items-center' >
                              بستن
                              <MdKeyboardArrowLeft />
                           </span>
                        )
                     }
                  </button>
                  <button className="lg:hidden bg-neutral-100 rounded-full flex items-center gap-2 text-sm py-2 px-2 mx-auto"
                     onClick={() => {
                        setDetailsActiveIdx(2);
                        openDetailsModal()
                     }}
                  >
                     مشاهده ادامه مشخصات
                     <MdKeyboardArrowLeft />
                  </button>
            </section>
  )
}

export default PropertiesTable