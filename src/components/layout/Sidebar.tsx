
import Link from "next/link";

const menus = [
  {
    nome: "Dashboard",
    href: "/dashboard",
  },
  {
    nome: "Empresas",
    href: "/empresas",
  },
  {
    nome: "Clientes",
    href: "/clientes",
  },
  {
    nome: "Serviços",
    href: "/servicos",
  },
  {
    nome: "Agendamentos",
    href: "/agendamentos",
  },
  {
    nome: "Financeiro",
    href: "/financeiro",
  },
  {
    nome: "Perfil",
    href: "/perfil",
  },
];

export function Sidebar() {
  return (
    <aside className="flex w-64 flex-col border-r border-border bg-background-secondary p-8">

      <h3 className="mb-10">
        AutoNova
      </h3>

      <nav className="flex flex-col gap-5">

        {menus.map((menu) => (

          <Link
            key={menu.href}
            href={menu.href}
            className="transition-colors hover:text-primary"
          >
            {menu.nome}
          </Link>

        ))}

      </nav>

    </aside>
  );
}

