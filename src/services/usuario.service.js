
export async function listarUsuarios() {

    const response = await fetch("/api/usuarios");

    if (!response.ok)
        throw new Error("Erro ao buscar usuários.");

    return response.json();

}

