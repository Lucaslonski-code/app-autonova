
export async function listarServicos() {

    const response = await fetch("/api/servicos");

    if (!response.ok)
        throw new Error("Erro ao buscar serviços.");

    return response.json();

}

