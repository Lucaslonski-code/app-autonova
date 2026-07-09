
import { PageHeader } from "@/components/layout/PageHeader";

import { ServicoFilter } from "@/components/modules/servico/ServicoFilter";
import { ServicoTable } from "@/components/modules/servico/ServicoTable";

export default function ServicosPage(){

    return(

        <>

            <PageHeader

                title="Serviços"

                description="Serviços cadastrados."

            />

            <ServicoFilter/>

            <ServicoTable/>

        </>

    );

}

