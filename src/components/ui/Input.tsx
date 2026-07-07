
import { InputHTMLAttributes } from "react";
import { clsx } from "clsx";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        "h-11 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-white outline-none",
        "focus:border-green-500",
        className
      )}
      {...props}
    />
  );
}
