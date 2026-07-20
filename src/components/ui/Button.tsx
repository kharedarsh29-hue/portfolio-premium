"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", children, className = "", href, ...props }, ref) => {
    const base =
      "relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 overflow-hidden group";

    const sizes = {
      sm: "px-5 py-2 text-sm",
      md: "px-8 py-3 text-base",
      lg: "px-10 py-4 text-lg",
    };

    const variants = {
      primary:
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 active:scale-95",
      secondary:
        "glass-strong text-white hover:bg-white/10 hover:scale-105 active:scale-95",
      ghost:
        "text-gray-300 hover:text-white hover:bg-white/5 active:scale-95",
      outline:
        "border border-white/20 text-white hover:bg-white/5 hover:border-white/40 active:scale-95",
    };

    const content = (
      <>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === "primary" && (
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
        <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-all duration-300" />
      </>
    );

    if (href) {
      return (
        <a href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
