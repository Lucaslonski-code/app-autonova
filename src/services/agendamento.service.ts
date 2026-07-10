
export async function listarAgendamentos() {

    const response = await fetch("/api/agendamentos");

    if (!response.ok)
        throw new Error("Erro ao buscar agendamentos.");

    return response.json();

}

