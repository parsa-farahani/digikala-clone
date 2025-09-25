'use client'

// import logoImage from '/images/logo/digikala-logo.svg';
import Link from 'next/link';

import { Headphones } from 'lucide-react';
import BackTopBtn from './BackTopBtn';

import MobileLinksAccordion from './MobileLinksAccordion';

import { withDigikala, customerServices, shoppingGuide, partners, footerDescriptions, footerBenefits } from '@/data';
import FooterDescriptions from './FooterDescriptions';
import Input from '../Input';
import Button from '../Button';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import Aparat from '@/components/icons/Aparat';
// import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import Divider from '../Divider';
import { HiDotsHorizontal } from 'react-icons/hi';
import Image from 'next/image';
import { useForm } from 'react-hook-form';


const EmailSchema = z.object({
   email: z.email("لطفا اینجا را خالی نگذارید")
})

const Footer = (
   {
      className,
   }:
   {
      className?: string;
   }
) => {

   const form = useForm<z.infer<typeof EmailSchema>>({
      resolver: zodResolver(EmailSchema),
      defaultValues: {
         email: '',
      },
      mode: 'onChange',
   })

   const onSubmit = async (values: z.infer<typeof EmailSchema>) => {

      console.log(values);
   }

  return (
    <footer
      className={`lg:mt-20 mb-[70px] lg:mb-0  border-t border-border-1 ${className}`}
    >
      <div className='container px-4 lg:px-8 py-12 lg:pb-8'>

         <section
            className='flex items-center justify-center lg:justify-between mb-6'
         >

            <Link
               href="/"
               className='hidden lg:block w-[240px]'
            >
               <Image
                  src={'/images/logo/digikala-logo.svg'}
                  width={400}
                  height={100}
                  alt="logo home"
                  className=''
               />
            </Link>

            <div>
               <BackTopBtn />
            </div>
         </section>

         {/* Mobile  */}
         <div
            className='lg:hidden'
         >

            <section
               className='flex justify-between items-center border-b border-border-1 py-3'
            >
               <div
                  className='tetx-text-2 flex gap-2 items-center'
               >
                  <span
                     className='size-[40px] shrink-0 grow-0 bg-neutral-200 rounded-full flex-center text-text-2'
                  >
                     <Headphones />
                  </span>

                  <p
                     className='flex flex-col text-xs text-text-2 gap-2'
                  >
                     <span className="text-sm">
                        تماس با پشتیبانی
                     </span>
                     <span
                        className='text-text-3'
                     >
                        7 روز هفته، 24 ساعت
                     </span>
                  </p>
               </div>

               <Link
                  href="tel:******"
                  className='py-2 px-4 bg-neutral-200 rounded-full text-xs text-text-2 font-bold'
               >
                  تماس
               </Link>
            </section>

            <section
               className='flex justify-between items-center border-b border-border-1 py-3'
            >
               <div
                  className='tetx-text-2 flex gap-2 items-center'
               >
                  <span
                     className='size-[40px] shrink-0 grow-0 bg-neutral-200 rounded-full flex-center'
                  >
                     <Image
                        src='/images/logo/mini-logo.png'
                        width={40}
                        height={40}
                        alt='logo'
                        className='rounded-full'
                     />
                  </span>

                  <p
                     className='flex flex-col text-xs text-text-2 gap-2'
                  >
                     <span className="text-sm">
                        اپلیکیشن دیجی‌کالا
                     </span>
                     <span
                        className='text-text-3'
                     >
                        تجربه خرید بهتر در
                     </span>
                  </p>
               </div>

               <Link
                  href="tel:******"
                  className='py-2 px-4 bg-neutral-200 rounded-full text-xs text-text-2 font-bold'
               >
                  دانلود
               </Link>
            </section>

            <section>
               <MobileLinksAccordion />
            </section>

            <section>
               <FooterDescriptions />
            </section>
         </div>


         {/* Desktop  */}
         <div
            className='hidden lg:block'
         >
            <section
               className='flex items-stretch justify-start gap-4 text-sm text-text-2'
            >
               <p>
                  تلفن پشتیبانی ****** - ۰۲۱
               </p>

               <span className='pipe my-1' />

               <p>
                  ****** - ۰۲۱
               </p>

               <span className='pipe my-1' />

               <p>
                  ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
               </p>
            </section>

            <section
               className='mt-10 mb-14 flex items-center justify-evenly'
            >
               {
                  footerBenefits.map(({ title, image }, i) => (
                     <Link
                        href="#"
                        key={i}
                        className='flex flex-col items-center gap-3'
                     >
                        <Image
                           src={image}
                           width={80}
                           height={80}
                           alt={title}
                           className='block w-[60px]'
                        />
                        <p className='text-text-2 text-sm' >
                           {
                              title
                           }
                        </p>
                     </Link>
                  ))
               }
            </section>

            <section
               className='flex gap-10'
            >
               <nav className='w-3/4' >
                  <ul
                     className='grid grid-cols-3'
                  >
                     <li>
                        <span className='block text-lg mb-4'>
                           با دیجی‌کالا
                        </span>
                        <ul className="flex flex-col gap-4">
                           {
                              withDigikala.map((navlink, i) => (
                                 <li
                                    key={i}
                                 >
                                    <Link
                                       href={navlink.href ??'#'}
                                       className='text-text-3 text-base'
                                    >
                                       {
                                          navlink.title
                                       }
                                    </Link>
                                 </li>
                              ))
                           }
                        </ul>
                     </li>
                     <li>
                        <span className='block text-lg mb-4'>
                           خدمات مشتریان
                        </span>
                        <ul className="flex flex-col gap-4">
                           {
                              customerServices.map((navlink, i) => (
                                 <li
                                    key={i}
                                 >
                                    <Link
                                       href={navlink.href ?? '#'}
                                       className='text-text-3 text-base'
                                    >
                                       {
                                          navlink.title
                                       }
                                    </Link>
                                 </li>
                              ))
                           }
                        </ul>
                     </li>
                     <li>
                        <span className='block text-lg mb-4'>
                           راهنمای خرید از دیجی‌کالا
                        </span>
                        <ul className="flex flex-col gap-4">
                           {
                              shoppingGuide.map((navlink, i) => (
                                 <li
                                    key={i}
                                 >
                                    <Link
                                       href={navlink.href ?? '#'}
                                       className='text-text-3 text-base'
                                    >
                                       {
                                          navlink.title
                                       }
                                    </Link>
                                 </li>
                              ))
                           }
                        </ul>
                     </li>
                  </ul>
               </nav>

               <div className='grow-1 flex flex-col gap-4' >
                  <p className='text-lg text-text-1' >
                     همراه ما باشید!
                  </p>
                  <nav
                     className='flex gap-8 items-center justify-start mb-5'
                  >
                     <Link
                        href="https://instagram.com"
                        className='text-text-3'
                     >
                        <FaInstagram className='text-4xl' />
                     </Link>
                     <Link
                        href="https://instagram.com"
                        className='text-text-3'
                     >
                        <FaTwitter className='text-4xl' />
                     </Link>
                     <Link
                        href="https://instagram.com"
                        className='text-text-3'
                     >
                        <FaLinkedin className='text-4xl' />
                     </Link>
                     <Link
                        href="https://instagram.com"
                        className='text-text-3'
                     >
                        <Aparat className='size-12 text-text-3' />
                     </Link>
                  </nav>

                  <form
                     onSubmit={form.handleSubmit(onSubmit)}
                     className='flex flex-col gap-4'  
                  >
                     <p className='text-lg text-text-1' >
                        با ثبت ایمیل، از جدیدترین تخفیف‌ها با‌خبر شوید
                     </p>
                     <div
                        className='flex gap-2'
                     >
                        <Input
                           {...form.register('email')}
                           errorMessage={form.formState.errors.email?.message}
                           placeholder='ایمیل شما'
                           className='h-[50px] grow-1 !border-0 !bg-neutral-200 text-lg !caret-primary-600'
                        />

                        <Button
                           type='submit'
                           className='h-[50px] w-fit shrink-0 grow-0 disabled:bg-gray-600 disabled:opacity-50 !px-4'
                           disabled={!form.formState.isValid}
                        >
                           ثبت
                        </Button>
                     </div>
                  </form>
               </div>
            </section>

            <section
               className="mt-10"
            >
               <div
                  className='bg-slate-700 rounded-md p-4 flex items-center justify-between'
               >
                  <div
                     className='flex items-center gap-3'
                  >
                     <Image
                        src="/images/logo/mini-logo.png"
                        width={40}
                        height={40}
                        alt=""
                        className=''
                     />

                     <h5
                        className='text-light-1 text-2xl'
                     >
                        دانلود اپلیکیشن دیجی‌کالا
                     </h5>
                  </div>

                  <div
                     className='h-full flex items-center gap-4'
                  >
                     <Link
                        href="#"
                        className='block w-[140px] rounded-sm bg-light-1 overflow-clip'
                     >
                           <Image
                              src="/images/footer/download/coffe-bazzar.svg"
                              width={40}
                              height={40}
                              alt='bazar'
                              className='block size-full object-cover object-center'
                           />
                     </Link>
                     <Link
                        href="#"
                        className='block w-[140px] rounded-sm bg-light-1 overflow-clip'
                     >
                           <Image
                              src="/images/footer/download/myket.svg"
                              width={40}
                              height={40}
                              alt='bazar'
                              className='block size-full object-cover object-center'
                           />
                     </Link>
                     <Link
                        href="#"
                        className='block w-[140px] rounded-sm bg-light-1 overflow-clip'
                     >
                           <Image
                              src="/images/footer/download/sib-app.svg"
                              width={40}
                              height={40}
                              alt='bazar'
                              className='block size-full object-cover object-center'
                           />
                     </Link>

                     <Link
                        href="#"
                        className='size-10 aspect-square shrink-0 grow-0 rounded-sm bg-light-1 overflow-clip flex-center'
                     >
                        <HiDotsHorizontal className='text-3xl' />
                     </Link>
                     
                  </div>
               </div>
            </section>

            <Divider className='my-8' />

            <section>
               <div className='flex gap-10'>
                  <div
                     className='flex-1'
                  >
                     <FooterDescriptions />
                  </div>

                  <div
                     className='h-fit flex-1 flex gap-2 justify-end'
                  >
                     <Link
                        href="#"
                        className='w-[120px] aspect-square border rounded-xl flex-center'
                     >
                        <Image
                           src="https://placehold.co/600x400/png"
                           width={80}
                           height={80}
                           alt=''
                        />
                     </Link>
                     <Link
                        href="#"
                        className='w-[120px] aspect-square border rounded-xl flex-center'
                     >
                        <Image
                           src="https://placehold.co/600x400/png"
                           width={80}
                           height={80}
                           alt=''
                        />
                     </Link>
                     <Link
                        href="#"
                        className='w-[120px] aspect-square border rounded-xl flex-center'
                     >
                        <Image
                           src="https://placehold.co/600x400/png"
                           width={80}
                           height={80}
                           alt=''
                        />
                     </Link>
                     <Link
                        href="#"
                        className='w-[120px] aspect-square border rounded-xl flex-center'
                     >
                        <Image
                           src="https://placehold.co/600x400/png"
                           width={80}
                           height={80}
                           alt=''
                        />
                     </Link>
                  </div>
               </div>
            </section>
            
            <Divider className='my-8' />

            <p
               className='text-text-3 text-sm text-center'            
            >
               این یک نسخه شبیه سازی شده از وبسایت digikala.com است که تنها با ..هدف «غیر تجاری» و برای نمایش مهارت های توسعه وبسایت ساخته شده است.
            </p>

         </div>
      </div>
      <nav
         className="hidden lg:block"
      >
         <div className="grid grid-cols-48 [&>*]:border-r [&>*]:border-b">
            {partners.map((navLink, i) => (
               <Link
                  key={i}
                  href={navLink.href ?? '#'}
                  className={`h-[80px] flex-center p-2 text-text-2 text-sm bg-neutral-100 ${
                     i >= partners.length - 6
                        ? "col-span-8"
                        : "col-span-6"
                  }`}
               >
                  <span className="block flex-center">
                     <Image
                        src={navLink.image}
                        width={80}
                        height={80}
                        alt=""
                        className="block size-full max-w-[80px]"
                     />
                  </span>
               </Link>
            ))}
         </div>
      </nav>
   </footer>
  )
}

export default Footer