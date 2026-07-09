
import { Card } from "@/components/ui/Card";

interface Props {
  nome: string;
  segmento: string;
}

export function EmpresaCard({
  nome,
  segmento,
}: Props) {
  return (
    <Card>

      <h4>{nome}</h4>

      <p>{segmento}</p>

    </Card>
  );
}

