
interface Props {
  title: string;
  subtitle?: string;
}

export function PageHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-8">

      <h1>{title}</h1>

      {subtitle && (
        <p className="text-secondary">
          {subtitle}
        </p>
      )}

    </div>
  );
}

