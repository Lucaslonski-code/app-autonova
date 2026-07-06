
# APP AUTONOVA

Sistema principal da plataforma Autonova.

## Objetivo

Este projeto é responsável por:

* Cadastro de empresas
* Login de usuários
* Autenticação Google
* Recuperação de senha
* Dashboard administrativo
* Gestão de clientes
* Gestão de agendamentos
* Gestão de pedidos
* Gestão de produtos
* Integração com agentes de IA
* Integração com MCP Server

---

## Arquitetura

```text
Frontend

Next.js 16
React 19
TypeScript
Tailwind CSS

↓

API

api.autonovasoftware.com

↓

MongoDB
```

---

## Ambientes

```env
NEXT_PUBLIC_API_URL=https://api.autonovasoftware.com/api
```

---

## Instalação

```bash
pnpm install
```

---

## Desenvolvimento

```bash
pnpm dev
```

---

## Build

```bash
pnpm build
```

---

## Estrutura

```text
src/

app/
components/
contexts/
hooks/
services/
types/
lib/
constants/
```

---

## Documentação

Toda documentação operacional encontra-se na pasta:

```text
docs/
```

A leitura deve seguir a ordem indicada dentro da documentação.

---

## Status Atual

Projeto em desenvolvimento.

Módulos planejados:

* Autenticação
* Dashboard
* Clientes
* Agenda
* Produtos
* Pedidos
* IA
* Integrações
* Configurações

---

## Equipe

Autonova Software

Todos os direitos reservados.

