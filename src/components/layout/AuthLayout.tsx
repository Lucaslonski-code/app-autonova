
import { ReactNode } from "react";

import { Logo } from "@/components/ui/Logo";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main
      className="
      flex
      min-h-screen
      items-center
      justify-center
      bg-black
      px-6
      "
    >
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <Logo />
        </div>

        {children}
      </div>
    </main>
  );
}

