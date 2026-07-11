
"use client";

import { useEffect, useState } from "react";

import { Empresa } from "@/types/empresa";

import { listarEmpresas } from "@/services/empresa.service";

export function useEmpresas() {

    const [empresas, setEmpresas] = useState<Empresa[]>([]);

    const [loading, setLoading] = useState(true);

    async function carregar() {

        setLoading(true);

        try {

            const dados = await listarEmpresas();

            setEmpresas(dados);

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        async function init() {

            await carregar();

        }

        void init();

    }, []);

    return {

        empresas,

        loading,

        atualizar: carregar,

    };

}

