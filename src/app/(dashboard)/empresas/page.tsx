
"use client";

import { useEffect, useMemo, useState } from "react";

import { useEmpresas } from "@/hooks/useEmpresas";

import { PageHeader } from "@/components/layout/PageHeader";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function EmpresasPage() {

    const {

        empresas,

        loading,

        atualizar, 

    } = useEmpresas();

    const [busca, setBusca] = useState("");

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

    return (

        <>

            <PageHeader

                title="Empresas"

                description="Gerencie as empresas cadastradas."

            />

            <Card>

                <div className="page-actions">

                    <input

                        className="input"

                        placeholder="Pesquisar empresa..."

                        value={busca}

                        onChange={(e)=>setBusca(e.target.value)}

                    />

                    <Button>

                        Nova Empresa

                    </Button>

                </div>

                <div className="table-wrapper">

                    <table className="table">

                        <thead>

                            <tr>

                                <th>Nome</th>

                                <th>E-mail</th>

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

                            {!loading && lista.map((empresa)=>(

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

                                        <span
                                            className={
                                                empresa.ativo
                                                    ? "badge badge-success"
                                                    : "badge badge-danger"
                                            }
                                        >

                                            {empresa.ativo ? "Ativa" : "Inativa"}

                                        </span>

                                    </td>

                                    <td>

                                        <div className="flex gap-2">

                                            <Button variant="secondary">

                                                Editar

                                            </Button>

                                            <Button variant="danger">

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

        </>

    );

}
