
interface StatusBadgeProps {
  active: boolean;
}

export function StatusBadge({
  active,
}: StatusBadgeProps) {
  return (
    <span
      className={`
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        ${
          active
            ? "bg-success text-white"
            : "bg-danger text-white"
        }
      `}
    >
      {active ? "Ativo" : "Inativo"}
    </span>
  );
}

