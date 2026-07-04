import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50";

    const variantStyles: Record<string, string> = {
      default: "bg-[#183325] text-white hover:bg-[#183325]/90",
      outline: "border border-[#183325] text-[#183325] bg-transparent hover:bg-[#183325]/10",
      ghost: "hover:bg-[#183325]/10 text-[#183325]",
      link: "underline-offset-4 hover:underline text-[#183325]",
    };

    const sizeStyles: Record<string, string> = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-9 px-3 text-xs",
      lg: "h-11 px-8 text-base",
      icon: "h-10 w-10",
    };

    const classes = [baseStyles, variantStyles[variant], sizeStyles[size], className]
      .filter(Boolean)
      .join(" ");

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
