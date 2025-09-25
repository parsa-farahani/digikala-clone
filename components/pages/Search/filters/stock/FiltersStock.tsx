'use client';

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
// import { useSearchParams } from 'next/navigation'
import React, { SetStateAction } from 'react'
import { Stock } from '../FilterFilter';



const FiltersStock = (
   {
      stock,
      setStock,
      handleQueryChange,
   }: {
      stock: Stock,
      setStock: React.Dispatch<SetStateAction<Stock>>,
      handleQueryChange: (newQuery: Record<string, string | null>) => void;
   }
) => {

   //   const router = useRouter();
   // const searchParams = useSearchParams();
   

   const handleStockChange = (newstock: Stock) => {
      setStock(newstock);
      handleQueryChange({
         stock: newstock,
      })
   }

  return (
    <div>
      {/* Fast stock */}
      <Label
         className='w-full flex justify-between items-center border-b py-3 text-base'
      >
         <h3
            className='flex gap-2 items-center text-base lg:text-lg'
         >
            <span>
            فقط کالاهای موجود
            </span>
         </h3>
         <span
            dir='ltr'
            className='shrink-0 grow-0'
         >
            <Switch
            name='stock'
            value='existing'
            checked={stock === 'existing'}
            onCheckedChange={
               (checked) => checked
               ? handleStockChange('existing')
               : handleStockChange(null)
            }
            disabled={false}
            />
         </span>
      </Label>

      {/* Seller stock */}
      <Label
         className='w-full flex justify-between items-center border-b py-3 text-base'
      >
         <h3
            className='flex gap-2 items-center text-base lg:text-lg'
         >
            <span>
            فقط کالاهای موجود در انبار دیجی‌کالا
            </span>
         </h3>
         <span
            dir='ltr'
            className='shrink-0 grow-0'
         >
            <Switch
            id="seller-stock"
            name='stock'
            value='seller'
            checked={stock === 'existing_digikala'}
            onCheckedChange={
               (checked) => checked
               ? handleStockChange('existing_digikala')
               : handleStockChange(null)
            }
            disabled={false}
            />
         </span>
      </Label>
    </div>
  )
}

export default FiltersStock