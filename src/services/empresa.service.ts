
import { api } from "@/lib/api";

import { Empresa } from "@/types/empresa";

export async function listarEmpresas(){

    const {data}=await api.get<Empresa[]>("/empresa");

    return data;

}

export async function buscarEmpresa(id:string){

    const {data}=await api.get<Empresa>(`/empresa/${id}`);

    return data;

}

export async function criarEmpresa(body:Partial<Empresa>){

    const {data}=await api.post("/empresa",body);

    return data;

}

export async function atualizarEmpresa(id:string,body:Partial<Empresa>){

    const {data}=await api.put(`/empresa/${id}`,body);

    return data;

}

export async function excluirEmpresa(id:string){

    await api.delete(`/empresa/${id}`);

}

