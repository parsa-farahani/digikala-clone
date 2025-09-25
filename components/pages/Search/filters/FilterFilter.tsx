'use client';

import Button from '@/components/shared/Button';
import Heading from '@/components/shared/Heading'
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from 'react-icons/md';
import FiltersDelivery from './delivery/FiltersDelivery';
import FiltersStock from './stock/FiltersStock';
import { ArrowRight } from 'lucide-react';
import FilterCategory from './category/FilterCategory';
import { categories, sellerTypes } from '@/data/search';
import FilterBrand from './brand/FilterBrand';
import { brands } from '@/data/search';
import FilterPriceRange from './priceRange/FilterPriceRange';
import FilterSellerType from './sellerType/FilterSellerType';

export type Delivery = 'seller' | 'fast' | null;
export type Stock = 'existing' | 'existing_digikala' | null;


/*
  In this component , we have 2 types of filter-controller:
    
    1. the buttons which open a 'filterContents' which is a div, stacked on top of the filters menu -> the content inside this div is determined based on 'curntFilterContentId' -> and inside the switch/case (curntFilterMenuContent)

    2. the 'checkboxes' (switches) which add/remove fitlters on searchParams
*/

const FilterFilter = (
  {
    onClose
  }: {
    onClose?: () => void;
  }
) => {

  
  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams.get('q');


  const [delivery, setDelivery] = useState<Delivery>(searchParams.get('delivery') as Delivery ?? null);
  const [stock, setStock] = useState<Stock>(searchParams.get('stock') as Stock ?? null);



  const [curntFilterContentId, setCurntFilterContentId] = useState<string | null>(null);

  const mainFiltersMenuRef = useRef<HTMLDivElement | null>(null);

  // To avoid 2 scrolling menus at the same time - I disable scrolling of the main-menu when the secondary menu is opened
  useEffect(() => {

    const mainFiltersMenuEl = mainFiltersMenuRef.current;
    if (!mainFiltersMenuEl) return;

    if (curntFilterContentId) {
      mainFiltersMenuEl.style.overflowY = 'clip';
    } else {
      mainFiltersMenuEl.style.overflowY = 'auto';
    }
  }, [curntFilterContentId])

  const hasFilters = (q) ? searchParams.size >= 2 : searchParams.size >= 1;

  const clearFilters = () => {
    router.replace(`/search${q ? `?q=${q}` : ''}`);
    setDelivery(null);
    setStock(null);
  }


  const handleQueryChange = useCallback((newQuey: Record<string, string | null>) => {

    const curntParams = new URLSearchParams(searchParams.toString())

    Object.entries(newQuey).forEach(([key, value]) => {
      if (value === null || value === "") {
        curntParams.delete(key);
      } else {
        curntParams.set(key, value);
      }
    })

    router.push(`/search?${curntParams.toString()}`, { scroll: false });
  }, [router, searchParams])


  const toggleCurntFilterContentId = (menuId: string) => {
    if (curntFilterContentId === menuId) {
      setCurntFilterContentId(null);
    } else {
      setCurntFilterContentId(menuId);
    }
  }

  // The tab which is opened when user clicks on each filter-type
  let curntFilterMenuContent = null;
  let curntFilterMenuTitle;

  switch (curntFilterContentId) {
    case 'category':
      curntFilterMenuContent = (
        <FilterCategory
          handleQueryChange={handleQueryChange}
          categories={categories}
        />
      )
      curntFilterMenuTitle = 'دسته بندی';
      break;
    case 'brand':
      curntFilterMenuContent = (
        <FilterBrand
          // handleQueryChange={handleQueryChange}
          brands={brands}
        />
      )
      curntFilterMenuTitle = 'برند';
      break;
    case 'price-range':
      curntFilterMenuContent = (
        <FilterPriceRange
          handleQueryChange={handleQueryChange}
        />
      )
      curntFilterMenuTitle = 'محدوده قیمت';
      break;
    case 'seller-type':
      curntFilterMenuContent = (
        <FilterSellerType
          sellerTypes={sellerTypes}
        />
      )
      curntFilterMenuTitle = 'نوع فروشنده';
      break;
  
    default:
      break;
  }

  

  return (
    <section className='h-full bg-light-1 flex flex-col lg:border lg:rounded-md'>
      <div
        ref={mainFiltersMenuRef}
        className='relative grow-1 max-h-[calc(100%-70px)] lg:max-h-full overflow-y-auto'
      >
        <div className='py-2 flex px-6 gap-6 items-center sticky z-[999] top-0 bg-light-1 lg:rounded-md lg:static' >
          <button
            className='ibtn pr-0 text-2xl text-text-2 lg:hidden pl-0'
            onClick={() => onClose ? onClose() : null}
          >
            <IoClose />
          </button>
          <Heading
            element='h2'
            variant='h3'
          >
            <span className='lg:text-text-2 lg:text-2xl' >
                فیلترها
            </span>
          </Heading>
        </div>

        <div
          className='relative px-4 text-text-2 grow-1'
        >

            {/* Category  */}
            <div>
              <button
                className='w-full flex justify-between items-center border-b py-3 text-base cursor-pointer'
                onClick={() => toggleCurntFilterContentId('category')}
                aria-haspopup
                aria-expanded={curntFilterContentId === 'category'}
              >
                <h3 className='text-base lg:text-lg' >
                  <span>
                    دسته‌بندی
                  </span>
                </h3>
                <MdKeyboardArrowLeft className='text-2xl lg:hidden' />
                <MdKeyboardArrowDown className='text-2xl hidden lg:block text-text-3/50' />
              </button>
              
              <div className={`max-h-[240px] overflow-y-auto ${(curntFilterContentId === 'category') ? 'border-b' : 'h-0 overflow-clip'}`} >
                {
                  <FilterCategory
                    categories={categories}
                    handleQueryChange={handleQueryChange}
                  />
                }
              </div>
            </div>

            {/* Brand  */}
            <div>
              <button
                className='w-full flex justify-between items-center border-b py-3 text-base cursor-pointer'
                onClick={() => toggleCurntFilterContentId('brand')}
                aria-haspopup
                aria-expanded={curntFilterContentId === 'brand'}
              >
                <h3 className='text-base lg:text-lg' >
                  <span>
                    برند
                  </span>
                </h3>
                <MdKeyboardArrowLeft className='text-2xl lg:hidden' />
                <MdKeyboardArrowDown className='text-2xl hidden lg:block text-text-3/50' />
              </button>

              <div className={`max-h-[240px] overflow-y-auto ${(curntFilterContentId === 'brand') ? 'border-b' : 'h-0 overflow-clip'}`} >
                {
                  <FilterBrand
                    brands={brands}
                    // handleQueryChange={handleQueryChange}
                  />
                }
              </div>
            </div>

            {/* Delivery Filters  */}
            <FiltersDelivery
              delivery={delivery}
              setDelivery={setDelivery}
              handleQueryChange={handleQueryChange}
            />

            {/* Price Range */}
            <div>
              <button
                className='w-full flex justify-between items-center border-b py-3 text-base cursor-pointer'
                onClick={() => toggleCurntFilterContentId('price-range')}
                aria-haspopup
                aria-expanded={curntFilterContentId === 'price-range'}
              >
                <h3 className='text-base lg:text-lg' >
                  <span>
                    محدوده قیمت
                  </span>
                </h3>
                <MdKeyboardArrowLeft className='text-2xl lg:hidden' />
                <MdKeyboardArrowDown className='text-2xl hidden lg:block text-text-3/50' />
              </button>

              <div className={`max-h-[240px] overflow-y-auto ${(curntFilterContentId === 'price-range') ? 'border-b' : 'h-0 overflow-clip'}`} >
                {
                  <FilterPriceRange
                    handleQueryChange={handleQueryChange}
                  />
                }
              </div>
            </div>
            
            {/* Existing Products */}
            {/* Existing Products in Digikala */}
            <FiltersStock
              stock={stock}
              setStock={setStock}
              handleQueryChange={handleQueryChange}
            />

            {/* Seller Type */}
            <div>
              <button
                className='w-full flex justify-between items-center py-3 text-base cursor-pointer'
                onClick={() => toggleCurntFilterContentId('seller-type')}
              >
                <h3 className='text-base lg:text-lg' >
                  <span>
                    نوع فروشنده
                  </span>
                </h3>
                <MdKeyboardArrowLeft className='text-2xl lg:hidden' />
                <MdKeyboardArrowDown className='text-2xl hidden lg:block text-text-3/50' />
              </button>

              <div className={`max-h-[240px] overflow-y-auto ${(curntFilterContentId === 'seller-type') ? '' : 'h-0 overflow-clip'}`} >
                {
                  <FilterSellerType
                    sellerTypes={sellerTypes}
                  />
                }
              </div>
            </div>

        </div>


        {/* the filter content which is placed on top of previous contents */}
        {/* when curntFilterContentId is 'null', it means that we have no active filters content yet, so the content becomes 'hidden' */}
        <div
          className={`absolute z-[9999] inset-0 size-full bg-light-1 flex flex-col lg:hidden ${curntFilterContentId === null ? 'hidden' : ''}`}
        >
          <div
            className='w-full shrink-0 grow-0 bg-light-1 sticky top-0 p-2 flex items-center gap-4'
          >
            <button
              className='ibtn text-2xl'
              onClick={() => setCurntFilterContentId(null)}
            >
              <ArrowRight />
            </button>
            {
              curntFilterMenuTitle
            }
          </div>
          <div className='grow-1 overflow-y-auto' >
            {
              curntFilterMenuContent
            }
          </div>
        </div>
      </div>

      <div
        className='h-[70px] relative flex items-center gap-3 px-6 py-4 border-t mt-auto bg-light-1 lg:hidden'
      >
        <Button
          className='text-sm flex-3'
        >
          مشاهده 500 محصول
        </Button>
        <Button
          className='text-sm flex-2'
          disabled={!hasFilters}
          onClick={clearFilters}
        >
          حذف فیلتر
        </Button>
      </div>
    </section>
  )
}

export default FilterFilter