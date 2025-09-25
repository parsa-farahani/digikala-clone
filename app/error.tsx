"use client";

import Button from "@/components/shared/Button";
import React from "react";

type ErrorProps = {
   error?: {
      message?: string;
   } | null;
   reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
   return (
      <div className="container h-svh flex items-center justify-center">
         <div className="w-full max-w-xl flex flex-col gap-8 items-center">
            <h1 className="max-md:h2 h1">مشکلی پیش آمده است</h1>

            <p className="base text-red-500">
               Error: {error?.message ?? "خطای نامشخص"}
            </p>
            <Button onClick={reset} full>
               تلاش مجدد
            </Button>
         </div>
      </div>
   );
};

export default Error;
