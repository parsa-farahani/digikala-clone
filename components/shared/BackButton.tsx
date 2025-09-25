'use client';
import { useRouter } from "next/navigation";
import { GoArrowRight } from "react-icons/go";

type BackButtonProps = {
   className?: string;
}

const BackButton = (
   {
      className,
   }: BackButtonProps
) => {

   const router = useRouter();


  return (
      <button
      className={`ibtn ${className ? className : `fixed top-2 right-2 lg:absolute lg:top-1/2 lg:right-0 lg:p-0  lg:-translate-y-1/2 translate-y-0 text-xl transition-all duration-500`}`}
      onClick={() => router.back()}
   >
      <GoArrowRight />
   </button>
  )
}

export default BackButton