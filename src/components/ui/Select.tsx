
import { SelectHTMLAttributes } from "react";

type Props = SelectHTMLAttributes<HTMLSelectElement>;

export function Select(props: Props) {
  return (
    <select
      {...props}
      className="
        w-full
        rounded-card
        border
        border-default
        bg-surface
        px-4
        py-3
      "
    />
  );
}

