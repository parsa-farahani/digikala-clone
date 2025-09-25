"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-cyan-400 data-[state=unchecked]:bg-light-1 focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.25rem] w-10 shrink-0 items-center rounded-full border-2 border-text-3 data-[state=checked]:border-cyan-400 shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 ",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-text-3 dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-light-1 data-[state=checked]:bg-light-1 pointer-events-none block size-3 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%+0.6rem)] data-[state=unchecked]:translate-x-[.150rem]",
          // "rtl:data-[state=checked]:translate-x-0 rtl:data-[state=unchecked]:translate-x-[calc(100%-2px)]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
