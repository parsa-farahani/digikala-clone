import React from "react";

const Divider = (
   {
      className
   }: {
      className?: string
   }
) => {
   return <div className={`border-0 h-px w-full bg-gray-500/30 ${className ?? ''}`} />;
};

export default Divider;
