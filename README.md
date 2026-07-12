
# Front-end — AutoNova

## Stack

- Next.js 16 (App Router)
- React
- TypeScript
- Axios
- js-cookie
- pnpm

---

# Estrutura

Toda a aplicação está localizada em:

src/

Organização principal:

```
src
├── app
├── assets
├── components
├── config
├── constants
├── contexts
├── hooks
├── lib
├── providers
├── services
├── styles
└── types
```

---

# Arquitetura

A aplicação utiliza App Router.

```
app
├── (auth)
└── (dashboard)
```

Cada grupo possui seu próprio layout.

---

# Components

Os components estão separados por responsabilidade.

```
components
├── actions
├── dashboard
├── forms
├── layout
├── modules
├── navigation
├── table
└── ui
```

## ui

Components reutilizáveis.

Exemplo:

- Button
- Card
- Input
- Modal
- Badge
- Table
- Pagination
- Spinner
- SearchInput

Nunca duplicar components.

Sempre reutilizar.

---

## layout

Componentes estruturais.

Exemplo:

- Sidebar
- Topbar
- Header
- Footer
- PageHeader
- ProtectedRoute

---

## modules

Cada entidade possui seu módulo.

Exemplo:

```
empresa

EmpresaCard
EmpresaFilter
EmpresaForm
EmpresaTable
```

O mesmo padrão existe para:

- cliente
- serviço
- usuário
- agendamento
- configuração

Esses arquivos são apenas componentes de apresentação.

A lógica NÃO deve ficar neles.

---

# Pages

Toda regra de negócio deve ficar dentro das pages.

As pages devem:

- chamar hooks
- chamar services
- controlar modal
- controlar pesquisa
- controlar paginação
- controlar edição
- controlar exclusão

Os components de modules apenas exibem interface.

---

# Hooks

```
hooks

useEmpresas
useClientes
useServicos
useUsuarios
useAgendamentos
```

Responsáveis por:

- carregar dados
- atualizar lista
- controlar loading

Nunca acessar API diretamente na page.

---

# Services

Todos os CRUD ficam em:

```
services
```

Padrão:

```
listar()

buscar()

criar()

atualizar()

excluir()
```

Exemplo:

empresa.service.ts

```
listarEmpresas()

buscarEmpresa()

criarEmpresa()

atualizarEmpresa()

excluirEmpresa()
```

As pages devem consumir apenas os services.

---

# Types

Todos os tipos ficam em

```
types
```

Nunca declarar interfaces dentro das pages.

Sempre importar.

---

# Lib

```
lib

api.ts
cookies.ts
interceptors.ts
storage.ts
validators.ts
utils.ts
```

Toda comunicação HTTP utiliza:

```
api.ts
```

Nunca utilizar fetch diretamente.

---

# Styles

```
styles

variables.css
utilities.css
layout.css
dashboard.css
forms.css
animations.css
typography.css
scrollbar.css
```

Toda estilização deve utilizar os arquivos existentes.

Não criar CSS duplicado.

---

# Regras

- Não criar novos components se já existir equivalente.
- Não duplicar Table.
- Não duplicar Modal.
- Não duplicar Button.
- Não alterar arquitetura.
- Toda lógica fica na page.
- Components são somente apresentação.

---

# Fluxo de uma página

Exemplo:

```
Page

↓

useHook

↓

service

↓

api

↓

backend
```

A page controla:

- pesquisa
- modal
- loading
- paginação
- edição
- exclusão

Os modules apenas recebem props.

---

# Desenvolvimento

Instalar dependências

```
pnpm install
```

Rodar

```
pnpm dev
```

Verificar erros

```
pnpm tsc --noEmit
```

---

# Objetivo

Finalizar todas as páginas do dashboard mantendo exatamente a arquitetura existente, reutilizando os componentes atuais e evitando criação de infraestrutura paralela.

