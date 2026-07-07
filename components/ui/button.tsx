import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
  variant: {
    default:
      "bg-[#2F6BFF] text-white hover:bg-[#2559E6] shadow-sm hover:shadow-lg transition-all duration-300",

    outline:
      "border border-[#2F6BFF] bg-white text-[#2F6BFF] hover:bg-blue-50 transition-colors",

    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors",

    ghost:
      "text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors",

    destructive:
      "bg-red-500 text-white hover:bg-red-600",

    link:
      "text-[#2F6BFF] underline-offset-4 hover:underline",
  },

  size: {
    default:
      "h-11 rounded-xl px-6 text-sm font-semibold",

    xs:
      "h-7 rounded-lg px-3 text-xs font-medium",

    sm:
      "h-9 rounded-xl px-4 text-sm font-medium",

    lg:
      "h-12 rounded-xl px-8 text-base font-semibold",

    icon:
      "h-11 w-11 rounded-xl",

    "icon-xs":
      "h-7 w-7 rounded-lg",

    "icon-sm":
      "h-9 w-9 rounded-xl",

    "icon-lg":
      "h-12 w-12 rounded-xl",
  },
},
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
