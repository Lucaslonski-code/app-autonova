
"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export function LoginForm() {
  return (
    <Card>
      <form className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
        />

        <Input
          type="password"
          placeholder="Senha"
        />

        <Button
          type="submit"
          className="w-full"
        >
          Entrar
        </Button>
      </form>
    </Card>
  );
}

