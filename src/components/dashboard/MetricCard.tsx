
import { Card } from "@/components/ui/Card";

interface MetricCardProps {
  title: string;
  value: string;
  description?: string;
}

export function MetricCard({
  title,
  value,
  description,
}: MetricCardProps) {
  return (
    <Card>

      <h4>{title}</h4>

      <h2>{value}</h2>

      {description && (
        <p className="text-secondary">
          {description}
        </p>
      )}

    </Card>
  );
}

