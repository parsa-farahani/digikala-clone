import Link from 'next/link';
import React from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md';

type Navlink = {
   title: string;
   href: string;
}

const Breadcrumb = (
   {
      navlinks,
      className,
      linkClassName,
   }: {
      navlinks: Navlink[];
      className?: string;
      linkClassName?: string;
   }
) => {

  return (
    <nav
      className={`h-full flex gap-2 items-center bg-light-1 ${className}`}
    >
      {
         navlinks.map(({ title, href }, i) => (
            <Link
               key={i}
               href={href}
               className={`text-text-3 text-sm flex items-center gap-2 ${linkClassName}`}
            >
               <span className="underline lg:no-underline underline-offset-6" >
                  {
                     title
                  }
               </span>
               {
                  i !== navlinks.length - 1 ? (
                     <span className='text-text-3' >
                        <MdKeyboardArrowLeft className='lg:hidden' />
                        <span className='hidden lg:inline-block' >
                           /
                        </span>
                     </span>
                  ): null
               }
            </Link>
         ))
      }
    </nav>
  )
}

export default Breadcrumb