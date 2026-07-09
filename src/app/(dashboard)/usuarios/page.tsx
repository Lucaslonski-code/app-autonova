
import { PageHeader } from "@/components/layout/PageHeader";

import { UsuarioFilter } from "@/components/modules/usuario/UsuarioFilter";
import { UsuarioTable } from "@/components/modules/usuario/UsuarioTable";

export default function UsuariosPage(){

    return(

        <>

            <PageHeader

                title="Usuários"

                description="Controle de usuários."

            />

            <UsuarioFilter/>

            <UsuarioTable/>

        </>

    );

}

