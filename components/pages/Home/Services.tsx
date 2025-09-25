'use client';

import Link from "next/link";

import { services } from "@/data";
import { HiDotsHorizontal } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import Modal from "@/components/modal/Modal";
import { IoCloseOutline } from "react-icons/io5";
import Divider from "@/components/shared/Divider";
import Item from "@/components/shared/Item";
import { ArrowLeft } from "lucide-react";
import Heading from "@/components/shared/Heading";
import Image from "next/image";

const Services = () => {
   const [isOpen, setIsOpen] = useState(false);

   const scrollRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      const element = scrollRef.current;

      if (!element) return;

      element.scrollLeft = -element.scrollWidth;
   }, []);

   const closeModal = () => {
      setIsOpen(false);
   };

   return (
      <>
         <Heading element="h2" hidden>
            خدمات دیجی‌کالا
         </Heading>
         <div
            ref={scrollRef}
            className="w-full max-w-full px-8 overflow-auto hidden-scroll"
         >
            <div className="min-w-fit flex flex-nowrap gap-4 justify-between">
               {services.map((item) => (
                  <Link
                     key={item.title}
                     href={item.href ?? "#"}
                     className="px-4 basis-[100px]"
                  >
                     <Item image={item.image} title={item.title} />
                  </Link>
               ))}
               <button
                  onClick={() => setIsOpen(true)}
                  className="px-4 basis-[100px] cursor-pointer"
               >
                  <Item
                     image={
                        <span className="block size-13 bg-light-2 rounded-full flex-center text-text-3 text-3xl">
                           <HiDotsHorizontal />
                        </span>
                     }
                     title={"بیشتر"}
                  />
               </button>
            </div>
         </div>
         <Modal
            isOpen={isOpen}
            onClose={() => {
               setIsOpen(false);
            }}
            fullHeight
         >
            <div className="font-yekan bg-light-1 w-full h-full lg:w-[600px] lg:max-w-[80vw] py-2 px-2 rounded-lg max-lg:rounded-none lg:h-[700px] lg:max-h-[700px] flex flex-col">
               <div className="flex items-center justify-between grow-0 shrink-0 p-1.5">
                  <div className="px-4 text-lg">خدمات دیجی‌کالا</div>
                  <button className="ibtn text-xl" onClick={closeModal}>
                     <IoCloseOutline />
                  </button>
               </div>
               <Divider />
               <div className="grow-1 max-h-full overflow-y-auto">
                  <div>
                     <div className="flex flex-wrap gap-y-4 py-8 px-4">
                        {services.map((item) => (
                           <Link
                              key={item.title}
                              href={item.href ?? "#"}
                              className="px-4 basis-[100px]"
                           >
                              <Item image={item.image} title={item.title} />
                           </Link>
                        ))}
                     </div>

                     <div className="p-4 space-y-4">
                        <h4 className="text-base text-text-3">
                           سرویس‌های گروه دیجی‌کالا
                        </h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                           {services.map((item) => (
                              <Link
                                 key={item.title}
                                 href={item.href ?? "#"}
                                 className="p-4 basis-[100px] border-b lg:border border-border-1 lg:rounded-xl"
                              >
                                 <span className="flex items-start justify-start gap-2">
                                    <span className="block size-13">
                                       <Image
                                          src={item.image}
                                          width={100}
                                          height={100}
                                          alt="image"
                                          className="block size-full object-center object-cover"
                                       />
                                    </span>
                                    <span className="block text-xs lg:text-sm leading-6 text-center text-text-2 !line-clamp-2">
                                       {item.title}
                                    </span>

                                    <span className="text-text-3 mr-auto">
                                       <ArrowLeft />
                                    </span>
                                 </span>
                              </Link>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </>
   );
};

export default Services;
