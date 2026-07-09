
import { Card } from "@/components/ui/Card";

interface Props{
    cliente:string;
    horario:string;
}

export function AppointmentCard({
    cliente,
    horario,
}:Props){

    return(

        <Card>

            <h4>{cliente}</h4>

            <p>{horario}</p>

        </Card>

    );

}

