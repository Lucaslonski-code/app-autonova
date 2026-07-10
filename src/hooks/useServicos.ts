
"use client";

import { useCallback, useEffect, useState } from "react";

interface Servico {

  _id: string;
  nome: string;
  preco: number;
  duracao: number;
  empresaId: string;

}

export function useServicos() {

  const [servicos, setServicos] = useState<Servico[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const carregar = useCallback(async () => {

    try {

      setLoading(true);

      const res = await fetch("/api/servicos");

      if (!res.ok)
        throw new Error();

      const data = await res.json();

      setServicos(data);

    } catch {

      setError("Erro ao carregar serviços.");

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

    servicos,
    loading,
    error,
    atualizar: carregar,

  };

}

