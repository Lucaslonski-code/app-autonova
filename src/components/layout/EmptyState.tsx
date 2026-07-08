
interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center rounded-card border border-dashed border-border">
      <h3>{title}</h3>

      <p className="mt-2 text-muted">
        {description}
      </p>
    </div>
  );
}

