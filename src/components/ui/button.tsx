
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Improved color contrast for all button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/95 active:bg-primary/90 focus:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/95 active:bg-destructive/90 focus:bg-destructive/90",
        outline:
          "border border-input bg-background text-primary hover:bg-accent hover:text-primary focus:bg-accent/60 active:bg-accent/90",
        secondary:
          "bg-secondary text-primary hover:bg-secondary/80 text-base focus:bg-secondary/70 active:bg-secondary/70",
        ghost: "hover:bg-accent hover:text-primary focus:bg-accent/50 active:bg-accent/90 text-primary",
        link: "text-primary underline underline-offset-4 hover:text-primary/80 hover:underline focus:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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

