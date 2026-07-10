
"use client";

import DashboardHero from "@/components/dashboard/DashboardHero";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function DashboardPage() {

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
                        12
                    </h2>

                </Card>

                <Card>

                    <span className="text-caption">
                        Clientes
                    </span>

                    <h2>
                        284
                    </h2>

                </Card>

                <Card>

                    <span className="text-caption">
                        Serviços
                    </span>

                    <h2>
                        36
                    </h2>

                </Card>

                <Card>

                    <span className="text-caption">
                        Agendamentos
                    </span>

                    <h2>
                        18
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

                        Sistema

                    </h3>

                    <p className="text-secondary mt-3">

                        API conectada.

                    </p>

                    <p className="text-secondary">

                        Front-end operacional.

                    </p>

                </Card>

            </div>

        </>

    );

}

