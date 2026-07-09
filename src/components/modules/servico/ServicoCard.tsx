
import { Card } from "@/components/ui/Card";

interface Props{

    nome:string;

    preco:string;

}

export function ServicoCard({

    nome,

    preco,

}:Props){

    return(

        <Card>

            <h4>{nome}</h4>

            <p>{preco}</p>

        </Card>

    );

}

