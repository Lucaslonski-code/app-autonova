
interface TableProps {
  children: React.ReactNode;
}

export function Table({
  children,
}: TableProps) {
  return (
    <table className="
      w-full
      border-collapse
    ">
      {children}
    </table>
  );
}

