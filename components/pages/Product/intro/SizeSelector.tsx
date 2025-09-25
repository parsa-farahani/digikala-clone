import Typography from '@/components/shared/Typography';
import React, { SetStateAction } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const SizeSelector = (
   {
      sizes,
      selectedSizeId,
      setSelectedSizeId,
   }: {
      sizes: ProductSizes[];
      selectedSizeId: string;
      setSelectedSizeId: React.Dispatch<SetStateAction<string>>;
   }
) => {

   const selectedSize = sizes?.find((s) => selectedSizeId === s.id);

   let sizeTitle = "";

   if (selectedSize) {
      sizeTitle = selectedSize.title;
   }

  return (
   <form>
         <p>
            <Typography variant="h3" className="flex gap-2 items-center">
               <span className="lg:hidden">اندازه انتخاب شده:</span>
               <span className="hidden lg:block">اندازه:</span>{" "}
               <span className="font-sans text-base font-bold">
                  {sizeTitle}
               </span>
            </Typography>
         </p>

         <div className="">
            <div className='flex lg:hidden gap-2 font-geist font-normal text-text-2 text-xs' >
               {sizes.map((size) => (
                  <label className=" " key={size.id}>
                     <input
                        name="size"
                        value={size.value}
                        type="radio"
                        className="peer sr-only"
                        checked={selectedSizeId === size.id}
                        onChange={(e) => {
                           const value = +e.currentTarget.value;

                           const selectedId =
                              sizes.find((s) => s.value === value)?.id ??
                              "1";
                           setSelectedSizeId(selectedId);
                        }}
                     />
                     <span className="inline-block border border-border-1 rounded-lg h-[40px] w-[80px] flex-center cursor-pointer peer-checked:border-black">
                        {size.title}
                     </span>
                  </label>
               ))}
            </div>

            <div className='hidden lg:block' >
               <Select
                  dir='rtl'
                  onValueChange={(value) => {
                     setSelectedSizeId(value)
                  }}
                  name='size-mobile'
                  value={selectedSizeId}
               >
                  <SelectTrigger className="w-[200px] !h-[50px] !text-text-1 border border-dark-4/30">
                  <SelectValue placeholder={sizeTitle} />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectGroup>
                     {/* <SelectLabel>
                        اندازه ها
                     </SelectLabel> */}
                     {
                        sizes.map(({ id, value, title }) => (
                           <SelectItem
                              key={id}
                              value={id}
                              className='py-4'
                           >
                              <span
                                 className='font-yekan'
                              >
                                 {
                                    title
                                 }
                              </span>
                           </SelectItem>
                        ))
                     }
                  </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
         </div>
      </form>
  )
}

export default SizeSelector