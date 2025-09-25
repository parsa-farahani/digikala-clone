'use client';

import { usePathname } from 'next/navigation';
import { headerMobileNavLinks } from '@/data'
import { useAppSelector } from '@/redux/hooks'
import { selectCartItems, selectCartTotalQty } from '@/redux/slices/cart/cartSlice'
import Link from 'next/link';

import React from 'react'



const MobileNav = (
) => {

   const clientCartItems = useAppSelector(selectCartItems);
   // const cartTotalQty = useAppSelector(selectCartTotalQty);

   const pathname = usePathname();


  return (
    <nav
      className="h-[55px] z-[10] bg-light-1 fixed bottom-0 left-0 w-screen flex lg:hidden border-t border-border-1/50"
   >
            {
              headerMobileNavLinks.map((navLink, i) => (
                <Link
                  key={i}
                  href={navLink.href ?? '#'}
                  className="relative flex-1 flex-center flex-col gap-2 py-2 text-text-3"
                >
                  <span className='relative text-xl'>
                     {
                        (pathname === navLink.href)
                        ? (
                           navLink.icon.active
                        ): (
                           navLink.icon.default
                        )
                     }
                     {
                        (navLink.href.startsWith('/cart'))
                        ? (
                           <span className="absolute -right-1 -bottom-1 inline-flex items-center justify-center bg-primary-600 size-[14px] text-[10px] rounded-sm text-light-1">
                              {
                                 clientCartItems?.length ?? 0
                              }
                           </span>
                        ): null
                     }
                  </span>
                  <span className='text-xs md:text-sm'>
                     {
                     navLink.title
                     }
                  </span>
                </Link>
              ))
            }
         </nav>
  )
}

export default MobileNav