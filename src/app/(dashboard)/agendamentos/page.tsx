
import { PageHeader } from "@/components/layout/PageHeader";

import { AgendamentoFilter } from "@/components/modules/agendamento/AgendamentoFilter";
import { AgendamentoTable } from "@/components/modules/agendamento/AgendamentoTable";

export default function AgendamentosPage(){

    return(

        <>

            <PageHeader

                title="Agendamentos"

                description="Agenda completa."

            />

            <AgendamentoFilter/>

            <AgendamentoTable/>

        </>

    );

}

