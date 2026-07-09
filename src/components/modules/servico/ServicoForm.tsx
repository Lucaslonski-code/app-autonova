
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export function ServicoForm(){

    return(

        <form className="space-y-6">

            <div>

                <Label>Nome</Label>

                <Input placeholder="Serviço"/>

            </div>

            <div>

                <Label>Preço</Label>

                <Input placeholder="R$ 0,00"/>

            </div>

            <div>

                <Label>Duração</Label>

                <Input placeholder="60 minutos"/>

            </div>

            <Button>

                Salvar Serviço

            </Button>

        </form>

    );

}

