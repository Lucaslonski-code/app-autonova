
interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export function PageTitle({
  title,
  subtitle,
}: PageTitleProps) {
  return (
    <div className="mb-8">
      <h1>{title}</h1>

      {subtitle && (
        <p className="text-secondary mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}

