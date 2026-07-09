
"use client";

import { useState } from "react";

import { Empresa } from "@/types/empresa";

import { listarEmpresas } from "@/services/empresa.service";

export function useEmpresas(){

    const [empresas,setEmpresas]=useState<Empresa[]>([]);

    const [loading,setLoading]=useState(true);

    async function carregar(){

        setLoading(true);

        const dados=await listarEmpresas();

        setEmpresas(dados);

        setLoading(false);

    }

    return{

        empresas,

        loading,

        atualizar:carregar,

    };

}

