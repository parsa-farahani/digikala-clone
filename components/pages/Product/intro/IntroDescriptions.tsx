import Breadcrumb from "@/components/shared/Breadcrumb";
import Divider from "@/components/shared/Divider";
import Heading from "@/components/shared/Heading";
import Link from "next/link";
import React, { SetStateAction } from "react";
import { BiHeart } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { IoShareSocialOutline, IoStar } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SizeSelector from "./SizeSelector";
import DeliveryServices from "./DeliveryServices";
import ColorSelector from "./ColorSelector";
import { Models } from "appwrite";
import { useGetComments } from "@/lib/react-query/api/comments";

type IntroDescriptionsProps = {
   descBreadcrumbs: ProductBreadCrumb[];
   sizes: ProductSizes[];
   colors: ProductColor[];
   selectedSizeId: string;
   selectedColorId: string;
   setSelectedSizeId: React.Dispatch<SetStateAction<string>>;
   setSelectedColorId: React.Dispatch<SetStateAction<string>>;
   properties: ProductProperties[];
   product: Models.Document;
};

const IntroDescriptions = ({
   product,
   descBreadcrumbs,
   sizes,
   selectedSizeId,
   setSelectedSizeId,
   colors,
   selectedColorId,
   setSelectedColorId,
   properties,
}: IntroDescriptionsProps) => {

   const productProperties = product?.details ? JSON.parse(product.details).properties :  properties;

   const {
      data: productComments,
      isPending: isLoadingProductComments,
   } = useGetComments(product?.$id);

   const rating = (productComments && 'documents' in productComments) ? productComments?.documents?.reduce((acc: number, comment: Models.Document) => {
      return acc + Math.floor(comment.rating / 2);
   }, 0) : 0;


   const finalRating = (productComments && 'documents' in productComments && productComments?.documents?.length > 0) ? parseFloat((rating / productComments.documents.length).toFixed(1)) : 0;


   return (
      <section
         id='desc'
         className={`relative grow-1 z-2 lg:mt-0 bg-light-1 rounded-t-2xl lg:rounded-t-0 border-t border-light-1 lg:border-border-1 lg:rounded-t-none`}
      >
         <div className="lg:hidden h-[50px] bg-pink-100 rounded-t-2xl border-t-3 border-primary-500">
            <p className="h-full text-primary-600 font-heydari p-2 px-4 text-base  flex items-center translate-y-[-10px]">
               فروش ویژه
            </p>
         </div>

         <div className="translate-y-[-10px] lg:translate-y-0 bg-light-1 rounded-t-2xl lg:rounded-t-0 pt-4">
            
            <div className="flex lg:hidden justify-between items-center px-3">
               <Breadcrumb navlinks={descBreadcrumbs} />

               <div className="flex gap-1 items-center">
                  <button className="ibtn text-xl text-text-2">
                     <IoShareSocialOutline className="rotate-y-180" />
                  </button>
                  <button className="ibtn text-xl text-text-2">
                     <BiHeart />
                  </button>
               </div>
            </div>

            <div className="">
               <Heading element="h1" variant="h3" className="mb-6 max-lg:px-2 lg:hidden" >
                  {
                     product?.name ?? 'نام محصول'
                  }
               </Heading>

               <p className="text-sm flex lg:flex-col lg:items-start items-center gap-2 max-w-full overflow-x-auto hidden-scroll px-4">
                  <span className="flex gap-1">
                     <span>
                        <IoStar className="text-yellow-500" />
                     </span>
                     <span>
                        <span>
                           {finalRating}
                        </span>{" "}
                        <span className="text-text-3">
                           (
                              {
                                 (productComments && 'documents' in productComments) ? productComments?.documents?.length : 0
                              }
                           )
                        </span>
                     </span>
                  </span>

                  <span className="flex items-center whitespace-nowrap gap-1">
                     <button className="flex items-center gap-1 px-1.5 py-1.5 lg:py-1 rounded-full bg-indigo-100 text-text-2">
                        <span>
                           <BsStars className="text-purple" />
                        </span>
                        <span>خلاصه دیدگاه‌ها</span>
                        <span className="lg:hidden">
                           <MdKeyboardArrowLeft />
                        </span>
                     </button>
                     <button className="flex items-center gap-1 px-1.5 py-1.5 lg:py-1 rounded-full bg-neutral-200 text-text-2">
                        <span>386 دیدگاه</span>
                        <span>
                           <MdKeyboardArrowLeft />
                        </span>
                     </button>
                     <button className="flex items-center gap-1 px-1.5 py-1.5 lg:py-1 rounded-full bg-neutral-200 text-text-2">
                        <span className="lg:hidden">9 پرسش و پاسخ</span>
                        <span className="hidden lg:block">9 پرسش</span>
                        <span>
                           <MdKeyboardArrowLeft />
                        </span>
                     </button>
                  </span>
               </p>
            </div>
         </div>
         <Divider className="my-4" />
         <div className="px-4">
            <div className="space-y-4" >
               <SizeSelector
                  sizes={sizes}
                  selectedSizeId={selectedSizeId}
                  setSelectedSizeId={setSelectedSizeId}
               />

               <ColorSelector
                  colors={colors}
                  selectedColorId={selectedColorId}
                  setSelectedColorId={setSelectedColorId}
               />
            </div>

            <Link href="#" className="block mt-4 text-sm lg:mt-4">
               <span className="flex items-center space-x-2 text-green-500 lg:hidden">
                  توضیح خریداران درباره اندازه کالا
                  <MdKeyboardArrowLeft />
               </span>
               <span className="lg:flex items-center space-x-2 text-green-500 hidden">
                  خریداران درباره اندازه کالا چه گفته اند؟
                  <MdKeyboardArrowLeft />
               </span>
            </Link>
         </div>

         <Divider className="my-6 lg:hidden" />

         <div id="properties" className="px-4 lg:mt-4">
            <div className="flex justify-between items-center">
               <Heading element="h2" variant="h3" className="lg:mb-4">
                  <span className="lg:hidden">مشخصات کالا</span>
                  <span className="hidden lg:block">ویژگی‌ها</span>
               </Heading>

               <Link
                  href="#"
                  className="flex items-center gap-2 text-text-2 text-sm lg:hidden"
               >
                  <span>مشاهده همه</span>
                  <MdKeyboardArrowLeft />
               </Link>
            </div>

            <div className="flex gap-2 lg:grid grid-cols-3 max-w-full  whitespace-nowrap overflow-x-auto hidden-scroll">
               {productProperties.map(({ title, value }: { title: string; value: string }, i: number) => (
                  <div
                     key={i}
                     className="p-2 border rounded-md lg:border-0 lg:bg-neutral-200 lg:flex lg:flex-col"
                  >
                     <h4 className="text-text-3 text-sm flex flex-nowrap items-center gap-2 lg:line-clamp-1">
                        {title}
                        <MdKeyboardArrowLeft className="lg:hidden" />
                     </h4>
                     <p className="text-sm mt-3 lg:line-clamp-1 lg:text-text-2">{value}</p>
                  </div>
               ))}
            </div>
            <div className="hidden lg:flex items-center py-4 gap-2">
               <Divider />
               <Link
                  href="#"
                  className="flex items-center gap-2 text-text-1 text-sm border rounded-md p-2 whitespace-nowrap"
               >
                  <span>مشاهده همه ویژگی‌ها</span>
                  <MdKeyboardArrowLeft className="text-2xl" />
               </Link>
               <Divider />
            </div>
         </div>

         <div className="hidden lg:block" >
            <DeliveryServices />
         </div>
      </section>
   );
};

export default IntroDescriptions;
