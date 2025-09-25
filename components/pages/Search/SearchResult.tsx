'use client';

import { discountsGridProducts } from '@/data'
import React, { Fragment, useEffect } from 'react'
import SearchResultProduct from './SearchResultProduct'
import LoaderDot from '@/components/shared/LoaderDot'
import { useInView } from "react-intersection-observer";
import { useGetProducts } from '@/lib/react-query/api/products';
import { Models } from 'appwrite';
import { Skeleton } from '@/components/ui/skeleton';
import ProductSkeletons from './skeletons/ProductSkeleton';


// Client side fetching
const SearchResult = (
  {
    searchQuery,
  }: {
    searchQuery: string;
  }
) => {


  // Observer for Infinite Scrolling
  const { ref, inView } = useInView();


  // When user enters any 'search term' in the header's searchbar, it is received as a 'URL searchparams' (?q=...) and it is passed down to here. we can pass the query to react-quer -> Appwrite api to get 'filtered products' (other filters also can be applied this way!)
  const {
    data: products,
    isPending: isPendingFetchProducts,
    fetchNextPage
  } = useGetProducts(searchQuery);

  
  
  // Infinite Scrolling - When user views the specific element, the next series of the products are loaded
  useEffect(() => {
    
    
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage])
  
  
  const hasActualData = (products?.pages) && (products?.pages[0].total as number > 0);
  // const hasActualData = true;

  return (
    <div
      className='w-full lg:border-t border-gray-300'
    >
      <div
         className='w-full'
      >
        {
          (hasActualData)
          ? (
            <div
              className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5  [&>*]:border-b md:[&>*]:border-r md:max-xl:[&>*:nth-of-type(2n+1)]:border-r-0 xl:max-2xl:[&>*:nth-of-type(3n+1)]:border-r-0 2xl:max-3xl:[&>*:nth-of-type(4n+1)]:border-r-0 3xl:[&>*:nth-of-type(5n+1)]:border-r-0'
            >
              {
                products?.pages?.map((page, i) => {
    
                  const p = page;
                  
                  return (
                    <Fragment
                      key={i}
                    >
                      {
                        (p.documents as Models.Document[]).map((product: AppwriteDocument) => {
    
                          return (
                            <SearchResultProduct
                              key={product.$id}
                              product={product as Models.Document}
                            />
                          )
                        })
                      }
                    </Fragment>
                  )
                })

              }
            </div>
          ) : (isPendingFetchProducts) ? (
            <div
              className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5  [&>*]:border-b md:[&>*]:border-r md:max-xl:[&>*:nth-of-type(2n+1)]:border-r-0 xl:max-2xl:[&>*:nth-of-type(3n+1)]:border-r-0 2xl:max-3xl:[&>*:nth-of-type(4n+1)]:border-r-0 3xl:[&>*:nth-of-type(5n+1)]:border-r-0'
            >
              {
                Array.from({ length: 10 }).map((_, i: number) => (
                  <div key={i} className='h-[340px]' >
                    <ProductSkeletons  />
                  </div>
                ))
              }
            </div>
            // <div
            //   className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5  [&>*]:border-b md:[&>*]:border-r md:max-xl:[&>*:nth-of-type(2n+1)]:border-r-0 xl:max-2xl:[&>*:nth-of-type(3n+1)]:border-r-0 2xl:max-3xl:[&>*:nth-of-type(4n+1)]:border-r-0 3xl:[&>*:nth-of-type(5n+1)]:border-r-0'
            // >
            //   {
            //     discountsGridProducts.map((p, i) => (
            //       <SearchResultProduct
            //         key={i}
            //         product={p}
            //       />
            //     ))
            //   }
            // </div>
          ): (
            <div className='w-full p-4 text-center' >
              <p>
                محصول مورد نظر پیدا نشد!
              </p>
            </div>
          )
        }

      </div>
      {
        hasActualData
        ? (
          <div
            ref={ref}
          >
            <LoaderDot />
          </div>
        ): null
      }
    </div>
  )
}

export default SearchResult