
export interface Agendamento {

    _id: string;

    empresaId: string;

    clienteId: string;

    servicoId: string;

    data: string;

    horario: string;

    status: string;

    observacoes?: string;

    createdAt: string;

    updatedAt: string;

}

