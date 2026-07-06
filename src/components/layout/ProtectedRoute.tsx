
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { cookieService } from "@/src/lib/cookies";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const token =
      cookieService.getToken();

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
}

