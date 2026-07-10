
"use client";

import { useEmpresas } from "@/hooks/useEmpresas";

import { PageHeader } from "@/components/layout/PageHeader";

import { Card } from "@/components/ui/Card";

import { Button } from "@/components/ui/Button";

import { EmptyState } from "@/components/ui/EmptyState";

export default function EmpresasPage() {

    const {

        empresas,

        loading,

    } = useEmpresas();

    if (loading) {

        return <p>Carregando</p>;

    }

    return (

        <>

            <PageHeader

                title="Empresas"

                description="Gerencie todas as empresas cadastradas."

            />

            <div className="page-actions">

                <Button>

                    Nova Empresa

                </Button>

            </div>

            {

                empresas.length === 0

                ?

                (

                    <EmptyState

                        title="Nenhuma empresa cadastrada."

                        description="Clique em Nova Empresa para começar."

                    />

                )

                :

                (

                    <div className="grid grid-3 gap-5">

                        {

                            empresas.map((empresa)=>(

                                <Card

                                    key={empresa._id}

                                >

                                    <h3>

                                        {empresa.nome}

                                    </h3>

                                    <p className="text-secondary">

                                        {empresa.email}

                                    </p>

                                    <p className="text-caption mt-2">

                                        {empresa.telefone}

                                    </p>

                                </Card>

                            ))

                        }

                    </div>

                )

            }

        </>

    );

}

