
import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export function Checkbox(props: Props) {
  return (
    <input
      type="checkbox"
      {...props}
      className="
        h-5
        w-5
        accent-primary
      "
    />
  );
}

