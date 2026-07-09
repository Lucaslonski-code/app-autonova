
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export function UsuarioForm(){

    return(

        <form className="space-y-6">

            <div>

                <Label>Nome</Label>

                <Input/>

            </div>

            <div>

                <Label>Email</Label>

                <Input/>

            </div>

            <Button>

                Salvar Usuário

            </Button>

        </form>

    );

}

