'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react';


const queryClient = new QueryClient();

// This code is only for TypeScript
declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__:
      import("@tanstack/query-core").QueryClient;
  }
}

// This code is for all users
// window.__TANSTACK_QUERY_CLIENT__ = queryClient;


const QueryProvider = (
   {
      children
   }: {
      children: React.ReactNode;
   }
) => {
  return (
    <QueryClientProvider
      client={queryClient}
    >
      {
         children
      }
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default QueryProvider;