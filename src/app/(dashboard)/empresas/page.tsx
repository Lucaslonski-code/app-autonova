
import { PageHeader } from "@/components/layout/PageHeader";

import { EmpresaFilter } from "@/components/modules/empresa/EmpresaFilter";
import { EmpresaTable } from "@/components/modules/empresa/EmpresaTable";

export default function EmpresasPage(){

    return(

        <>

            <PageHeader

                title="Empresas"

                description="Gerencie todas as empresas."

            />

            <EmpresaFilter/>

            <EmpresaTable/>

        </>

    );

}

