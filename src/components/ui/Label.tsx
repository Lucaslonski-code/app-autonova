
interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
}

export function Label({
  children,
  htmlFor,
  required = false,
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-medium text-sm text-primary"
    >
      {children}
      {required && (
        <span className="text-danger ml-1">*</span>
      )}
    </label>
  );
}
