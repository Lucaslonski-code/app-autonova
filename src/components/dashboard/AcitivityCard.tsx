
import { Card } from "@/components/ui/Card";

interface Props{
    activity:string;
}

export function ActivityCard({
    activity,
}:Props){

    return(

        <Card>

            {activity}

        </Card>

    );

}

