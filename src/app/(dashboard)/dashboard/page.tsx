"use client";

import DashboardHero from "@/components/dashboard/DashboardHero";

import { PageHeader } from "@/components/layout/PageHeader";

import { Card } from "@/components/ui/Card";

import { Button } from "@/components/ui/Button";

import { useEmpresas } from "@/hooks/useEmpresas";
import { useClientes } from "@/hooks/useClientes";
import { useServicos } from "@/hooks/useServicos";
import { useAgendamentos } from "@/hooks/useAgendamentos";

export default function DashboardPage() {

    const { empresas } = useEmpresas();

    const { clientes } = useClientes();

    const { servicos } = useServicos();

    const { agendamentos } = useAgendamentos();

    return (

        <>

            <PageHeader

                title="Dashboard"

                description="Visão geral do sistema."

            />

            <DashboardHero />

            <div className="grid grid-4 gap-5 mt-5">

                <Card>

                    <span className="text-caption">

                        Empresas

                    </span>

                    <h2>

                        {empresas.length}

                    </h2>

                </Card>

                <Card>

                    <span className="text-caption">

                        Clientes

                    </span>

                    <h2>

                        {clientes.length}

                    </h2>

                </Card>

                <Card>

                    <span className="text-caption">

                        Serviços

                    </span>

                    <h2>

                        {servicos.length}

                    </h2>

                </Card>

                <Card>

                    <span className="text-caption">

                        Agendamentos

                    </span>

                    <h2>

                        {agendamentos.length}

                    </h2>

                </Card>

            </div>

            <div className="grid grid-2 gap-5 mt-5">

                <Card>

                    <h3>

                        Ações rápidas

                    </h3>

                    <div className="flex gap-3 mt-4">

                        <Button>

                            Nova empresa

                        </Button>

                        <Button variant="secondary">

                            Novo cliente

                        </Button>

                    </div>

                </Card>

                <Card>

                    <h3>

                        Status do sistema

                    </h3>

                    <div className="mt-4 flex flex-col gap-2">

                        <p>

                            🟢 Front-end operacional

                        </p>

                        <p>

                            🟢 API conectada

                        </p>

                        <p>

                            🟢 Banco sincronizado

                        </p>

                    </div>

                </Card>

            </div>

        </>

    );

}

