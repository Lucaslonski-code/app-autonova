
interface Props {
  children: React.ReactNode;
}

export function Content({
  children,
}: Props) {
  return (
    <div className="space-y-6">
      {children}
    </div>
  );
}

