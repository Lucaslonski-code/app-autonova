
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export function EmpresaForm() {
  return (
    <form className="space-y-6">

      <div>
        <Label>Nome</Label>
        <Input placeholder="Empresa" />
      </div>

      <div>
        <Label>Segmento</Label>
        <Input placeholder="Restaurante" />
      </div>

      <div>
        <Label>CNPJ</Label>
        <Input placeholder="00.000.000/0000-00" />
      </div>

      <Button>
        Salvar Empresa
      </Button>

    </form>
  );
}

