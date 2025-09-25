import ActionRow from "@/components/shared/ActionRow";
import Heading from "@/components/shared/Heading";
import Link from "next/link";
import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdOutlineDiscount } from "react-icons/md";

const Rules = () => {
   return (
      <section className="w-full relative z-3 bg-light-1">
         <Link
            href="#"
            className="hidden lg:flex items-center gap-2 text-sm text-text-2 border rounded-sm w-full mt-2 py-3 px-6"
         >
            <span>
               <BsInfoCircle />
            </span>
            فرایند قیمت گذاری و نظارت بر قیمت
            <span className="mr-auto">
               <MdKeyboardArrowLeft />
            </span>
         </Link>
         <Link
            href="#"
            className="hidden lg:flex items-center justify-end gap-2 text-sm text-text-3 rounded-sm w-full mt-2 py-3 px-6"
         >
            قسمت بهتری سراغ دارید؟
            <span className="">
               <MdOutlineDiscount />
            </span>
         </Link>
         <div className="lg:hidden px-4">
            <Heading element="h2" variant="h3" className="mb-2">
               شرایط و قوانین
            </Heading>

            <ActionRow
               title="گزارش قیمت مناسب‌تر"
               icon={<MdOutlineDiscount />}
               titleContClassName="border-b"
               iconClassName="rotate-y-180"
            />
            <ActionRow
               title="گزارش مشخصات کالا یا موارد قانونی"
               icon={<BsInfoCircle />}
               titleContClassName="border-b"
               iconClassName="rotate-y-180"
            />
            <ActionRow
               title="روش قیمت گذاری و نظارت بر قیمت"
               icon={<FaRegMoneyBill1 />}
               titleContClassName="border-b"
               iconClassName="rotate-y-180"
            />
         </div>
      </section>
   );
};

export default Rules;
