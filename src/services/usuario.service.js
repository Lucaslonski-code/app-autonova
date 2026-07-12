
import { api } from "@/lib/api";

import { Usuario } from "@/types/index";

export async function listarUsuarios() {

    const { data } = await api.get<Usuario[]>("/usuario");

    return data;

}

export async function buscarUsuario(id: string) {

    const { data } = await api.get<Usuario>(`/usuario/${id}`);

    return data;

}

export async function criarUsuario(body: Partial<Usuario>) {

    const { data } = await api.post("/usuario", body);

    return data;

}

export async function atualizarUsuario(
    id: string,
    body: Partial<Usuario>
) {

    const { data } = await api.put(`/usuario/${id}`, body);

    return data;

}

export async function excluirUsuario(id: string) {

    await api.delete(`/usuario/${id}`);

}

