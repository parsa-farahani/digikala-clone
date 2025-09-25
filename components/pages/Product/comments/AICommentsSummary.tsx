import AIComent from "@/components/icons/AIComent";
import Heading from "@/components/shared/Heading";
import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaMinusCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const AICommentsSummary = () => {
   return (
      <article className="hidden lg:block">
         <div className="flex items-start gap-2 mb-6">
            <div className="size-10">
               <AIComent />
            </div>
            <div>
               <Heading element="h3" variant="h3">
                  خلاصه دیدگاه‌های خریدارها
               </Heading>
               <p className="text-text-3 text-xs">تولید شده با هوش مصنوعی</p>
            </div>
         </div>
         <p className="bg-indigo-100/50 p-4 rounded-xl text-text-2">
            <span>
               این کتانی از نظر بسیاری از کاربران از لحاظ ظاهری زیبا و جذاب است
               و در برخی نظرات آمده که به راحتی با لباس‌های مختلف ست می‌شود.
               کاربران راضی هستند که این کفش نسبت به قیمتش ارزش مناسبی دارد و
               برای استفاده‌ی روزمره و پیاده‌روی‌های کوتاه مناسب است.
            </span>
            <span className="flex flex-wrap gap-1 mt-4">
               <span className="text-sm flex items-center gap-1 border px-2 py-2 rounded-full">
                  <FaCircleCheck className="text-green-500" />
                  زیبایی طراحی
               </span>
               <span className="text-sm flex items-center gap-1 border px-2 py-2 rounded-full">
                  <FaMinusCircle className="text-red-600" />
                  کیفیت پایین مواد
               </span>
            </span>
            <span className="text-text-3 text-xs mt-4">
               این خلاصه ممکن است دقیق نباشد
            </span>
         </p>
         <footer className="flex justify-start items-center py-2 gap-4">
            <p>آیا این خلاصه برایتان مفید بود؟</p>
            <div className="flex gap-4">
               <button className="ibtn bg-neutral-100 rounded-full !p-2 text-text-2">
                  <AiOutlineLike className="text-xl" />
               </button>
               <button className="ibtn bg-neutral-100 rounded-full !p-2 text-text-2">
                  <AiOutlineDislike className="text-xl" />
               </button>
            </div>
         </footer>
      </article>
   );
};

export default AICommentsSummary;
