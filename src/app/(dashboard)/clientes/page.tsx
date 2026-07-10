
"use client";

import { PageHeader } from "@/components/layout/PageHeader";

import { Card } from "@/components/ui/Card";

import { Button } from "@/components/ui/Button";

import EmptyState from "@/components/layout/EmptyState";

import { useClientes } from "@/hooks/useClientes";

export default function ClientesPage() {

    const {

        clientes,

        loading,

    } = useClientes();

    if (loading) {

        return <p>Carregando...</p>;

    }

    return (

        <>

            <PageHeader

                title="Clientes"

                description="Todos os clientes cadastrados."

            />

            <div className="page-actions">

                <Button>

                    Novo Cliente

                </Button>

            </div>

            {

                clientes.length===0

                ?

                (

                    <EmptyState

                        title="Nenhum cliente encontrado."

                        description="Cadastre seu primeiro cliente."

                    />

                )

                :

                (

                    <div className="grid-3">

                        {

                            clientes.map(cliente=>(

                                <Card

                                    key={cliente._id}

                                >

                                    <h3>

                                        {cliente.nome}

                                    </h3>

                                    <p>

                                        {cliente.email}

                                    </p>

                                    <p className="text-secondary">

                                        {cliente.telefone}

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

