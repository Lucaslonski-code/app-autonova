
import { Card } from "@/components/ui/Card";

interface StatCardProps {
  title: string;
  value: string | number;
}

export function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <Card>
      <p className="text-secondary text-sm">{title}</p>

      <h2>{value}</h2>
    </Card>
  );
}

