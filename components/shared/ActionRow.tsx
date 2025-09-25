import Link from "next/link";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

type ActionRowProps = {
   title: string;
   href?: string;
   icon?: React.ReactNode;
   className?: string;
   titleContClassName?: string;
   titleClassName?: string;
   iconClassName?: string;
};

const ActionRow = ({ href, icon, title, className, titleClassName, titleContClassName, iconClassName }: ActionRowProps) => {


  const content = (

      <span className="flex gap-3 pb-2 lg:pb-0">
         {icon ? (
            <span className={`flex items-center justify-center size-[40px] bg-neutral-200 rounded-full p-2 text-text-2 text-xl ${iconClassName}`}>
               {icon}
            </span>
         ) : null}

         <span className={`grow-1 flex items-center gap-2 py-3 ${titleContClassName}`}>
            <span className={`flex items-center gap-1 ${titleClassName}`}>{title}</span>
            <span className="mr-auto lg:mr-0 text-xl text-text-2 lg:text-text-3">
               <MdKeyboardArrowLeft className="" />
            </span>
         </span>
      </span>
  )


   if (href) {
      <Link href={href}
        className={`block w-full ${className}`}
      >
        {
          content
        }
      </Link>;
   }

   return (
      <span
        className={`block w-full ${className}`}
      >
        {
          content
        }
      </span>
   );
};

export default ActionRow;
