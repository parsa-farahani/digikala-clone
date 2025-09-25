import Link from "next/link";
import { articles } from "@/data";
import Heading from "@/components/shared/Heading";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Image from "next/image";

const Articles = () => {
   return (
      <>
         <Heading
            element="h2"
            variant="h3"
            className="relative w-full flex items-center justify-between gap-2 px-2"
         >
            <span>خواندنی ها</span>

            <Link
               href="#"
               className="text-text-2 lg:text-secondary-500 text-xs flex items-center"
            >
               <span className="block leading-8">
                  مطالب بیشتر در دیجی‌کالا مگ
               </span>
               <span>
                  <MdKeyboardArrowLeft className="text-xl" />
               </span>
            </Link>
         </Heading>
         <div className="flex gap-3 max-w-full overflow-x-auto hidden-scroll px-4">
            {articles.map(({ title, image }, i) => (
               <Link
                  key={i}
                  href="#"
                  className="min-w-[240px] border border-border-1 rounded-md"
               >
                  <article className="w-full h-full flex flex-col">
                     <div className="grow-1 rounded-t-md overflow-clip">
                        <Image
                           src={image}
                           width={300}
                           height={240}
                           alt={title}
                           className="block size-full object-cover object-center"
                        />
                     </div>

                     <div className="p-4 h-[80px] grow-0 shrink-0">
                        <h3 className="text-sm text-text-1 line-clamp-2">
                           {title}
                        </h3>
                     </div>
                  </article>
               </Link>
            ))}
         </div>
      </>
   );
};

export default Articles;
