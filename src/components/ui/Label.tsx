
import { LabelHTMLAttributes } from "react";

type Props =
  LabelHTMLAttributes<HTMLLabelElement>;

export function Label(props: Props) {
  return (
    <label
      className="text-small"
      {...props}
    />
  );
}

