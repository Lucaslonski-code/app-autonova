
import { Card } from "@/components/ui/Card";

interface Props{
    nome:string;
    email:string;
}

export function UserCard({
    nome,
    email,
}:Props){

    return(

        <Card>

            <h4>{nome}</h4>

            <p>{email}</p>

        </Card>

    );

}

