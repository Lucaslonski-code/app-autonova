
import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "h-11 rounded-xl px-4 font-medium transition-all",

        variant === "primary" &&
          "bg-green-600 text-white hover:bg-green-500",

        variant === "secondary" &&
          "bg-zinc-800 text-white hover:bg-zinc-700",

        className
      )}
      {...props}
    />
  );
}

