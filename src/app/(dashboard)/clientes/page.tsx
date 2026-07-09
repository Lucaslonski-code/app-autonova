
import { PageHeader } from "@/components/layout/PageHeader";

import { ClienteFilter } from "@/components/modules/cliente/ClienteFilter";
import { ClienteTable } from "@/components/modules/cliente/ClienteTable";

export default function ClientesPage(){

    return(

        <>

            <PageHeader

                title="Clientes"

                description="Cadastro de clientes."

            />

            <ClienteFilter/>

            <ClienteTable/>

        </>

    );

}

