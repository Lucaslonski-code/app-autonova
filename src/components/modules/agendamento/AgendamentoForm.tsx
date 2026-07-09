
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export function AgendamentoForm(){

    return(

        <form className="space-y-6">

            <div>

                <Label>Cliente</Label>

                <Input/>

            </div>

            <div>

                <Label>Serviço</Label>

                <Input/>

            </div>

            <div>

                <Label>Data</Label>

                <Input type="date"/>

            </div>

            <Button>

                Agendar

            </Button>

        </form>

    );

}

