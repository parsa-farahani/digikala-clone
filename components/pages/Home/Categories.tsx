import Typography from "@/components/shared/Typography";
import { categories } from "@/data";
import Link from "next/link";

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import Heading from "@/components/shared/Heading";
import Image from "next/image";

type Category = {
   title: string;
   image: string;
   href: string;
};

type CategoryChunkT = [Category, Category];

const Category = ({
   category,
   size,
}: {
   category: Category;
   size: "small" | "large";
}) => {
   return (
      <Link
         key={category.title}
         href={category.title ?? "#"}
         className="p-4 flex flex-col items-center justify-start max-w-[100px]"
      >
         <div
            className={`size-[${
               size === "small" ? "70px" : "100px"
            }] rounded-full shrink-0 grow-0`}
         >
            <Image
               src={category.image}
               width={80}
               height={80}
               alt=""
               className="block w-full h-full object-cover object-center"
            />
         </div>

         <Typography
            variant={size === "small" ? "small" : "base"}
            className="text-text-2 text-center"
         >
            {category.title}
         </Typography>
      </Link>
   );
};

const CategoryChunk = ({ chunk }: { chunk: CategoryChunkT }) => {
   return (
      <div className="flex flex-col gap-4 items-center justify-between">
         <div>
            <Category size="large" category={chunk[0]} />
         </div>
         <div>
            <Category size="large" category={chunk[1]} />
         </div>
      </div>
   );
};

const Categories = () => {
   const catChunks: CategoryChunkT[] = [];

   for (let i = 0; i < categories.length; i += 2) {
      catChunks.push([categories[i], categories[i + 1] ?? undefined]);
   }

   return (
      <>
         <Heading element="h2" variant="h2" className="px-2 lg:hidden">
            دسته‌ بندی‌ ها
         </Heading>
         <Heading
            element="h2"
            variant="h2"
            className="hidden lg:block text-center"
         >
            خرید براساس دسته بندی
         </Heading>
         <div>
            {/* Mobile  */}
            <div className="overflow-x-auto hidden-scroll lg:hidden">
               <div className="w-max grid grid-cols-9 justify-center gap-1">
                  {categories.map((category: Category, i: number) => (
                     <Category key={i} size="small" category={category} />
                  ))}
               </div>
            </div>

            {/* Desktop  */}
            <div className="hidden lg:block">
               <Carousel
                  opts={{
                     align: "start",
                  }}
                  className="w-full"
               >
                  <CarouselContent>
                     {catChunks.map((chunk, i) => (
                        <CarouselItem key={i} className="basis-[180px]">
                           <CategoryChunk chunk={chunk} />
                        </CarouselItem>
                     ))}
                  </CarouselContent>
                  <CarouselPrevious className="size-10 cursor-pointer left-auto right-4 rotate-180 text-text-2 transition-opacity duration-200 disabled:opacity-0 disabled:pointer-events-none" />
                  <CarouselNext className="size-10 cursor-pointer right-auto left-4 rotate-180 text-text-2 transition-opacity duration-200 disabled:opacity-0 disabled:pointer-events-none" />
               </Carousel>
            </div>
         </div>
      </>
   );
};

export default Categories;
