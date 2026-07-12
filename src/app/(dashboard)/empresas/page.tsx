
"use client";

import { useEffect, useMemo, useState } from "react";

import { PageHeader } from "@/components/layout/PageHeader";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Badge from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";

import { EmpresaForm } from "@/components/modules/empresa/EmpresaForm";

import { useEmpresas } from "@/hooks/useEmpresas";

import { excluirEmpresa } from "@/services/empresa.service";

export default function EmpresasPage() {

    const {

        empresas,

        loading,

        atualizar,

    } = useEmpresas();

    const [busca, setBusca] = useState("");

    const [modalAberto, setModalAberto] = useState(false);

    useEffect(() => {

        void atualizar();

    }, []);

    const lista = useMemo(() => {

        return empresas.filter((empresa) =>

            empresa.nome
                .toLowerCase()
                .includes(busca.toLowerCase())

        );

    }, [empresas, busca]);

    async function remover(id: string) {

        if (!window.confirm("Deseja excluir esta empresa?")) {

            return;

        }

        await excluirEmpresa(id);

        await atualizar();

    }

    return (

        <>

            <PageHeader

                title="Empresas"

                description="Gerencie todas as empresas."

            />

            <Card>

                <div className="page-actions">

                    <Input

                        placeholder="Pesquisar empresa..."

                        value={busca}

                        onChange={(e) => setBusca(e.target.value)}

                    />

                    <Button

                        onClick={() => setModalAberto(true)}

                    >

                        Nova Empresa

                    </Button>

                </div>

                <div className="table-wrapper">

                    <table className="table">

                        <thead>

                            <tr>

                                <th>Nome</th>

                                <th>Email</th>

                                <th>Telefone</th>

                                <th>Status</th>

                                <th>Ações</th>

                            </tr>

                        </thead>

                        <tbody>

                            {loading && (

                                <tr>

                                    <td colSpan={5}>

                                        Carregando...

                                    </td>

                                </tr>

                            )}

                            {!loading && lista.length === 0 && (

                                <tr>

                                    <td colSpan={5}>

                                        Nenhuma empresa encontrada.

                                    </td>

                                </tr>

                            )}

                            {!loading && lista.map((empresa) => (

                                <tr key={empresa._id}>

                                    <td>

                                        {empresa.nome}

                                    </td>

                                    <td>

                                        {empresa.email}

                                    </td>

                                    <td>

                                        {empresa.telefone}

                                    </td>

                                    <td>

                                        <Badge>

                                            {empresa.ativo

                                                ? "Ativa"

                                                : "Inativa"}

                                        </Badge>

                                    </td>

                                    <td>

                                        <div className="flex gap-2">

                                            <Button

                                                variant="secondary"

                                            >

                                                Editar

                                            </Button>

                                            <Button

                                                variant="danger"

                                                onClick={() => void remover(empresa._id)}

                                            >

                                                Excluir

                                            </Button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </Card>

            <Modal open={modalAberto}>

                <div className="flex justify-between items-center mb-5">

                    <h2>

                        Nova Empresa

                    </h2>

                    <Button

                        variant="secondary"

                        onClick={() => setModalAberto(false)}

                    >

                        Fechar

                    </Button>

                </div>

                <EmpresaForm />

            </Modal>

        </>

    );

}

