
"use client";

import { useCallback, useEffect, useState } from "react";

interface Usuario {

  _id: string;

  nome: string;

  email: string;

  role: string;

}

export function useUsuarios() {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const carregar = useCallback(async () => {

    try {

      setLoading(true);

      const res = await fetch("/api/usuarios");

      if (!res.ok)
        throw new Error();

      const data = await res.json();

      setUsuarios(data);

    } catch {

      setError("Erro ao carregar usuários.");

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

    usuarios,
    loading,
    error,
    atualizar: carregar,

  };

}

