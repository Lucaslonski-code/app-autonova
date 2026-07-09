
import { Card } from "@/components/ui/Card";

interface Props{
    nome:string;
    telefone:string;
}

export function ClienteCard({
    nome,
    telefone,
}:Props){

    return(

        <Card>

            <h4>{nome}</h4>

            <p>{telefone}</p>

        </Card>

    );

}

