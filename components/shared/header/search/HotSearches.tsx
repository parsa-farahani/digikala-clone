import Link from 'next/link';

import { BsFire } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Chip from "../../Chip";

const hotSearches = [
   {
      title: "تیشرت",
      query: "تیشرت",
   },
   {
      title: "پلی استیشن",
      query: "پلی-استیشن",
   },
   {
      title: "طلا",
      query: "طلا",
   },
   {
      title: "ساعت مچی",
      query: "ساعت-مچی",
   },
];


const HotSearches = () => {
   return (
      <div className="relative z-[9999] text-text-2">
         <h4 className="text-lg mb-4 flex items-center gap-3">
            <span>
               <BsFire className="text-2xl text-text-3" />
            </span>
            <span>جستجوهای پرطرفدار</span>
         </h4>

         <div className="flex flex-wrap gap-3">
            {hotSearches.map((hs, i) => (
               <Link
                  key={i}
                  href={`/search?q=${hs.query}`}
                  >
                  <Chip
                     title={hs.title}
                  />
               </Link>
            ))}
         </div>
      </div>
   );
};

export default HotSearches;
