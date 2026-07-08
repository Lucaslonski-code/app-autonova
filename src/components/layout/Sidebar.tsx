
"use client";

import Link from "next/link";

import {
    LayoutDashboard,
    Building2,
    Users,
    Scissors,
    UserRoundCog,
    CalendarDays,
    CalendarClock,
    Ban,
    Bot,
    Settings,
} from "lucide-react";

import { Logo } from "./Logo";

const menu = [
    {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        icon: Building2,
        label: "Empresas",
        href: "/empresas",
    },
    {
        icon: Users,
        label: "Clientes",
        href: "/clientes",
    },
    {
        icon: Scissors,
        label: "Serviços",
        href: "/servicos",
    },
    {
        icon: UserRoundCog,
        label: "Profissionais",
        href: "/profissionais",
    },
    {
        icon: CalendarClock,
        label: "Disponibilidades",
        href: "/disponibilidades",
    },
    {
        icon: Ban,
        label: "Bloqueios",
        href: "/bloqueios",
    },
    {
        icon: CalendarDays,
        label: "Agendamentos",
        href: "/agendamentos",
    },
    {
        icon: Bot,
        label: "IA",
        href: "/ia",
    },
    {
        icon: Settings,
        label: "Configurações",
        href: "/configuracoes",
    },
];

export function Sidebar() {
    return (
        <aside
            className="
            w-72
            bg-surface
            border-r
            border-border
            flex
            flex-col
        "
        >
            <div className="p-6">
                <Logo />
            </div>

            <nav className="flex flex-col gap-1 px-4">
                {menu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="
                            flex
                            items-center
                            gap-3
                            px-4
                            py-3
                            rounded-xl
                            hover:bg-primary
                            hover:text-black
                            transition-all
                        "
                        >
                            <Icon size={18} />

                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}

