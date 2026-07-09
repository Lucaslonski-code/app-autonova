
import { PageHeader } from "@/components/layout/PageHeader";

import { ConfiguracaoFilter } from "@/components/modules/configuracao/ConfiguracaoFilter";
import { ConfiguracaoTable } from "@/components/modules/configuracao/ConfiguracaoTable";

export default function ConfiguracoesPage(){

    return(

        <>

            <PageHeader

                title="Configurações"

                description="Configurações gerais."

            />

            <ConfiguracaoFilter/>

            <ConfiguracaoTable/>

        </>

    );

}

