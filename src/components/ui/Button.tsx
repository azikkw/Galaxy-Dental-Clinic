import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-mainBlueColor text-white lg:hover:bg-hoverBlueColor",
        green: "bg-greenColor text-white lg:hover:bg-hoverGreenColor",
        outline: "border border-input bg-background lg:hover:bg-accent lg:hover:text-mainTextColor",
        carouselPrev: "rounded-full text-white bg-secondTextColor lg:hover:bg-carouselPrevButtonHover",
        carouselNext: "rounded-full text-white bg-carouselNextButtonColor lg:hover:bg-carouselNextButtonHover",
      },
      size: {
        default: "h-[58px] rounded-[10px]",
        sm: "h-11 rounded-[10px]",
        lg: "h-12 rounded-[10px]",
        icon: "size-11 md:size-[52px] lg:size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
