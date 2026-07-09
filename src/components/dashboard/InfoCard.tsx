
import { Card } from "@/components/ui/Card";

interface Props{
    title:string;
    children:React.ReactNode;
}

export function InfoCard({
    title,
    children,
}:Props){

    return(

        <Card>

            <h4>{title}</h4>

            {children}

        </Card>

    );

}

