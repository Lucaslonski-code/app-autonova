
import { ButtonHTMLAttributes } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "danger"
  | "ghost";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      {...props}
    />
  );
}
