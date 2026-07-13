# Padrões do Projeto

# Objetivo

Este documento reúne todos os padrões oficiais utilizados no AutoNova.

Seu objetivo é garantir que qualquer desenvolvedor consiga escrever código seguindo exatamente a mesma identidade arquitetônica do projeto.

Todo código novo deverá respeitar estas regras.

Caso algum padrão seja alterado, este documento deverá ser atualizado imediatamente.

---

# Filosofia

O projeto prioriza:

- simplicidade
- consistência
- reutilização
- legibilidade
- escalabilidade
- manutenção

É preferível escrever mais código organizado do que menos código difícil de manter.

---

# Organização Geral

Toda estrutura encontra-se em:

```

src/

```

Jamais criar arquivos fora da arquitetura definida.

---

# Estrutura Oficial

```
app/
components/
hooks/
services/
types/
styles/
providers/
contexts/
constants/
config/
lib/
assets/
```

---

# Convenções de Nome

## Componentes

Sempre PascalCase.

Correto

```
EmpresaCard.tsx

EmpresaForm.tsx

MetricCard.tsx
```

Errado

```
empresaCard.tsx

empresacard.tsx
```

---

## Hooks

Sempre iniciados por use.

Correto

```
useEmpresas.ts

useClientes.ts

useSidebar.ts
```

---

## Services

Sempre:

```
entidade.service.ts
```

Exemplo

```
empresa.service.ts

cliente.service.ts

usuario.service.ts
```

---

## Types

Sempre:

```
entidade.ts
```

Nunca:

```
empresa.types.ts
```

---

## Providers

Sempre terminam com

```
Provider
```

Exemplo

```
ThemeProvider

SidebarProvider
```

---

# Tipagem

Nunca utilizar

```
any
```

Sempre criar interfaces.

Exemplo

```ts
export interface Empresa {

    _id: string;

    nome: string;

    email: string;

    telefone: string;

    ativo: boolean;

}
```

---

# Props

Sempre tipadas.

Correto

```tsx
interface Props {

    empresa: Empresa;

}

export function EmpresaCard({

    empresa,

}: Props) {

}
```

Nunca utilizar props implícitas.

---

# Imports

Sempre seguir esta ordem.

Bibliotecas

↓

Aliases

↓

Components

↓

Hooks

↓

Services

↓

Types

↓

CSS

Exemplo

```tsx
"use client";

import { useMemo } from "react";

import { useEmpresas } from "@/hooks/useEmpresas";

import { EmpresaTable } from "@/components/modules/empresa/EmpresaTable";

import { Button } from "@/components/ui/Button";

import type { Empresa } from "@/types/empresa";
```

---

# Componentes

Todo componente possui apenas uma responsabilidade.

Exemplo

EmpresaTable

↓

Tabela

EmpresaCard

↓

Card

EmpresaFilter

↓

Filtros

EmpresaForm

↓

Formulário

Nunca misturar responsabilidades.

---

# Estrutura dos Modules

Cada entidade possui exatamente quatro componentes.

```
EmpresaCard

EmpresaForm

EmpresaFilter

EmpresaTable
```

Todos seguem exatamente a mesma estrutura.

---

# Estrutura do Card

```tsx
<Card>

    Conteúdo

</Card>
```

Nunca adicionar lógica.

---

# Estrutura do Form

Sempre

```
Label

↓

Input

↓

Mensagem de erro

↓

Button
```

Jamais utilizar layouts diferentes.

---

# Estrutura da Table

Sempre utilizar

```
<Table>

<thead>

<tbody>

</Table>
```

Nunca utilizar div simulando tabela.

---

# Estrutura do Filter

Sempre

```
SearchInput

↓

Select

↓

Filtros adicionais
```

---

# Hooks

Todo hook retorna

```ts
loading

erro

dados

criar()

editar()

deletar()

atualizar()
```

Nunca retornar estados desnecessários.

---

# Services

Sempre utilizar

```ts
try

catch
```

Sempre lançar erro.

Nunca utilizar toast.

Nunca alterar interface.

---

# Pages

As páginas possuem apenas responsabilidade de montagem.

Exemplo

```tsx
<PageHeader/>

<PageActions/>

<EmpresaFilter/>

<EmpresaTable/>

<Pagination/>
```

Nunca colocar regras complexas.

---

# Estados

Toda página deve possuir.

Loading

Erro

Sem resultados

Sem conexão

Sucesso

Vazio

Nunca assumir que haverá dados.

---

# Loading

Sempre utilizar

```
Spinner
```

Nunca GIF.

Nunca texto piscando.

---

# Empty State

Sempre utilizar

```
EmptyState
```

Nunca deixar páginas vazias.

---

# Modais

Sempre utilizar

```
Modal
```

Jamais criar modais personalizados.

---

# Inputs

Sempre utilizar

```
Input
```

Nunca

```
<input>
```

diretamente.

---

# Botões

Sempre utilizar

```
Button
```

Nunca

```
<button>
```

diretamente.

---

# Cards

Sempre utilizar

```
Card
```

Nunca criar containers personalizados.

---

# Tabelas

Sempre utilizar

```
Table
```

Nunca criar estilos novos.

---

# Ícones

Biblioteca oficial

```
Lucide React
```

Nunca misturar bibliotecas.

---

# CSS

Nunca utilizar

style={{}}

Nunca utilizar CSS inline.

Sempre

Tailwind

ou

CSS Global.

---

# Tailwind

Sempre utilizar utilitários existentes.

Evitar

```
mt-[37px]
```

Preferir

```
mt-8

mt-6

mt-4
```

---

# Espaçamentos

Escala oficial

```
4

8

12

16

24

32

48

64

96

128
```

Nunca utilizar valores arbitrários.

---

# Radius

Sempre utilizar

```
rounded-md

rounded-lg

rounded-xl
```

Nunca

```
rounded-[17px]
```

---

# Cores

Nunca utilizar cores diferentes da UI Specification.

Toda cor deve vir dos tokens oficiais.

---

# Responsividade

Sempre Mobile First.

Breakpoints

```
sm

md

lg

xl

2xl
```

Nunca criar media queries arbitrárias.

---

# Performance

Evitar

renderizações desnecessárias

props duplicadas

hooks gigantes

componentes enormes

---

# Componentes Grandes

Se ultrapassar aproximadamente

```
250 linhas
```

avaliar divisão.

---

# Arquivos Grandes

Se ultrapassar

```
400 linhas
```

avaliar separação.

---

# Console

Nunca deixar

```
console.log()
```

no código.

---

# Comentários

Evitar comentários desnecessários.

Código bem escrito explica sozinho.

---

# TODO

Nunca enviar

```
TODO
```

para produção.

---

# Build

Antes de finalizar.

Executar

```
pnpm lint

pnpm tsc --noEmit

pnpm build
```

Todos devem finalizar sem erro.

---

# Checklist

Antes de concluir qualquer tarefa verificar.

☐ Sem any

☐ Sem console.log

☐ Sem estilos inline

☐ Componentes reutilizados

☐ Arquitetura respeitada

☐ Responsivo

☐ Build funcionando

☐ Hooks separados

☐ Services separados

☐ Types separados

☐ UI Specification respeitada

☐ Código limpo

☐ Imports organizados

☐ Nomenclatura correta

---

# Regra Final

Toda implementação deve parecer que sempre existiu dentro do AutoNova.

Se um novo colaborador abrir o projeto, ele não deve conseguir identificar qual parte foi escrita por quem.

Todo código deve seguir exatamente os mesmos padrões.

A consistência vale mais do que preferências pessoais do desenvolvedor.