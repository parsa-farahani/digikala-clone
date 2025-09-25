'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { withDigikala, customerServices, shoppingGuide, partners } from '@/data';
import Image from "next/image";
import Link from 'next/link';

const MobileLinksAccordion = () => {
   return (
      <nav
         className="border-b mb-6"
      >
         <Accordion type="multiple" className="w-full" defaultValue={[]}>
            <AccordionItem value="item-1">
               <AccordionTrigger className="text-black border-0">
                  با دیجی‌کالا
               </AccordionTrigger>
               <AccordionContent className="flex flex-col gap-4 text-balance">
                  {withDigikala.map((navLink, i) => (
                     <Link
                        key={i}
                        href={navLink.href}
                        className="text-text-2 text-sm"
                     >
                        {navLink.title}
                     </Link>
                  ))}
               </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
               <AccordionTrigger>خدمات مشتریان</AccordionTrigger>
               <AccordionContent className="flex flex-col gap-4 text-balance">
                  {customerServices.map((navLink, i) => (
                     <Link
                        key={i}
                        href={navLink.href ?? '#'}
                        className="text-text-2 text-sm"
                     >
                        {navLink.title}
                     </Link>
                  ))}
               </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
               <AccordionTrigger>راهنمای خرید از دیجی‌کالا</AccordionTrigger>
               <AccordionContent className="flex flex-col gap-4 text-balance">
                  {shoppingGuide.map((navLink, i) => (
                     <Link
                        key={i}
                        href={navLink.href ?? '#'}
                        className="text-text-2 text-sm"
                     >
                        {navLink.title}
                     </Link>
                  ))}
               </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
               <AccordionTrigger>شرکای تجاری</AccordionTrigger>
               <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="grid grid-cols-6 [&>*]:border-r [&>*]:border-b [&>*:nth-of-type(3n+1)]:border-r-0 [&>*:nth-last-of-type(1)]:border-b-0 [&>*:nth-last-of-type(2)]:border-b-0">
                     {partners.map((navLink, i) => (
                        <Link
                           key={i}
                           href={navLink.href ?? '#'}
                           className={`h-[80px] flex-center p-2 text-text-2 text-sm bg-light-1 ${
                              i >= partners.length - 2
                                 ? "col-span-3"
                                 : "col-span-2"
                           }`}
                        >
                           <span className="block flex-center">
                              <Image
                                 src={navLink.image}
                                 width={80}
                                 height={80}
                                 alt=""
                                 className="block size-full max-w-[80%]"
                              />
                           </span>
                        </Link>
                     ))}
                  </div>
               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </nav>
   );
};

export default MobileLinksAccordion;
