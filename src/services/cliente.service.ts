
import { api } from "@/lib/api";

import { Cliente } from "@/types";

export async function listarClientes() {

    const { data } = await api.get<Cliente[]>("/cliente");

    return data;

}

export async function buscarCliente(id: string) {

    const { data } = await api.get<Cliente>(`/cliente/${id}`);

    return data;

}

export async function criarCliente(body: Partial<Cliente>) {

    const { data } = await api.post("/cliente", body);

    return data;

}

export async function atualizarCliente(
    id: string,
    body: Partial<Cliente>
) {

    const { data } = await api.put(`/cliente/${id}`, body);

    return data;

}

export async function excluirCliente(id: string) {

    await api.delete(`/cliente/${id}`);

}

