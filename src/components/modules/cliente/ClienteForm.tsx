
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export function ClienteForm() {
  return (
    <form className="space-y-6">

      <div>
        <Label>Nome</Label>
        <Input placeholder="Cliente" />
      </div>

      <div>
        <Label>Telefone</Label>
        <Input placeholder="(00) 00000-0000" />
      </div>

      <div>
        <Label>Email</Label>
        <Input placeholder="cliente@email.com" />
      </div>

      <Button>
        Salvar Cliente
      </Button>

    </form>
  );
}

