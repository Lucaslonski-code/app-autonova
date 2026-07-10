
export async function listarClientes() {

    const response = await fetch("/api/clientes");

    if (!response.ok)
        throw new Error("Erro ao buscar clientes.");

    return response.json();

}

