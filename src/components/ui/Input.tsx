
import { InputHTMLAttributes } from "react";

type Props =
  InputHTMLAttributes<HTMLInputElement>;

export function Input(props: Props) {
  return (
    <input
      className="input"
      {...props}
    />
  );
}

