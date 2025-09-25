import Heading from "@/components/shared/Heading";
import TripleProductsCarousel from "@/components/shared/TripleProductsCarousel";
import { bestSellers } from "@/data";
import Link from "next/link";
import { BsFire } from "react-icons/bs";


const HotSellers = () => {
   return (
      <div className="lg:p-4 rounded-xl lg:border border-border-1 space-y-6">
         <Heading
            element="h2"
            variant="h2"
            className="relative w-full flex items-center gap-2 lg:justify-center px-2"
         >
            <span className="hidden lg:block">
               <BsFire className="lg:text-yellow-500" />
            </span>
            <span>داغ ترین چند ساعت گذشته</span>

            <Link
               href="#"
               className="absolute left-0 top-2 text-secondary-500 text-sm"
            >
               مشاهده همه
            </Link>
         </Heading>

         <div>
            <TripleProductsCarousel products={bestSellers} />
         </div>
      </div>
   );
};

export default HotSellers;
