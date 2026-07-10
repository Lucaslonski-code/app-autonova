
"use client";

import { useCallback, useEffect, useState } from "react";

interface Agendamento {

  _id: string;

  cliente: string;

  servico: string;

  data: string;

  horario: string;

  status: string;

}

export function useAgendamentos() {

  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const carregar = useCallback(async () => {

    try {

      setLoading(true);

      const res = await fetch("/api/agendamentos");

      if (!res.ok)
        throw new Error();

      const data = await res.json();

      setAgendamentos(data);

    } catch {

      setError("Erro ao carregar agendamentos.");

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

    agendamentos,
    loading,
    error,
    atualizar: carregar,

  };

}

