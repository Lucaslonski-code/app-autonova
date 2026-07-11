
export interface Servico {

    _id: string;

    empresaId: string;

    nome: string;

    descricao?: string;

    preco: number;

    duracao: number;

    ativo: boolean;

    createdAt: string;

    updatedAt: string;

}

