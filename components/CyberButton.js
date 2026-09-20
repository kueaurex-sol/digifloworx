"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/cn";

/**
 * Cyber Button — glowing scanline-edge slab button.
 * White by default, glows red and shifts text to red on hover.
 */

const cyberButtonVariants = cva(
  "relative inline-flex select-none items-center justify-center whitespace-nowrap bg-transparent font-mono font-bold uppercase tracking-[0.2em] text-white outline-none transition-[box-shadow,color,transform] duration-300 hover:text-red-500 hover:shadow-[0_0_30px_-6px_rgba(255,40,40,0.8)] active:translate-y-px focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]",
        secondary: "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]",
      },
      size: {
        sm: "h-9 px-4 text-[10px]",
        default: "h-11 px-7 text-xs",
        lg: "h-14 px-10 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const EDGE =
  "pointer-events-none absolute opacity-50 transition-opacity duration-300 group-hover:opacity-100";
const HALO =
  "pointer-events-none absolute -inset-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background-image:radial-gradient(rgba(255,40,40,0.35)_1px,transparent_1px)] [background-size:3px_3px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_50%)]";
const TEXTURE =
  "pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:4px_4px] [mask-image:radial-gradient(ellipse_at_center,transparent_35%,black_100%)]";

const CyberButton = React.forwardRef(
  ({ className, variant, size, children, ...props }, ref) => {
    const classes = cn(cyberButtonVariants({ variant, size }), className);

    return (
      <span className="group relative inline-flex align-middle">
        <span aria-hidden className={HALO} />
        <span
          aria-hidden
          className={cn(
            EDGE,
            "left-0 top-[-22px] bottom-[-22px] w-px bg-gradient-to-b from-transparent via-red-500 to-transparent shadow-[0_0_14px_0_rgba(255,40,40,0.8)]"
          )}
        />
        <span
          aria-hidden
          className={cn(
            EDGE,
            "right-0 top-[-22px] bottom-[-22px] w-px bg-gradient-to-b from-transparent via-red-500 to-transparent shadow-[0_0_14px_0_rgba(255,40,40,0.8)]"
          )}
        />
        <span
          aria-hidden
          className={cn(
            EDGE,
            "top-0 left-[-22px] right-[-22px] h-px bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_14px_0_rgba(255,40,40,0.8)]"
          )}
        />
        <span
          aria-hidden
          className={cn(
            EDGE,
            "bottom-0 left-[-22px] right-[-22px] h-px bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_14px_0_rgba(255,40,40,0.8)]"
          )}
        />
        <span aria-hidden className={TEXTURE} />

        <button
          ref={ref}
          type="button"
          className={classes}
          {...props}
        >
          <span className="relative z-10 inline-flex items-center gap-2">
            {children}
          </span>
        </button>
      </span>
    );
  }
);
CyberButton.displayName = "CyberButton";

export { CyberButton, cyberButtonVariants };