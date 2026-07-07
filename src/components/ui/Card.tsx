
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({
  children,
}: CardProps) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-950
      p-6
      shadow-lg
      "
    >
      {children}
    </div>
  );
}

