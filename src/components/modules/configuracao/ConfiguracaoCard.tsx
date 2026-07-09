
import { Card } from "@/components/ui/Card";

interface Props{

    titulo:string;

    descricao:string;

}

export function ConfiguracaoCard({

    titulo,

    descricao,

}:Props){

    return(

        <Card>

            <h4>{titulo}</h4>

            <p>{descricao}</p>

        </Card>

    );

}

