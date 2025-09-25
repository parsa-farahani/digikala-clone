'use client';

import QueryProvider from '@/lib/react-query/QueryProvider';
import StoreProvider from '@/redux/StoreProvider';
import React from 'react'
import ClientLoadInitials from './ClientLoadInitials';
import { usePathname } from 'next/navigation';


const ClientLayout = (
   {
      children,
      loginModalSlot,
   }: {
      children: React.ReactNode;
      loginModalSlot: React.ReactNode;
   }
) => {

   const pathname = usePathname();

  const showModal = pathname.startsWith('/login') || pathname.startsWith('/signup'); 

   
  return (
    /* React-Query Provider */
    <QueryProvider>
       {/* Redux Provider */}
      <StoreProvider>
         <ClientLoadInitials>
            {
               children
            }
            {
               showModal ? loginModalSlot : null
            }
         </ClientLoadInitials>
      </StoreProvider>
    </QueryProvider>
  )
}

export default ClientLayout