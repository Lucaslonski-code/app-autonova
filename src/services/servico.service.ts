
import { api } from "@/lib/api";

import { Servico } from "@/types";

export async function listarServicos() {

    const { data } = await api.get<Servico[]>("/servico");

    return data;

}

export async function buscarServico(id: string) {

    const { data } = await api.get<Servico>(`/servico/${id}`);

    return data;

}

export async function criarServico(body: Partial<Servico>) {

    const { data } = await api.post("/servico", body);

    return data;

}

export async function atualizarServico(
    id: string,
    body: Partial<Servico>
) {

    const { data } = await api.put(`/servico/${id}`, body);

    return data;

}

export async function excluirServico(id: string) {

    await api.delete(`/servico/${id}`);

}

