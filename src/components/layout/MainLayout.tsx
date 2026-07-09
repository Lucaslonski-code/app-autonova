
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

interface Props {
  children: React.ReactNode;
}

export function MainLayout({
  children,
}: Props) {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

