import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardArrowLeft } from "react-icons/md";

const relatedSearches = [
   {
      title: "تیشرت مردانه",
      query: "?q=تیشرت_مردانه",
   },
   {
      title: "تیشرت زنانه",
      query: "?q=تیشرت_زنانه",
   },
   {
      title: "موبایل",
      query: "?q=موبایل",
   },
   {
      title: "کتاب",
      query: "?q=کتاب",
   },
   {
      title: "کفش",
      query: "?q=کفش",
   },
];

const RelatedSearches = () => {
   return (
      <section className="border rounded-lg hidden lg:block py-4 px-6 mb-4">
         <h2 className="text-sm mb-4">جستجوهای مرتبط</h2>

         <ul>
            {relatedSearches.map(({ title, query }, i) => (
               <li key={i}>
                  <Link
                     href={`/search${query}`}
                     className={`flex items-center gap-4 py-3 border-border-1/50 ${
                        i !== relatedSearches.length - 1 ? "border-b" : ""
                     }`}
                  >
                     <BiSearch className="text-2xl" />
                     <span className="ml-auto">{title}</span>
                     <MdKeyboardArrowLeft className="text-2xl text-text-3" />
                  </Link>
               </li>
            ))}
         </ul>
      </section>
   );
};

export default RelatedSearches;
