import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
  "flex h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm shadow-sm transition-all",
  "placeholder:text-slate-400",
  "focus:border-[#2F6BFF] focus:ring-4 focus:ring-[#2F6BFF]/10 focus:outline-none",
  "disabled:cursor-not-allowed disabled:opacity-50",
  className
)}
      {...props}
    />
  )
}

export { Input }
