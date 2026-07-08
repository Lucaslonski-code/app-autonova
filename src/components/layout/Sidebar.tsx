
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="flex w-64 flex-col border-r border-border bg-background-secondary p-6">
      <Link href="/">Dashboard</Link>
      <Link href="/empresas">Empresas</Link>
      <Link href="/clientes">Clientes</Link>
      <Link href="/servicos">Serviços</Link>
      <Link href="/agendamentos">Agendamentos</Link>
      <Link href="/financeiro">Financeiro</Link>
      <Link href="/perfil">Perfil</Link>
    </aside>
  );
}
