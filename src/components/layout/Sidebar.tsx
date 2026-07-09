
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-surface border-r border-default p-6 flex flex-col gap-4">

      <Link href="/">Dashboard</Link>

      <Link href="/empresas">Empresas</Link>

      <Link href="/clientes">Clientes</Link>

      <Link href="/servicos">Serviços</Link>

      <Link href="/agendamentos">Agendamentos</Link>

      <Link href="/usuarios">Usuários</Link>

      <Link href="/configuracoes">Configurações</Link>

    </aside>
  );
}

