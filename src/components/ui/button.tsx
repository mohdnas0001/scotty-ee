import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#1e3a5f] text-white hover:bg-[#2d4a6f] shadow-lg hover:shadow-xl hover:scale-105",
        accent:
          "bg-[#f97316] text-white hover:bg-[#ea580c] shadow-lg hover:shadow-xl hover:scale-105",
        outline:
          "border-2 border-[#1e3a5f] text-[#1e3a5f] bg-transparent hover:bg-[#1e3a5f] hover:text-white",
        outlineLight:
          "border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#1e3a5f]",
        ghost:
          "text-[#1e3a5f] hover:bg-[#1e3a5f]/10",
        link:
          "text-[#f97316] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-6 py-2 text-sm",
        lg: "h-14 px-10 py-4 text-base",
        xl: "h-16 px-12 py-5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
