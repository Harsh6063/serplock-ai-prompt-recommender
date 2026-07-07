import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex h-7 items-center justify-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-[#2F6BFF]/10 text-[#2F6BFF] border-[#2F6BFF]/20",

        secondary:
          "bg-slate-100 text-slate-700 border-slate-200",

        destructive:
          "bg-red-50 text-red-600 border-red-200",

        outline:
          "bg-white text-slate-700 border-slate-200",

        ghost:
          "bg-transparent text-slate-600 hover:bg-slate-100",

        link:
          "border-none bg-transparent p-0 text-[#2F6BFF] underline-offset-4 hover:underline",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
