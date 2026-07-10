
"use client";

import { useCallback, useEffect, useState } from "react";

interface Cliente {
  _id: string;
  nome: string;
  telefone: string;
  email?: string;
  empresaId: string;
}

export function useClientes() {

  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const carregar = useCallback(async () => {

    try {

      setLoading(true);

      const res = await fetch("/api/clientes");

      if (!res.ok)
        throw new Error("Erro ao carregar clientes");

      const data = await res.json();

      setClientes(data);

    } catch {

      setError("Não foi possível carregar clientes.");

    } finally {

      setLoading(false);

    }

  }, []);

useEffect(() => {

    async function init(){

        await carregar();

    }

    void init();

},[carregar]);

  return {

    clientes,
    loading,
    error,
    atualizar: carregar,

  };

}

