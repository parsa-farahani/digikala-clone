'use client';

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
// import { useSearchParams } from 'next/navigation'
import React, { SetStateAction } from 'react'
import { BiTimer } from 'react-icons/bi'
import { MdPerson4 } from 'react-icons/md'
import { Delivery } from '../FilterFilter';



const FiltersDelivery = (
   {
      delivery,
      setDelivery,
      handleQueryChange,
   }: {
      delivery: Delivery;
      setDelivery: React.Dispatch<SetStateAction<Delivery>>;
      handleQueryChange: (newQuery: Record<string, string | null>) => void;
   }
) => {

   //   const router = useRouter();
   // const searchParams = useSearchParams();
   
   const handleDeliveryChange = (newDelivery: Delivery) => {
      setDelivery(newDelivery);
      handleQueryChange({
         delivery: newDelivery,
      })
   }

  return (
    <div>
      {/* Fast Delivery */}
      <Label
         className='w-full flex justify-between items-center border-b py-3 text-base cursor-pointer'
      >
         <h3
            className='flex gap-2 items-center text-base lg:text-lg'
         >
            <span>
            ارسال سریع
            </span>
            <span>
            <BiTimer className="text-blue-800 text-lg rotate-y-180" />
            </span>
         </h3>
         <span
            dir='ltr'
            className='shrink-0 grow-0'
         >
            <Switch
            id="fast-delivery"
            name='delivery'
            value='fast'
            checked={delivery === 'fast'}
            onCheckedChange={
               (checked) => checked
               ? handleDeliveryChange('fast')
               : handleDeliveryChange(null)
            }
            disabled={false}
            />
         </span>
      </Label>

      {/* Seller Delivery */}
      <Label
         className='w-full flex flex-col border-b py-3 text-base cursor-pointer'
      >
         <span className='w-full flex items-center justify-between' >

            <h3
               className='flex gap-2 items-center text-base lg:text-lg'
            >
               <span>
               ارسال فروشنده
               </span>
               <span>
               <MdPerson4 className="text-orange-600 text-lg rotate-y-180" />
               </span>
            </h3>
            <span
               dir='ltr'
               className='shrink-0 grow-0'
            >
               <Switch
               id="seller-delivery"
               name='delivery'
               value='seller'
               checked={delivery === 'seller'}
               onCheckedChange={
                  (checked) => checked
                  ? handleDeliveryChange('seller')
                  : handleDeliveryChange(null)
               }
               disabled={false}
               />
            </span>
         </span>
         <p className='w-full text-sm text-text-3' >
            ارسال مستقیم و سریع‌تر
         </p>
      </Label>
    </div>
  )
}

export default FiltersDelivery