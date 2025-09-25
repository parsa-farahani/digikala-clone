"use client";

import { debounce } from "lodash-es";
import { useEffect, useState } from "react";

export const useDebounce = (value: () => void, delay: number) => {
   const [debouncedValue, setDebouncedValue] = useState(value);

   useEffect(() => {
      // this useEffect, runs on 'every value change', so we debounce changing the 'debouncedValue', as a intermediary-function

      const handler = debounce(() => {
         // debounce the value, on each 'change'
         setDebouncedValue(value);
      }, delay);

      handler();

      return () => handler.cancel(); // cleanup the hanlder, when it is 'Unmounted'
   }, [value, delay]);

   return debouncedValue;
};
