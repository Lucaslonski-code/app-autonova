
"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function DashboardHero() {

    return (

        <section className="dashboard-hero">

            <div>

                <Badge variant="success">

                    Sistema Online

                </Badge>

                <h1>

                    Bem-vindo ao AutoNova

                </h1>

                <p>

                    Gerencie empresas, clientes, serviços e agendamentos em um único painel.

                </p>

            </div>

            <div className="dashboard-hero-actions">

                <Button>

                    Nova Empresa

                </Button>

                <Button variant="secondary">

                    Novo Cliente

                </Button>

            </div>

        </section>

    );

}

