
import { api } from "@/lib/api";

import { Agendamento } from "@/types";

export async function listarAgendamentos() {

    const { data } = await api.get<Agendamento[]>("/agendamento");

    return data;

}

export async function buscarAgendamento(id: string) {

    const { data } = await api.get<Agendamento>(`/agendamento/${id}`);

    return data;

}

export async function criarAgendamento(body: Partial<Agendamento>) {

    const { data } = await api.post("/agendamento", body);

    return data;

}

export async function atualizarAgendamento(
    id: string,
    body: Partial<Agendamento>
) {

    const { data } = await api.put(`/agendamento/${id}`, body);

    return data;

}

export async function excluirAgendamento(id: string) {

    await api.delete(`/agendamento/${id}`);

}

