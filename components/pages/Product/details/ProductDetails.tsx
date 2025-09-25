'use client';

import Divider from '@/components/shared/Divider';
import Heading from '@/components/shared/Heading';
import React, { useState } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md';
import IntroSeller from '../intro/IntroSeller';
import DetailsNav from './DetailsNav';
import { useActiveSection } from '@/hooks/useActiveSection';
import ExpertReview from './ExpertReview';

import { productDetails } from '@/data/product';
import PropertiesTable from './PropertiesTable';
import Modal from '@/components/modal/Modal';
import DetailsMobileModal from './DetailsMobileModal';
import UsersFeedbacks from './UsersFeedbacks';
import { Models } from 'appwrite';
// import { useProduct } from '@/app/(content)/(public)/products/[productId]/ProductsProvider';



const ProductDetails = (
   {
      product,
      navlinks,
      productMiniInfo,
   }: {  
      product?: Models.Document;
      navlinks: PNavLink[];
      productMiniInfo: ProductMiniInfo[];
   }
) => {
   

   // index of current active part of page, which exists in the 'navlinks' for user navigation
   const [activeNavlinkIdx, setActiveNavlinkIdx] = useState(0);

   const [moreIntro, setMoreIntro] = useState(false);

   const [detailsModalInitIdx, setDetailsModalInitIdx] = useState(0);
   const [isDetalsModalOpen, setIsDetailsModalOpen] = useState(false);

   const openDetailsModal = () => {
      setIsDetailsModalOpen(true);
   }

   const closeDetailsModal = () => {
      setIsDetailsModalOpen(false);
   }


   useActiveSection(navlinks, setActiveNavlinkIdx);
   

   const handleNavigation = (index: number) => {
      setActiveNavlinkIdx(index);

      // navigation-scrolling logic
      const sectionId = (navlinks[index]?.href).slice(1);

      const section = document.getElementById(sectionId);

      const top = (section?.getBoundingClientRect()?.top) ?? 0;

      if (typeof window !== undefined) {
         window.scrollBy({
            behavior: 'smooth',
            top: top - 150,
         })
      }
   }



  return (
    <div className='relative z-5 bg-light-1' >
      <DetailsNav
         navlinks={navlinks}
         handleNavigation={handleNavigation}
         activeNavlinkIdx={activeNavlinkIdx}
      />

      <div
         className='xl:flex gap-4'
      >

         <div
            id="review"
         >
            <section
               id="intro"
               className='max-lg:hidden'
            >
               <Heading
                  element='h2'
                  variant='h3'
                  style='underline'
                  className='py-4 mb-4'
               >
                  معرفی
               </Heading>
               <div>
                  <p className={`leading-8 text-text-2 ${moreIntro ? '' : 'line-clamp-3'}`}>
                     {
                        product?.description ?? productDetails.intro
                     }
                  </p>

                  <button
                     onClick={() => setMoreIntro(mi => !mi)}
                     className='cursor-pointer text-secondary-500 mt-4'
                  >
                     {
                        !moreIntro
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
               </div>
            </section>

            <Divider className='!h-[3px] bg-neutral-100 my-8 max-lg:hidden' />

            <ExpertReview
               product={product!}
               productDetails={productDetails}
               openDetailsModal={openDetailsModal}
               setDetailsActiveIdx={setDetailsModalInitIdx}
            />

            <Divider className='!h-[3px] bg-neutral-100 my-8' />

            <PropertiesTable
               product={product!}
               openDetailsModal={openDetailsModal}
               setDetailsActiveIdx={setDetailsModalInitIdx}
               productDetails={productDetails}
            />

            <Divider className='!h-[8px] lg:!h-[3px] bg-neutral-100 my-8' />

            {/* Comments & Questions */}
            <UsersFeedbacks
               product={product!}
            />

         </div>

         <div
            className='h-auto self-stretch hidden xl:blockcl'
         >
            <div
               className='sticky top-[160px]'
            >
               <IntroSeller
                  product={product!}
                  seller={product?.seller ?? 'نام فروشنده'}
                  productMiniInfo={productMiniInfo}
               />
            </div>
         </div>
      </div>

      <Modal
         isOpen={isDetalsModalOpen}
         onClose={() => closeDetailsModal()}
      >
         <DetailsMobileModal
            onClose={() => closeDetailsModal()}
            productDetails={productDetails}
            activeIdx={detailsModalInitIdx}
            setActiveIdx={setDetailsModalInitIdx}
         />
      </Modal>
    </div>
  )
}

export default ProductDetails