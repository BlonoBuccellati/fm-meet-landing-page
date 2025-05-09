import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "typo-button rounded-full px-500 py-200 text-white hover:cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-blue-600 hover:bg-blue-300",
        cyan: "bg-cyan-600 hover:bg-[#71C0D4]",
        purple: "bg-purple-600 hover:bg-[#B18BDD]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}
