'use client';

import Divider from "@/components/shared/Divider";
import Heading from "@/components/shared/Heading";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from "react-icons/md";
import CommentSubmission from "./CommentSubmission";
import Modal from "@/components/modal/Modal";
import { ArrowLeft } from "lucide-react";
import ProductCommentForm from "@/components/forms/ProductCommentForm";
import AICommentsSummary from "./AICommentsSummary";
import { ImSortAmountDesc } from "react-icons/im";
import CommentExcerpt from "./CommentExcerpt";
import ActionRow from "@/components/shared/ActionRow";
import { GoComment } from "react-icons/go";
import CommentExcerptMobile from "./CommenExcerptMobile";
import ProductAllComments from "./ProductAllComments";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Models } from "appwrite";
import { useGetComments } from "@/lib/react-query/api/comments";
import LoaderDot from "@/components/shared/LoaderDot";

const ProductComments = (
   { 
      product,
      userImages,
   }: {
      product: Models.Document;
      userImages: string[];
   }
) => {


   const [sortOrder, setSortOrder] = useState<"newest" | "buyers" | "helpful">(
      "newest"
   );

   const [isOpenAllComments, setIsOpenAllComments] = useState(false);


   const openAllComments = () => {
      setIsOpenAllComments(true);
   }

   const closeAllComments = () => {
      setIsOpenAllComments(false);
   }


   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSortOrder(e.currentTarget.value as "newest" | "buyers" | "helpful");
   };

   // modal for comment-submission
   const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

   const openCommentModal = () => {
      setIsCommentModalOpen(true);
      disableBodyScroll(document.documentElement);
   };
   
   const closeCommentModal = () => {
      setIsCommentModalOpen(false);
      enableBodyScroll(document.documentElement);
   };

   const {  
      data: productComments,
      isSuccess: isSuccessLoadingComments,
      isPending: isLoadingComments,
   } = useGetComments(product?.$id);

   // console.log(productComments);


   return (
      <>
         <div
            className='flex items-center justify-between lg:mb-10 px-4'
         >
            <Heading
               variant='h3'
               element='h2'
               className='lg:hidden'
            >
               دیدگاه کاربر‌ها
            </Heading>
            <Heading
               variant='h3'
               element='h2'
               className='hidden lg:block pb-4'
               style='underline'
            >
               امتیاز و دیدگاه کاربران
            </Heading>

            <button
               className='flex lg:hidden items-center gap-1 text-sm text-text-2'
               onClick={() => openAllComments()}
            >
               مشاهده
               {" "}
               <span>
                  {
                     100
                  }
               </span>
               {" "}
               دیدگاه
               <MdKeyboardArrowLeft />
            </button>
         </div>
      <div className="flex flex-col lg:flex-row lg:gap-6">
         {/* Sticky Comment-Submission  */}
         <div className="mb-4 lg:shrink-0 lg:grow-0 lg:w-[280px] lg:h-auto lg:self-stretch px-4">
            <CommentSubmission
               productComments={(productComments && (!('error' in productComments))) ? productComments?.documents : null}
               openCommentModal={openCommentModal}
            />
         </div>

         {/* Comments  */}
         <div className="lg:grow">
            {/* Images  */}
            <div id="comments"  className="max-w-full overflow-x-auto hidden-scroll">
               <div className="flex gap-2 lg:gap-8 w-fit h-[80px] lg:h-[60px] px-4 lg:px-0">
                  {userImages.map((image, i) => (
                     <div
                        key={i}
                        className="h-full shrink-0 grow-0 aspect-square border rounded-lg"
                     >
                        <Image
                           src={image}
                           width={80}
                           height={80}
                           alt=""
                           className="size-full block object-cover object-center rounded-[inherit]"
                        />
                     </div>
                  ))}
               </div>
               <div className="mt-6 hidden lg:block">
                  <Link
                     href="#"
                     className="text-sm text-secondary-500 flex items-center"
                  >
                     مشاهده همه
                     <MdKeyboardArrowLeft />
                  </Link>
               </div>
            </div>

            <Divider className="hidden lg:block my-6" />

            {/* Comment Items  */}
            <div className="flex flex-col">
               {/* AI Summary - Desktop  */}
               <AICommentsSummary />

               <Divider className="hidden lg:block my-6" />

               <form className="hidden lg:block mb-4">
                  <div className="max-w-full overflow-x-auto hidden-scroll flex gap-4 items-center mb-10">
                     <Heading
                        element="h4"
                        variant="base"
                        className="flex gap-1"
                     >
                        <ImSortAmountDesc className="text-xl" />
                        مرتب سازی:
                     </Heading>
                     <div className="flex gap-4 items-center justify-start">
                        <div>
                           <div>
                              <input
                                 id="c-sorting-newest"
                                 type="radio"
                                 name="comment-sorting"
                                 value="newest"
                                 className="peer sr-only"
                                 checked={sortOrder === "newest"}
                                 onChange={handleChange}
                              />
                              <label
                                 htmlFor="c-sorting-newest"
                                 className={`text-sm text-text-3 peer-checked:text-primary-500 peer-checked:font-bold cursor-pointer`}
                              >
                                 جدید‌ترین
                              </label>
                           </div>
                        </div>
                        <div>
                           <div>
                              <input
                                 id="c-sorting-comments"
                                 type="radio"
                                 name="comment-sorting"
                                 value="buyers"
                                 className="peer sr-only"
                                 checked={sortOrder === "buyers"}
                                 onChange={handleChange}
                              />
                              <label
                                 htmlFor="c-sorting-comments"
                                 className={`text-sm text-text-3 peer-checked:text-primary-500 peer-checked:font-bold cursor-pointer`}
                              >
                                 دیدگاه خریداران
                              </label>
                           </div>
                        </div>
                        <div>
                           <div>
                              <input
                                 id="c-sorting-helpful"
                                 type="radio"
                                 name="comment-sorting"
                                 value="helpful"
                                 className="peer sr-only"
                                 checked={sortOrder === "helpful"}
                                 onChange={handleChange}
                              />
                              <label
                                 htmlFor="c-sorting-helpful"
                                 className={`text-sm text-text-3 peer-checked:text-primary-500 peer-checked:font-bold cursor-pointer`}
                              >
                                 مفید‌ترین
                              </label>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div>
                     <Heading element="h4" variant="h3" className="mb-4">
                        فیلتر براساس موضوع
                     </Heading>

                     <div className="flex flex-wrap gap-3 text-text-2">
                        <button className="border rounded-full py-1 px-4">
                           قیمت و ارزش خرید
                        </button>
                        <button className="border rounded-full py-1 px-4">
                           کیفیت و کارایی
                        </button>
                        <button className="border rounded-full py-1 px-4">
                           شباهت یا مغایرت
                        </button>
                     </div>
                  </div>
               </form>

               {/* User Comments  */}
               <div className="lg:w-full max-w-full overflow-x-auto hidden-scroll">
                  <div className="w-fit lg:w-full flex items-center gap-2 lg:flex-col px-4 py-6 lg:p-0">
                     {
                        (isLoadingComments)
                        ? (
                           <LoaderDot />   
                        ): (isSuccessLoadingComments && (!('error' in productComments)) && productComments?.documents?.length > 0)
                        ? (
                              productComments?.documents?.map((commentData: Models.Document, i: number) => (
                                 <CommentExcerpt
                                    key={i}
                                    className="hidden lg:block "
                                    commentData={commentData}
                                 />
                              ))
                        ): (
                           Array.from({ length: 3 }).map((_, i: number) => (
                             <CommentExcerpt
                                 key={i}
                                 className="hidden lg:block "
                                 commentData={null}
                              /> 
                           ))
                        )
                     }
                     
                     {
                        (isLoadingComments)
                        ? (
                           <LoaderDot />   
                        ): (isSuccessLoadingComments && (!('error' in productComments)) && productComments?.documents?.length > 0)
                        ? (
                              productComments?.documents?.map((commentData: Models.Document, i: number) => (
                                 <CommentExcerptMobile
                                    key={i}
                                    className="lg:hidden"
                                    commentData={commentData}
                                 />
                              ))
                              
                           )
                        : (
                           Array.from({ length: 3 }).map((_, i: number) => (
                             <CommentExcerptMobile
                                    key={i}
                                    className="lg:hidden"
                                    commentData={null}
                                 />
                           ))
                        )
                     }

                     <button className="lg:hidden flex flex-col items-center justify-center gap-3 w-[140px]"
                        onClick={openAllComments}
                     >
                        <span className="size-12 rounded-full border-2 border-text-2 flex-center">
                           <ArrowLeft className="text-text-2 size-[30px]" />
                        </span>
                        <span className="text-xs">مشاهده همه</span>
                     </button>
                  </div>

                  <div className="px-4 border-t py-6 hidden lg:block">
                     <button className="text-sm text-secondary-500 flex items-center cursor-pointer">
                        120 دیدگاه دیگر
                        <MdKeyboardArrowDown />
                     </button>
                  </div>
               </div>
               <button
                  className="px-4 border-t pt-3 lg:hidden"
                  onClick={openCommentModal}
               >
                  <ActionRow
                     title="دیدگاه خود را درباره این کالا بنویسید"
                     icon={<GoComment />}
                     className="!items-start !text-sm"
                  />
                  <span className="text-xs text-text-3">
                     با ثبت دیدگاه بر روی کالاها 5 امتیاز در دیجی‌کلاب دریافت
                     کنید
                  </span>
               </button>
            </div>
         </div>

         {/* Comment Form Modal  */}
         <Modal
            isOpen={isCommentModalOpen}
            onClose={closeCommentModal}
            fullHeight
            className={`transition-transform duration-400 ${
               isCommentModalOpen
                  ? "translate-y-0"
                  : "translate-y-full lg:translate-y-0"
            }`}
         >
            <ProductCommentForm
               product={product}
               onClose={closeCommentModal}
            />
         </Modal>

         {/* All Comments Modal - Mobile  */}
         <Modal
            isOpen={isOpenAllComments}
            onClose={closeAllComments}
            fullHeight
            className=""
         >
            <ProductAllComments
               productComments={(productComments && (!('error' in productComments))) ? productComments.documents : null}
               onClose={closeAllComments}
               userImages={userImages}
            />
         </Modal>
      </div>
      </>
   );
};

export default ProductComments;
