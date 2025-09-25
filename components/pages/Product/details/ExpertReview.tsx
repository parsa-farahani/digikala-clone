"use client";

import Heading from "@/components/shared/Heading";
import { Models } from "appwrite";
import React, { SetStateAction, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const ExpertReview = ({
   product,
   productDetails,
   openDetailsModal,
   setDetailsActiveIdx,
}: {
   product: Models.Document;
   productDetails: ProductDetails;
   openDetailsModal: () => void;
   setDetailsActiveIdx: React.Dispatch<SetStateAction<number>>;
}) => {
   const [moreExpertReview, setMoreExpertReview] = useState(false);

   const expertReviews = product?.details ? JSON.parse(product.details).expertReviews : productDetails.expertReview;


   const currentDetailsExpertReviews = moreExpertReview
      ? expertReviews
      : expertReviews.slice(0, 1);

      
   return (
      <section id="expert-review"
         className="px-4 lg:px-0"
      >
         <Heading
            element="h2"
            variant="h3"
            style="underline"
            className="py-4 lg:mb-8"
         >
            بررسی تخصصی
         </Heading>

         <div className="space-y-6">
            <div className="max-lg:max-h-[200px] max-lg:overflow-y-clip" >
               {currentDetailsExpertReviews.map((review: { title: string; desc: string[]; items: string[] }, i:number) => (
                  <div key={i} className="relative max-lg:line-clamp-5">
                     <Heading
                        element="h3"
                        variant="h3"
                        className="hidden lg:block text-text-1 mb-3"
                     >
                        {review.title}
                     </Heading>
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
                           {review.items.map((item, i: number) => (
                              <li key={i}>
                                 <p>{item}</p>
                              </li>
                           ))}
                        </ul>
                     ) : null}
                  </div>
               ))}
            </div>
            <button
               onClick={() => setMoreExpertReview((me) => !me)}
               className="hidden lg:block cursor-pointer text-secondary-500 mt-4"
            >
               {!moreExpertReview ? (
                  <span className="flex items-center">
                     بیشتر
                     <MdKeyboardArrowLeft />
                  </span>
               ) : (
                  <span className="flex items-center">
                     بستن
                     <MdKeyboardArrowLeft />
                  </span>
               )}
            </button>

            <button className="lg:hidden bg-neutral-100 rounded-full flex items-center gap-2 text-sm py-2 px-2 mx-auto"
               onClick={() => {
                  setDetailsActiveIdx(0);
                  openDetailsModal()
               }}
            >
               مشاهده ادامه بررسی تخصصی
               <MdKeyboardArrowLeft />
            </button>
         </div>
      </section>
   );
};

export default ExpertReview;
