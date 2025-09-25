import Image from "next/image";
import React, { useState } from "react";
import ProductImageCarousel from "./ProductImageCarousel";
import { BiDotsHorizontalRounded, BiHeart } from "react-icons/bi";
import ProductMiniInfoCarousel from "../ProductMiniInfoCarousel";
import { RxVideo } from "react-icons/rx";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuBellRing } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa6";
import { MdCompare } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import Modal from "@/components/modal/Modal";
import ProductImagesModalCarousel from "./productImages/ProductImagesModalCarousel";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const productActions = [
   {
      icon: <BiHeart/>,
      title: 'اضافه به علاقه‌مندی ها',
   },
   {
      icon: <IoShareSocialOutline/>,
      title: 'به اشتراک گذاری کالا',
   },
   {
      icon: <LuBellRing/>,
      title: 'اطلاع رسانی شگفت‌انگیز',
   },
   {
      icon: <FaChartLine/>,
      title: 'نمودار قیمت',
   },
   {
      icon: <MdCompare/>,
      title: 'مقایسه کالا',
   },
   {
      icon: <TfiMenuAlt/>,
      title: 'افزودن به لیست',
   },
]

const productImages = [
   '/images/products/shoes/shoe-1/img-1.jpg',
   '/images/products/shoes/shoe-1/img-2.jpg',
   '/images/products/shoes/shoe-1/img-3.jpg',
   '/images/products/shoes/shoe-1/img-4.jpg',
];

const productMiniInfo = [
   {
      title: '+500 نفر به این کالا علاقه دارند',
      emoji: '❤️',
   },
   {
      title: 'در سبد خرید +100 نفر',
      emoji: '🛒',
   },
   {
      title: '+100 بازدید در 24 ساعت اخیر',
      emoji: '👀',
   },
];


const IntroImages = (
   {
      imageUrls,
   }: {
      imageUrls: string[];
   }
) => {

   // images-modal (when user clicks on images)
   const [isImagesModalOpen, setIsImagesModalOpen] = useState(false);

   const openImagesModal = () => {
      setIsImagesModalOpen(true);
      disableBodyScroll(document.documentElement);
      document.querySelector('html')?.classList.add('black-scroll');
   }
   
   const closeImagesModal = () => {
      setIsImagesModalOpen(false);
      enableBodyScroll(document.documentElement);
      document.querySelector('html')?.classList.remove('black-scroll');
   }

   const images = (imageUrls && imageUrls.length > 0) ? imageUrls : productImages;

   return (
      <section className="lg:w-[35%] grow-0 shrink-0">
         <div className="h-[50px] hidden lg:block bg-pink-100 border-primary-500">
            <p className="h-full text-primary-600 font-heydari p-2 px-4 text-base  flex items-center ">
               فروش ویژه
            </p>
         </div>
         <div className="bg-light-1 fixed lg:static z-1 top-[100px] left-0 right-0 w-full">
            {/* Images Carousel - Mobile  */}
            <div className="h-full w-full">
               <div className="h-[400px] lg:hidden"
                  aria-haspopup={true}
                  aria-expanded={isImagesModalOpen}
                  onClick={openImagesModal}
               >
                  <ProductImageCarousel images={images} showDots />
               </div>
               <div className="size-full hidden lg:flex flex-col ">
                  <div className="h-[600px] flex">
                     <ul className="h-full w-[50px] shrink-0 grow-0 py-4 flex flex-col items-center justify-start">
                        {productActions.map(({ icon, title }, i) => (
                           <li key={i}>
                              <Tooltip>
                              <TooltipTrigger>
                                 <span className="ibtn py-1 text-2xl text-text-2">
                                    {icon}
                                 </span>
                              </TooltipTrigger>
                              <TooltipContent
                                 side="left"
                              >
                                 <p>
                                    {
                                       title
                                    }
                                 </p>
                              </TooltipContent>
                              </Tooltip>
                           </li>
                        ))}
                     </ul>
                     <div className="grow-1 cursor-pointer overflow-clip py-4"
                        aria-haspopup={true}
                        aria-expanded={isImagesModalOpen}
                        onClick={openImagesModal}
                     >
                        <Image
                           src={images[0]}
                           width={700}
                           height={700}
                           alt=""
                           className="w-full"
                           // unoptimized
                           loading="lazy"
                        />
                     </div>
                  </div>

                  <div className="h-fit shrink-0 grow-0 flex gap-2 py-2 pl-4">
                     {images.slice(0, 3).map((image, i) => (
                        <div
                           key={i}
                           className="border rounded-sm max-h-[100px] max-w-[100px] aspect-square grow-0 overflow-clip p-1 cursor-pointer bg-light-1"
                           aria-haspopup={true}
                           aria-expanded={isImagesModalOpen}
                           onClick={openImagesModal}
                        >
                           <Image
                              src={image}
                              width={400}
                              height={400}
                              alt=""
                              className="size-full object-cover object-center"
                           />
                        </div>
                     ))}
                     <div
                        key={images.length}
                        className="relative border rounded-sm max-h-[100px] max-w-[100px] aspect-square grow-0 overflow-clip p-1 cursor-pointer bg-light-1"
                     >
                        <Image
                           src={images[images.length - 1]}
                           width={400}
                           height={400}
                           alt=""
                           className="size-full object-cover object-center blur-xs"
                        />

                        <span className="absolute z-10 left-1/2 top-1/2 -translate-1/2">
                           <BiDotsHorizontalRounded className="text-text-2 text-3xl" />
                        </span>
                     </div>
                  </div>
               </div>
            </div>

            <span className="absolute top-4 right-4 bg-dark-2/50 backdrop-blur-md rounded-full size-[30px] flex-center text-light-1 lg:hidden">
               <RxVideo className="size-[1rem]" />
            </span>

            <div className="absolute right-4 bottom-2 lg:hidden">
               <ProductMiniInfoCarousel
                  data={productMiniInfo}
                  // isShowButtons={false}
               />
            </div>
         </div>

         <Modal
            isOpen={isImagesModalOpen}
            onClose={closeImagesModal}
            fullHeight
            className="!size-full max-h-none bg-dark-1 rounded-none"
         >
            <ProductImagesModalCarousel
               images={images}
               onClose={closeImagesModal}
            />
         </Modal>
      </section>
   );
};

export default IntroImages;
