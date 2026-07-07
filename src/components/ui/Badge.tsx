
import { ReactNode } from "react";

type Variant =
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "neutral";

interface Props {
  children: ReactNode;
  variant?: Variant;
}

export function Badge({
  children,
  variant = "neutral",
}: Props) {
  return (
    <span className={`badge badge-${variant}`}>
      {children}
    </span>
  );
}

