
interface TooltipProps {
  children: React.ReactNode;
  text: string;
}

export function Tooltip({
  children,
  text,
}: TooltipProps) {
  return (
    <span
      title={text}
      className="cursor-help"
    >
      {children}
    </span>
  );
}

