import Typography from '@/components/shared/Typography';
import React, { SetStateAction } from 'react'
import { FaCheck } from 'react-icons/fa6';


type ColorSelectorProps = {
   colors: ProductColor[];
   selectedColorId: string;
   setSelectedColorId: React.Dispatch<SetStateAction<string>>;
};


const ColorSelector = (
   {
      colors,
      selectedColorId,
      setSelectedColorId,
   }: ColorSelectorProps
) => {
  const selectedColor = colors?.find((s) => selectedColorId === s.id);

   let colorTitle = "";

   if (selectedColor) {
      colorTitle = selectedColor.title;
   }


  return (
   <form>
         <p className='mb-2' >
            <Typography variant="h3" className="flex gap-2 items-center">
               <span className="block">رنگ:</span>{" "}
               <span className="text-base font-bold flex items-center gap-2">
                  {colorTitle}
                  <span className={`inline-block size-3 rounded-full outline`} style={{ backgroundColor: selectedColor?.color ?? '#ffffff' }} />
               </span>
            </Typography>
         </p>

         <div className="">
            <div className='hidden lg:flex  gap-2 font-normal text-text-2 text-xs' >
               {colors.map((color) => (
                  <label className=" " key={color.id}>
                     <input
                        name="color"
                        value={color.value}
                        type="radio"
                        className="peer sr-only"
                        checked={selectedColorId === color.id}
                        onChange={(e) => {
                           const value = e.currentTarget.value;

                           const selectedId =
                              colors.find((c) => c.value === value)?.id ??
                              "1";
                           setSelectedColorId(selectedId);
                        }}
                     />
                     <span className="inline-block border border-light-3 rounded-full size-[40px] flex-center cursor-pointer peer-checked:border-sky-500 peer-checked:border-4 peer-checked:[&>*>*]:inline-block p-1"
                     >
                        <span
                           className='size-full rounded-full flex-center'
                           style={{
                              backgroundColor: color.color
                           }}
                        >
                           <span className='hidden' >
                              <FaCheck className='text-white text-lg mix-blend-difference' />
                           </span>
                        </span>
                     </span>
                  </label>
               ))}
            </div>

            <div className='flex lg:hidden  gap-2 font-normal text-text-2 text-xs' >
               {colors.map((color) => (
                  <label className=" " key={color.id}>
                     <input
                        name="color-mobile"
                        value={color.value}
                        type="radio"
                        className="peer sr-only"
                        checked={selectedColorId === color.id}
                        onChange={(e) => {
                           const value = e.currentTarget.value;

                           const selectedId =
                              colors.find((c) => c.value === value)?.id ??
                              "1";
                           setSelectedColorId(selectedId);
                        }}
                     />
                     <span className="border border-border-1 rounded-lg h-[40px] w-[80px] flex items-center justify-center gap-2 cursor-pointer peer-checked:border-black peer-checked:[&>*>*]:flex">
                        <span
                           className='size-[20px] shrink-0 grow-0 rounded-full flex-center border border-light-3'
                           style={{
                              backgroundColor: color.color
                           }}
                        >
                           <span className='hidden size-full items-center justify-center' >
                              <FaCheck className='text-white text-sm mix-blend-difference' />
                           </span>
                        </span>
                        <span>
                           {color.title}
                        </span>
                     </span>
                  </label>
               ))}
            </div>
         </div>
      </form>
  )
}

export default ColorSelector