
import { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea(props: Props) {
  return (
    <textarea
      {...props}
      className="
        w-full
        rounded-card
        border
        border-default
        bg-surface
        px-4
        py-3
        text-primary
        outline-none
        transition-default
        focus:border-primary
      "
    />
  );
}

