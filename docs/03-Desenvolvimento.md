# Desenvolvimento

# Objetivo

Este documento define como novas funcionalidades devem ser desenvolvidas dentro do AutoNova.

Não importa quem esteja desenvolvendo.

Todos devem seguir exatamente o mesmo fluxo.

Isso garante:

- organização
- previsibilidade
- facilidade de manutenção
- qualidade do código
- consistência entre colaboradores

---

# Filosofia de Desenvolvimento

Antes de escrever qualquer linha de código, responda:

- O problema já possui solução dentro do projeto?
- Existe componente semelhante?
- Existe hook semelhante?
- Existe service semelhante?
- Estou respeitando a arquitetura?
- Estou escrevendo código reutilizável?

Se alguma resposta for "não sei", procure primeiro.

Nunca implemente imediatamente.

---

# Fluxo Oficial

Toda funcionalidade deve seguir esta ordem.

```

Planejamento

↓

Modelagem

↓

Types

↓

Services

↓

Hooks

↓

Components

↓

Pages

↓

Testes

↓

Review

↓

Merge

```

Nunca pular etapas.

---

# Planejamento

Toda nova funcionalidade começa respondendo:

## O que será criado?

Exemplo:

Cadastro de Empresas

---

## Quais telas serão afetadas?

Exemplo

Dashboard

Empresas

Clientes

---

## Quais componentes serão necessários?

Exemplo

EmpresaTable

EmpresaCard

EmpresaForm

EmpresaFilter

---

## Quais hooks serão utilizados?

Exemplo

useEmpresas()

---

## Quais services serão necessários?

empresa.service.ts

---

## Quais types serão necessários?

empresa.ts

---

# Desenvolvimento por Camadas

Sempre desenvolver de baixo para cima.

## Ordem

Types

↓

Services

↓

Hooks

↓

Components

↓

Pages

Nunca começar pelas páginas.

---

# Types

Primeiro criar os contratos.

Exemplo

```

Empresa

Cliente

Serviço

Usuário

```

Nunca utilizar any.

Nunca repetir interfaces.

---

# Services

Depois criar os métodos HTTP.

Exemplo

```

listarEmpresas()

buscarEmpresa()

criarEmpresa()

editarEmpresa()

deletarEmpresa()

```

Services nunca possuem lógica visual.

---

# Hooks

Depois criar o hook.

Exemplo

```

const {

empresas,

loading,

erro,

atualizar,

criar,

editar,

deletar

}

=

useEmpresas()

```

Toda lógica fica aqui.

---

# Components

Depois criar os componentes.

Sempre pequenos.

Sempre reutilizáveis.

Exemplo

EmpresaTable

↓

renderiza tabela

EmpresaCard

↓

renderiza card

EmpresaFilter

↓

renderiza filtros

EmpresaForm

↓

renderiza formulário

Nunca misturar responsabilidades.

---

# Pages

Somente depois montar a página.

A página organiza.

Ela não pensa.

Ela apenas importa.

Exemplo

```

<PageHeader/>

<PageActions/>

<EmpresaFilter/>

<EmpresaTable/>

<Pagination/>

```

---

# Convenções

Sempre utilizar

TypeScript

ESLint

Prettier

pnpm

Nunca utilizar require.

Sempre import.

---

# Imports

Ordem oficial

Bibliotecas externas

↓

Aliases

↓

Componentes

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

Cada componente deve possuir:

Nome claro

Uma responsabilidade

Props tipadas

Sem lógica complexa

Sem axios

Sem fetch

---

# Hooks

Todo hook deve:

retornar loading

retornar erro

retornar funções

retornar dados

Exemplo

```

const {

loading,

erro,

dados,

criar,

editar,

remover

}

```

---

# Services

Sempre utilizar

try

catch

lançar erro

Nunca mostrar toast dentro do service.

Nunca alterar interface.

---

# CSS

Nunca utilizar

style={{}}

Nunca utilizar

margin-left: 37px

Utilizar somente:

Tailwind

ou

classes globais existentes.

---

# Componentização

Antes de criar um componente novo verificar:

Existe semelhante?

Pode ser reutilizado?

Pode ser parametrizado?

Duplicação é proibida.

---

# Estados

Toda página deve prever

Loading

Erro

Sem resultados

Sucesso

Vazio

Nunca assumir que haverá dados.

---

# Responsividade

Toda tela deve funcionar

Desktop

Notebook

Tablet

Mobile

Sem exceções.

---

# Acessibilidade

Todos os formulários devem possuir

Label

Placeholder

Focus

Mensagens de erro

Navegação por teclado

ARIA quando necessário

---

# Performance

Evitar:

renderizações desnecessárias

componentes gigantes

hooks enormes

props duplicadas

Sempre utilizar

useMemo

useCallback

somente quando realmente necessário.

---

# Organização dos Arquivos

Nunca criar arquivos aleatórios.

Sempre respeitar:

```

components/

hooks/

services/

types/

```

---

# Commits

Todo commit deve possuir uma responsabilidade.

Exemplos

```
feat(empresas): adiciona formulário de cadastro

fix(clientes): corrige paginação

style(dashboard): melhora espaçamentos

refactor(servicos): reorganiza hook

docs: atualiza arquitetura

```

Nunca fazer commits gigantes.

---

# Pull Requests

Toda PR deve conter:

## Objetivo

O que foi desenvolvido.

## Alterações

Lista resumida.

## Impacto

Quais módulos foram afetados.

## Checklist

- [ ] TypeScript sem erros
- [ ] Build funcionando
- [ ] Componentes reutilizados
- [ ] Responsivo
- [ ] UI Specification respeitada

---

# Review

Antes de solicitar revisão verificar:

☐ Não há código morto

☐ Não há console.log

☐ Não há TODO esquecidos

☐ Não há imports não utilizados

☐ Não há any

☐ Não há estilos inline

☐ Não há duplicação

☐ Não há regras de negócio nas páginas

☐ Não há chamadas HTTP em componentes

---

# Regra Final

Velocidade nunca é prioridade.

Qualidade sempre será.

É melhor implementar uma funcionalidade corretamente do que entregar rapidamente algo que precisará ser refeito depois.

Todo código deve ser escrito pensando que outro desenvolvedor irá mantê-lo no futuro.

Escreva código para pessoas.

O compilador apenas valida.